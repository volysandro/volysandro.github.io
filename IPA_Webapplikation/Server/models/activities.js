/**
 * Author:		Usama Guenedi
 * File name: 	activities.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Gets the required information from the database.				
 */

// Imports knex.js 
const KNEX = require('./knex')
// Used from KNEX
const MYSQL = require('mysql')

// Get all sports from the local database
async function getAllActivities() {
    let activities = await KNEX('Sportarten')

    return activities
}

// Search if the user is already registered
async function checkUserID(userId) {

    return await KNEX('Auswahl').where('User_ID', userId)

}

// Gives the kinds of sports the apprentice has chosen, his name and, role and class 
async function getForm(userId) {
    return await KNEX.select(
        'ID_User',
        'User.Kuerzel',
        'User.Vorname',
        'User.Nachname',
        'Klassenname',
        'Rolle',
        'sp1.Sportarten as first', 
        'sp2.Sportarten as second',
        'sp3.Sportarten as third',
        'Schugroesse'
        ).from('Auswahl')
        .leftJoin('Sportarten as sp1', 'Auswahl.Erste_Sportart', 'sp1.ID_Sportarten')
        .leftJoin('Sportarten as sp2', 'Auswahl.Zweite_Sportart', 'sp2.ID_Sportarten')
        .leftJoin('Sportarten as sp3', 'Auswahl.Dritte_Sportart', 'sp3.ID_Sportarten')
        .leftJoin('User', 'Auswahl.User_ID', 'User.ID_User')
        .leftJoin('Rolle', 'User.Rolle_ID', 'Rolle.ID_Rolle')
        .leftJoin('Klasse', 'User.Klasse_ID', 'Klasse.ID_Klasse')
        .where('ID_User', userId)
}

// This function is used from the teachers to get all the information registered in the Auswahl tabel
async function getAllForms(){
    return await KNEX.select(
        'ID_User',
        'User.Kuerzel',
        'User.Vorname',
        'User.Nachname',
        'Klassenname',
        'Rolle',
        'sp1.Sportarten as first', 
        'sp2.Sportarten as second',
        'sp3.Sportarten as third',
        'Schugroesse'
        ).from('Auswahl')
        .leftJoin('Sportarten as sp1', 'Auswahl.Erste_Sportart', 'sp1.ID_Sportarten')
        .leftJoin('Sportarten as sp2', 'Auswahl.Zweite_Sportart', 'sp2.ID_Sportarten')
        .leftJoin('Sportarten as sp3', 'Auswahl.Dritte_Sportart', 'sp3.ID_Sportarten')
        .leftJoin('User', 'Auswahl.User_ID', 'User.ID_User')
        .leftJoin('Rolle', 'User.Rolle_ID', 'Rolle.ID_Rolle')
        .leftJoin('Klasse', 'User.Klasse_ID', 'Klasse.ID_Klasse')
}

// Inserts the entries of the apprentice into the database
async function postForm(form) {

    return await KNEX('Auswahl').insert({
        User_ID: form.userID,
        Schugroesse: form.shoeSize,
        Erste_Sportart: form.first,
        Zweite_Sportart: form.second,
        Dritte_Sportart: form.third
    })

}

// Exports all the functions
module.exports = {
    getAllActivities: getAllActivities,
    getAllForms: getAllForms,
    post: postForm,
    check: checkUserID,
    getForm: getForm
}