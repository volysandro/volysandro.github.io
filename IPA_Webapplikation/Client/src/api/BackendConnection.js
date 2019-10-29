/**
* Author:		    Usama Guenedi
* File name: 	  BackendConnection.js
* Version:		  1.0
* Date:		      01.03.2019
* Description:	Establishes the connection to the backend.
*/

// Imports axios from a library. Axios is a promise based HTTP client for the browser and node.js
import axios from 'axios';
import store from '@/store'

// It will create a new instance of Axios with a custom configuration
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
