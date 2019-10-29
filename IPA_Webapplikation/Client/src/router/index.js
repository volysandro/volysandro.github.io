/**
* Author:		    Usama Guenedi
* File name: 	  index.js
* Version:		  1.0
* Date:		      01.03.2019
* Description:	The connections between the different components are defined here.
*/

// Imports Vue from a library 
import Vue from 'vue'
// Imports Router from a library 
import Router from 'vue-router'
// Imports Login from a C:\IPA_Webapplikation\Client\src\components\Login.vue 
import Login from '../components/Login.vue'
// Imports Anmeldeformular from C:\IPA_Webapplikation\Client\src\components\Anmeldeformular.vue
import Anmeldeformular from '../components/Anmeldeformular.vue'
// Imports Anmeldeformular from C:\IPA_Webapplikation\Client\src\components\Lehreransicht.vue
import Lehreransicht from '../components/Lehreransicht.vue'
// Imports Info from C:\IPA_Webapplikation\Client\src\components\Info.vue
import Info from '../components/Info.vue'
// Imports store from C:\IPA_Webapplikation\Client\src\store.js
import store from '@/store'

Vue.use(Router)

// The URLs are defined here.
export const router = new Router({
  // I needed to change the mode: to 'history' to use the url without '#
  mode: 'history',
  base: process.env.BASE_URL,
  props: true,
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/anmeldeformular',
      name: 'anmeldeformular',
      component: Anmeldeformular
    },
    {
      path: '/lehreransicht',
      name: 'lehreransicht',
      component: Lehreransicht
    },
    {
      path: '/',
      name: 'info',
      component: Info
    },
    {
      path: '*',
      name: 'login',
      component: Login
    },
  ]
})

// Defines the access for the page '/anmeldeformular' and the page '/leheransicht'
router.beforeEach((to, from, next) => {
  const adminPage = ['/anmeldeformular']
  const authRequired = adminPage.includes(to.path);

  const admin = store.state.admin

  if (authRequired && admin) {
    return next('/lehreransicht')
  }

  next();
})
