import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
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
