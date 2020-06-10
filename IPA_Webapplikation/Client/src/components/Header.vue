<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  Header.vue
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	Creates the header for the app.vue component and includes some links.
  -->
  <v-toolbar class="light-blue darken-3" fixed dark>
    <v-toolbar-items>
      <v-btn flat class="light-blue darken-3" dark :to="{
          name: 'info'
        }">
        Infos
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn v-if="$store.state.loggedIn && !this.$store.state.admin" class="light-blue darken-3" flat dark :to="{
          name: 'anmeldeformular'
        }">
        Anmeldeformular
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn v-if="this.$store.state.admin" class="light-blue darken-3" flat dark :to="{
          name: 'lehreransicht'
        }">
        Lehreransicht
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="light-blue darken-3">
      <v-btn v-if="!$store.state.loggedIn" flat dark :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      <v-btn v-if="$store.state.loggedIn" flat dark @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      // When logout is clicked, the token and the user are set to null and you will be redirected to the login page
      logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'login'
        })
      }
    }
  }

</script>

<style scoped>
  .home {
    cursor: pointer;
  }

</style>
