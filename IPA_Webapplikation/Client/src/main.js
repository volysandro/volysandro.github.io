/**
* Author:		    Usama Guenedi
* File name: 	  main.js
* Version:		  1.0
* Date:		      01.03.2019
* Description:	Main.js is the main file.
*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  router
} from './router'
import Vuetify from 'vuetify'
import {
  sync
} from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'

import store from '@/store'
Vue.config.productionTip = false

Vue.use(Vuetify)

// Makes the router an global store object
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
