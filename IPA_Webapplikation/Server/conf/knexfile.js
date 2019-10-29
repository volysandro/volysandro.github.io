/**
 * Author:		Usama Guenedi
 * File name: 	knexfile.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Sets values for a connection to the MySQL server.
 * 						
 */

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: process.env.PASSWORD || '1120',
            database: 'Sporttag_DB',
        }
    }
}