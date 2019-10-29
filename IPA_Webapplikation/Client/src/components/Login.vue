<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  Login.vue
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	The user initials and password are sent from here to the backend.
  -->
  <v-container>
    <panel title="Login">
      <v-text-field label="Kürzel" v-model="initials" prepend-icon="person" clearable />
      <br>
      <v-text-field label="Passwort" v-model="password" prepend-icon="lock" :append-icon="show1 ? 'visibility_off' : 'visibility'"
        :type="show1 ? 'text' : 'password'" name="input-10-2" class="input-group--focused" @click:append="show1 = !show1">
      </v-text-field>
      <br>
      <div class="error" v-html="error"></div>
      <br>
      <v-btn dark class="blue darken-2" large @click="login">Login</v-btn>

    </panel>
  </v-container>
</template>



<script>
  import BackendRequests from '@/api/BackendRequests'
  import Panel from "@/components/Panel"

  export default {
    name: "Login",
    data() {
      return {
        initials: '',
        show1: false,
        password: '',
        error: ''
      }
    },
    methods: {
      
      // The user details are sent to the backend
      // Once recieved successful callback, the user Object and Token are stored in the store
      async login() {

        try {
          let res = await BackendRequests.login({
            username: this.initials,
            password: this.password
          })
          this.$store.dispatch('setUser', res.data.user)
          this.$store.dispatch('setToken', res.data.token)

          this.$router.push({
            name: 'anmeldeformular'
          })
        } catch (err) {
          this.error = err.response.data.error;
        }
      }
    },

    components: {
      Panel
    },

  }

</script>

<style>

</style>
