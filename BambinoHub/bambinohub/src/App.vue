<template>
  <v-app>

    <v-content>
      <HelloWorld id="login"/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
#login{
  position: relative;
  margin-top: 10px;
}
</style>
