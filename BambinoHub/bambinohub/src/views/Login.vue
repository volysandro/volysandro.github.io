<template>
<v-layout>
  <div class="loginPage">


  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
    style="border-radius:8px"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light"> <a id="tweet" href="https://twitter.com/dimisaen/status/1058389974322700289">Twitter</a></span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Took me years to create a working login-auth form.. scared of the next steps.."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://pbs.twimg.com/profile_images/1081150292387860480/uNoFw-Pd_400x400.jpg"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Sandro V.</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">0</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">0</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>

      <v-card id="loginCard">
        <v-img
          src="https://www.swisspool-billard.ch/upload/images/news_gr/de/49_Sandro_1.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">BambinoHub Login</h3>
            <div>Where all of my progress is documented and ready to try!</div>
            <v-text-field id="emailInp"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field id="pwdInp"
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
              
            ></v-text-field>




          </div>
          
        </v-card-title>


        <v-card-actions>
          
          <v-btn @click="login" id="btnLogin" flat color="orange">Login</v-btn>
          <v-btn flat color="orange">Request Account</v-btn>
        </v-card-actions>
      </v-card>
  </div>

 </v-layout>
</template>
<script>



import firebase from 'firebase';
export default {
  name: 'login',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user){
        alert('connected')
      }, function(err){
        alert('fail' + err.message)
      });
    }
  }






}



</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginPage{
  margin: 0 auto;
  margin-top: 40px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#tweet{
  text-decoration: none;
  color: azure;
  margin: 0 auto;
  margin-top: 15px;

}
#loginCard{
margin: 0 auto;
margin-top: 50px;
border-radius: 8px;
}
</style>