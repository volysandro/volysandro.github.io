/**
 * Author:		Usama Guenedi
 * File name: 	knex.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Connects to database using knex module and knex config file.				
 */

let environment = process.env.NODE_ENV || 'development';
let config = require('../conf/knexfile')[environment];
module.exports = require('knex')(config);