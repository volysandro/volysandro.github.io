<template>
<div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <span class="md-title">Chat</span>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-field>
          <label>Active users: {{ count }}</label>
          <md-textarea v-model="textarea" disabled></md-textarea>
        </md-field>
        <md-field>
          <label>Your message</label>
          <md-input id="message" v-model="message"></md-input>
          <md-button class="md-primary md-raised" v-on:click="sendMessage()">Submit</md-button>
        </md-field>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  import firebase from 'firebase';
  import exportusername from '../main.js';
  console.log(exportusername)
export default {
  name: 'Chat',
  data () {
    return {
      textarea: '',
      message: '',
      count: 0
    }
  }, sockets:{
    connect () {
      console.log('connected to chat server')
      },
    count (val) {
      this.count = val.count
      console.log(val)
    },
    message (data) {
       this.textarea += localStorage.getItem('localstorageusername') + ': ' + data + '\n'
    }
  }, methods: {
    sendMessage () {
      this.$socket.emit('message', this.message)
      this.message = ''
    }
  }
}


  

</script>

<style scoped>
.md-app {
  height: 330px;
  border: 1px solid rgba(#000, .12);
}
.md-textarea {
  height: 300px;
}
.page-container{
    width: 30%;
    height: 100%;
    margin: 0 auto;

}
</style>
