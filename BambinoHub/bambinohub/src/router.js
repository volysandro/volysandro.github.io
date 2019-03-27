import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Chat from './views/Chat.vue'
import ChatBig from './views/ChatBig.vue'
import Guest from './views/Guest.vue'
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest,
    },

    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },
    {
        path: '/chatbig',
        name: 'ChatBig',
        component: ChatBig,
  }  
  ]
});



router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else next();
});



export default router;