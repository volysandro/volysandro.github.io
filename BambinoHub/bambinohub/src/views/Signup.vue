<template>
<v-layout>

  <div class="loginPage">


      <Tweet></Tweet>
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
            <v-text-field id="unameInp"
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field id="pwdInp"
            
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
               :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            counter
            @click:append="show1 = !show1"
              
            ></v-text-field>




          </div>
          
        </v-card-title>


        <v-card-actions>
          
          <v-btn @click="signup" id="btnLogin" flat color="orange">Sign Up</v-btn>
          <v-btn @click="loginpage" flat color="orange">Back to Login</v-btn>
          <v-btn @click="guest" flat color="orange">As Guest</v-btn>

        </v-card-actions>
      </v-card>
  </div>

 </v-layout>
</template>
<script>


import Tweet from './Tweet.vue'
import firebase from 'firebase';
export default {
  name: 'login',
  components:{
    Tweet
  },
  data(){
    return{
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
      
      email: '',
      password: ''
    }
  },
  methods:{
    loginpage: function(){
      this.$router.replace('login')
    },
    login: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user){
                    console.log(user);

        }, function(err){
          alert('fail' + err.message)
      })
    },
      guest: function(){
            this.$router.replace('guest')
      },

      signup: function(){
        const userdatapath = this.email.replace('@', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '');
        firebase.database().ref('usernames/' + userdatapath).set({
        username: this.username,
        });
        firebase.database().ref('emails/' + this.username).set({
        email: this.email,
        });

        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(user){
            console.log(user);


        }, function(err){
          alert('fail' + err.message)

        })
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
margin-bottom: 20%;
}
</style>