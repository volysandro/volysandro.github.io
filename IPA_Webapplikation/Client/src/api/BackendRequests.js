/**
* Author:		    Usama Guenedi
* File name: 	  BackendRequests.js
* Version:		  1.0
* Date:		      01.03.2019
* Description:	Sends data to the backend.
*/

//Imports BackendConnection.js
import conn from '@/api/BackendConnection'

export default {

  // User Authentication
  login(data) {
    return conn().post('login', data)
  },

  // Get sports
  getActivities() {
    return conn().get('activities')
  },

  // Get entry from specific user
  getForm(userId) {
    return conn().get(`form/${userId}`)
  },

  // Get all entries
  getAllForms() {
    return conn().get('allForms')
  },

  // create entry
  postForm(userId, form) {
    return conn().post('register', userId, form)
  },

}
