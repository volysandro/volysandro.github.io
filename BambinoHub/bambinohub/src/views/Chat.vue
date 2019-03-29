<template>
<div class="page-container">
    <md-app id="border">
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
  //import firebase from 'firebase';
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
      
2
        this.textarea += data + '\n'
    }
  }, methods: {
    sendMessage () {
      var today = new Date();
      
      var time = today.getHours() + ":" + today.getMinutes();
      var sendmessage = '(' + time + ') - ' + localStorage.getItem('localstorageusername') + ': ' + this.message;
      this.$socket.emit('message', sendmessage)
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
  height: 10%;
}
.page-container{
    width: 30%;
    height: 100%;
    margin: 0 auto;
    border-radius: 8px;
}

#border{
      border-radius: 8px;

}
</style>
