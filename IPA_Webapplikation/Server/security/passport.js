/**
 * Author:		Usama Guenedi
 * File name: 	passport.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description: Gives a user a passport.	
 */

const PASSPORT = require('passport')
const USER = require('../models/user')
const CONFIG = require('../conf/config')


// Copied from a YouTube tutorial
let opts = {}
const JWT_STRATEGY = require('passport-jwt').Strategy
const EXTRACT_JWT = require('passport-jwt').ExtractJwt

// Decodes the token recieved from the frontend
opts.jwtFromRequest = EXTRACT_JWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = CONFIG.authentication.jwtSecret
PASSPORT.use(
	new JWT_STRATEGY(
		opts, 
		// Compares the DB user against the decoded user
		async function(jwt_payload, done){
			let user = await USER.getUser(jwt_payload.user.Kuerzel)
			if(!user){
				return done(err, false)
			}
			if(user) {
				done(null, user)
			}else{
				done(null, false)
			}
	})
)

