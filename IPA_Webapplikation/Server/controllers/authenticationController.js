/**
 * Author:		Usama Guenedi
 * File name: 	authenticationController.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Is responsible for the rules. It defines whether the login matches the login of the AD server.
 *              Is the validation coplited, the user gets a token valide for one week.
 */

const USER = require('../models/user')
const JWT = require('jsonwebtoken')
const CONFIG = require('../conf/config')

// Copied from a YouTube tutorial
function jwtSignUser(user) {
    //token validation for one week
    const ONE_WEEK = 60 * 60 * 24 * 7
    return JWT.sign({
        user
    }, CONFIG.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    // Compares the initails and password from the frontend to the one from the AD server
    async login(req, res) {

        try {
            let {
                username,
                password
            } = req.body


            let user = await USER.login(username, password)
            if (!user) {
                return res.status(403).send({
                    error: 'Kürzel und Passwort stimmen nicht überein.'
                })
            } else {
                res.send({
                    user: user,
                    token: jwtSignUser(user[0])
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Ein Fehler ist aufgetreten'
            })
        }


    }
}