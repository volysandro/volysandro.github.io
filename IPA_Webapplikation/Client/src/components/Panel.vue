<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  Panel.vue
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	The basic structure for componends is defined here.
  -->
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card>

          <div class="white elevation-2">
            <v-toolbar flat dense class="blue darken-2" dark>
              <v-toolbar-title>
                {{title}}
              </v-toolbar-title>
              <slot name="action"></slot>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <slot>
                No slot content defined.
              </slot>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'title'
    ]
  }

</script>

<style scoped>
</style>
