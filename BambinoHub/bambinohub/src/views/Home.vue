<template
>


  <v-layout justify-center>

<div id="chatBorder">


<v-layout justify-space-around id="chat">
    <v-badge id="chatBadge" color="red">
      <v-icon
                @click="expand = !expand"
        large
        color="grey"
      >
        mail
      </v-icon>
    </v-badge>

      <v-flex id="expand">
        <v-expand-x-transition id="expand">
          <div v-show="expand" id="expand">
            
                <Chat id="chatWindow"></Chat>

          </div>
        </v-expand-x-transition>
      </v-flex>
</v-layout>
    

    
</div>
    
    <v-flex xs12 sm6>

      <v-card flat>
        
        <v-container
        fluid
          grid-list-md
          id="mainLinks"
        >

      <v-flex
        id="avatar"
        xs12
        sm6
        md8
        align-center
        justify-center
        layout
        text-xs-center
        
      >
        <v-avatar
          :tile="tile"
          :size='200'
          color="grey lighten-4"

        >
          <img src="../assets/avatar.jpg" alt="avatar">
        </v-avatar>
      </v-flex>

          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >

            <a v-bind:href="card.link">
              <v-card>
                <v-img
                  :src="card.src"
                  height="200px"
                  id="imagetiles"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span id="titleText" class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions id="actions">
                  <v-spacer></v-spacer>
                  <!--<v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn @click="navigate" icon>
                    <v-icon>share</v-icon>
                  </v-btn>-->
                </v-card-actions>
              </v-card>
              </a>
            </v-flex>
          </v-layout>

    <div>
            <v-btn id="logout" color="red" @click="logout" large>Log Out</v-btn>
    </div>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chat from './Chat.vue'
import firebase from 'firebase';

export default {
  name: 'home',
  components: {
    Chat,
    HelloWorld
  },
   data: () => ({
     expand: false,
      cards: [
        { title: 'PoolStats', src: 'https://volysandro.github.io/PoolStats/gamepagebackground.jpg', flex: 12,  link: 'https://volysandro.github.io/PoolStats/Welcomepage.html' },
        { title: 'DiscordBambino', src: 'https://cdn-images-1.medium.com/max/1600/0*FDdiWdrriXPKGNyf.png', flex: 6, link: 'https://github.com/volysandro/DiscordBambino/'},
        { title: 'DEVTOOLS', src: 'https://i.imgur.com/zbUbfey.png', flex: 6, link: 'https://github.com/volysandro/devtools'},
        { title: 'Instagram', src: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/31484081_2139578489656026_6143647252400184323_n.jpg?_nc_cat=101&_nc_ht=scontent-amt2-1.xx&oh=de16d458d2e17eb8dec6d3c2c023a716&oe=5D05E737', flex: 6, link: 'https://www.instagram.com/1voly/'},
        { title: 'Twitter', src: 'https://pbs.twimg.com/profile_banners/4395224061/1554301227/1500x500', flex: 6, link: 'https://twitter.com/dimisaen'}
      ]
    }),
    methods:{
    logout: function(){
      firebase.auth().signOut();
    },
    navigate: function(){
      if(title == 'PoolStats'){
        window.open('volysandro.github.io/PoolStats/Welcomepage.html')
      }
    }
  }

}






</script>

<style>

body{
  margin: 0 auto;
}
#logout{
  margin: 0 auto;
  margin-top: 20px;
}
#avatar{
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 10%;
}

#mainLinks{
  background-color: #2c3e50;
  margin-top: 15%;
  margin-bottom: 20%;
}

#chatWindow{
  height: 100%;
  width: 100%;
  border-radius: 8px;

}
#chatBadge{
  top: 45%;
  right: 2%;
  z-index: 99;
}

#chat{
position: fixed;
right: 1%;
top: 30%;
margin: 0 auto;
    border-radius: 8px;

}

#expand{
  position: fixed;
right: 1%;
top: 30%;
margin: 0 auto;
width: 20%;
    border-radius: 8px;

}

#chatBorder{
  border-radius: 8px;
}


#imagetiles{
  margin-top: 40px;
}

#titleText{
  margin: 20px;
}

</style>

