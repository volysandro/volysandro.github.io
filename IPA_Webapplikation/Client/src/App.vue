<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  App.js
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	This is the main File of the Components.
  -->
  <div id="app">
    <v-app>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">
      <page-header />

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
  export default {
    name: 'app',
    components: {
      PageHeader
    }
  }

</script>

<style>
  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .danger-alert {
    color: red;
  }

</style>
