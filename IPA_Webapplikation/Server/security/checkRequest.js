/**
 * Author:		Usama Guenedi
 * File name: 	checkRequest.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Check if the user is an admin or something else.					
 */

const PASSPORT = require('passport')

// Copied from a YouTube tutorial
// Incoming request is distinguished and admin state is set
// Forwarding the request to the corresponding one CONTROLLER
module.exports = (req, res, next) => {
    PASSPORT.authenticate('jwt', function (err, user) {
        if (err || !user) {
            res.status(403).send({
                error: 'Keine Berechtigungen'
            })
        }else{
            if(user[0].Rolle === 'Lehrpersonen'){
                req.user = {user, admin: true}
                next()
			}else{
                req.user = {user, admin: false}
                next()
            }
        }
    })(req, res, next)
}