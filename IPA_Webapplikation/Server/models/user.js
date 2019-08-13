/**
 * Author:		Usama Guenedi
 * File name: 	user.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	This script provides the functionality to migrate users from the Active Directory server
 * 				into the Database on successful login.  
 */


// Loading file 'knex', used for MySQL query building
const KNEX = require('./knex')
// Loading module 'ldapjs', used to establish connection to the AD
const LDAP = require('ldapjs')
// Loading module 'mysql', adapter that is required by 'knexjs' to make requests to the MySQL DB
const MYSQL = require('mysql')


// The ldap.createClient() call doesn't connect to the server when you execute the function,
// rather sets up the credentials to authentication
const MAIN_CLIENT = LDAP.createClient({
    url: 'ldap://10.10.10.21',
    reconnect: true
})
const USER_CLIENT = LDAP.createClient({
    url: 'ldap://10.10.10.21',
    reconnect: true
})

USER_CLIENT.on('error', function(err) {
    USER_CLIENT.destroy()
})

// Performs a bind operation to the LDAP server.
MAIN_CLIENT.bind('CN=Usama,CN=Users,DC=ipa,DC=local', 'gibbiX12345', function(err) {
    err ? console.log(err) : ''
});

// Establish connetcion with the AD server using DN and password, error callback
MAIN_CLIENT.on('error', function(err) {
    MAIN_CLIENT.bind('CN=Usama,CN=Users,DC=ipa,DC=local', 'gibbiX12345', function(err) {
        err ? console.log(err) : ''
    });
})

// Searches the AD server for inforamtion and outputs them
function ADSearch(username, password) {
    return new Promise(function(resolve, reject){

        // If the username or password are less than or equal to 0 then abort
        if(username.length <= 0 || password.length <= 0){
            reject()
        }

        // Options for the search request to the AD
        const OPTS = {
            filter: `samAccountName=${username}`,
            scope: 'sub',
            attributes: ['givenName', 'sn', 'userPrincipalName', 'dn']
        }
       
        MAIN_CLIENT.search('DC=ipa,DC=local', OPTS, function(err, res) {
            
            let user
            res.on('searchEntry', function(entry) {
                user = entry.object;
            })

            // On last request
            res.on('end', function() {
                if (!user || user == undefined){
                    reject()
                }else{
                    USER_CLIENT.bind(user.dn, `${password}`, function(err) {
                        if(err){
                            reject()
                        }else{
                            resolve(user)
                        }
                    })
                }
            })
        })
    })
}

// Inserts the user who logs in with the class and role in the local database
// At the end, user return
async function DBSearch(userDN) {

    let user = []

    // Short domainlogon name until at-sign (in16guus@ipa.local > in16guus) 
    let initialsToken = userDN.userPrincipalName.substring(0, userDN.userPrincipalName.indexOf('@'))

    // Short DN name to provide OU information
    let ouToken = userDN.dn.split(",").slice(1, -2)
    let rolle = ouToken[ouToken.length-1].substring(3)
    let klasse = ouToken.slice(0, -1).toString().substring(3)

    userDB = await KNEX.select().from('User').where('Kuerzel', initialsToken)

    if(userDB.length <= 0){

        let rolleID = null
        
        let rolleDB = await KNEX.select().from('Rolle').where('Rolle', rolle)
        console.log(rolleDB);
        
        if(rolleDB.length == 0){
            rolleID = await KNEX('Rolle').insert({
                Rolle: rolle
            })
        }else{
            console.log(rolleDB[0].ID_Rolle);
            
            rolleID = rolleDB[0].ID_Rolle
        }

        let klasseID = null

        if(klasse){
            
            let klasseDB = await KNEX.select().from('Klasse').where('Klassenname', klasse)
            
            if(klasseDB.length == 0){
                klasseID = await KNEX('Klasse').insert({
                    Klassenname: klasse
                })
            }else{
                klasseID = klasseDB[0].ID_Klasse
            }
        }

        userID = await KNEX('User').insert({
            Vorname: userDN.givenName,
            Nachname: userDN.sn,
            Kuerzel: initialsToken,
            Rolle_ID: rolleID,
            Klasse_ID: klasseID
        })

        return await KNEX.select(
            'ID_User',
            'Vorname',
            'Nachname',
            'Kuerzel',
            'Rolle',
            'Klassenname'
        ).from('User')
        .leftJoin('Rolle', 'User.Rolle_ID', 'Rolle.ID_Rolle')
        .leftJoin('Klasse', 'User.Klasse_ID', 'Klasse.ID_Klasse')
        .where('ID_User', userID)

    }else{
        return await KNEX.select(
            'ID_User',
            'Vorname',
            'Nachname',
            'Kuerzel',
            'Rolle',
            'Klassenname'
        ).from('User')
        .leftJoin('Rolle', 'User.Rolle_ID', 'Rolle.ID_Rolle')
        .leftJoin('Klasse', 'User.Klasse_ID', 'Klasse.ID_Klasse')
        .where('ID_User', userDB[0].ID_User)
    }

}

// get the full user from the DB
async function getUser(initials){
    return await KNEX.select(
        'ID_User',
        'Vorname',
        'Nachname',
        'Kuerzel',
        'Rolle',
    ).from('User')
    .leftJoin('Rolle', 'User.Rolle_ID', 'Rolle.ID_Rolle')
    .where('Kuerzel', initials)
}

// Calls a chain of functions dislpays at the top
async function login(username, password){

    return ADSearch(username, password)
    .then(userDN => DBSearch(userDN))
    .catch(err => {return err})

}

module.exports = {
    login: login,
    getUser: getUser
}