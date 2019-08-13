/**
 * Author:		Usama Guenedi
 * File name: 	activitiesController.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	The activitiesController is responsible for the rules. 
 * 				He defines when the sports related requests are sent to the frontend.
 */

const ACTIVITIES = require('../models/activities')

module.exports = {

    // Forwards all sports to the frontend when a user calls the registration form
    async getAllActivities(req, res) {

        try {
            let rawActivities = await ACTIVITIES.getAllActivities()
            let activities = []

            rawActivities.map(val => {
                activities.push({
                    ID: val.ID_Sportarten,
                    Sportart: val.Sportarten
                })
            })

            res.send({
                activities
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({
                
                error: 'Ein Fehler ist aufgetreten'
            })
        }
    },

    // Returns all apprentices to an authenticated account 
    // If the user dosent have the permission, there is an error message
    async getAllForms(req, res){

        if(!req.user.admin){
            res.status(403).send({        
                error: 'Zugang verweigert'
            })
        }

        try {
            let allForms = await ACTIVITIES.getAllForms()

            res.status(200).send(allForms)
        
        } catch (err) {
            console.log(err);
            res.status(500).send('Interner Serverfehler')
        }

        
    },

    // Inserts an entry from a user into the database
    async postForm(req, res) {

        try {

            let formData = []

            formData.push({
                first: req.body.first,
                second: req.body.second,
                third: req.body.third,
                shoeSize: req.body.number,
                userID: req.body.userID
            })
            
            // Check if the user has already completed the registration form
            let checkUserID = await ACTIVITIES.check(formData[0].userID)

            if (checkUserID.length == 0 && formData[0].first != formData[0].second && formData[0].first != formData[0].third && formData[0].second != formData[0].third) {
                let entryID = await ACTIVITIES.post(formData[0])
                res.status(200).send({
                    message: `Erfolgreicher erstellter Eintrag ${entryID}`
                })
            } else {
                // If the user should prioritize several sports at the same time, an error message will be displayed 
                // The error message comes even if he is already registered.
                res.status(404).send({
                    error: `Es darf jede Sportart nur einmal ausgewählt werden!`
                })
            }

        } catch (err) {
            console.log(err);
            res.status(500).send('Interner Serverfehler')
        }
    },

    // Returns the entries of the apprentice if they exists
    async getForm(req, res) {

        try {
            userId = req.params.id

            let form = await ACTIVITIES.getForm(userId)

            res.status(200).send(form)
        } catch (err) {
            console.log(err);
            res.status(500).send('Interner Serverfehler')
        }
    }
}