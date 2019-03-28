import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/black-green-light.css'

import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';

var importusername = '';

export default {
  props: {
    exportusername: importusername
  }
}
 
Vue.use(VueSocketio, io('http://104.248.50.48:3000'));

Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.config.productionTip = false

let app = '';
let config = {
  apiKey: "AIzaSyDp_KFMEoOGZOSmQV-Kgo7vCJsOG9dFzck",
    authDomain: "bambinohub.firebaseapp.com",
    databaseURL: "https://bambinohub.firebaseio.com",
    projectId: "bambinohub",
    storageBucket: "bambinohub.appspot.com",
    messagingSenderId: "733764179092"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    router.push('/home');
    var useremail = firebase.auth().currentUser.email;
    var userdatapath = useremail.replace('@', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '');
                            firebase.database().ref('usernames/' + userdatapath).once('value').then(function(snapshot) {
                        
                        
                              importusername = (snapshot.val() && snapshot.val().username) || 'empty';
                              console.log(importusername);
                              localStorage.setItem('localstorageusername', importusername);
                        
                            });


  
  } else {
    router.replace('login');
    localStorage.setItem('localstorageusername', 'Guest');
  }
});






