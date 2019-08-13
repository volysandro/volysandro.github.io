/**
 * Author:		Usama Guenedi
 * File name: 	routes.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Recieves the incoming requests redirected from server.js.
 *              Chains user validation (CHECK_REQUEST) and forwards it to controller.
 * 						
 */

const AUTH_CONTROLLER = require('./controllers/authenticationController')
const ACTIVITIES_CONTROLLER = require('./controllers/activitiesController')
const CHECK_REQUEST = require('./security/checkRequest')

module.exports = (app) => {

    app.post('/login', AUTH_CONTROLLER.login)

    app.get('/activities', CHECK_REQUEST, ACTIVITIES_CONTROLLER.getAllActivities)

    app.get('/allForms', CHECK_REQUEST, ACTIVITIES_CONTROLLER.getAllForms)

    app.get('/form/:id', CHECK_REQUEST, ACTIVITIES_CONTROLLER.getForm)
    
    app.post('/register', CHECK_REQUEST, ACTIVITIES_CONTROLLER.postForm)
    

}