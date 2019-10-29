<template>
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

</template>

<style>
#tweet{
  text-decoration: none;
  color: azure;
  margin: 0 auto;
  margin-top: 15px;

}

</style>

