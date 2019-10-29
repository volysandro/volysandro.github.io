/**
 * Author:		Usama Guenedi
 * File name: 	config.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	To encrypt and decrypt the token, jwtSecret is defined.
 * 	            Port is set here.					
 */

module.exports = {
    port: 8081,
    authentication: {
        jwtSecret: 'superSecretKey'
    }
}