<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >
    

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">PunchLine</div>
                  <span>Really crappy and buggy project website for school.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark id="punchline">Take me there!</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://ya-webdesign.com/images/pool-balls-in-rack-png-2.png"
                    height="100px"
                    contain
                    id="poolball"
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">PoolStats</div>
                      <div>An open-source, fully cloudbased scorekeeping solution. - Mobile only!</div>
                      <div>(2018)</div>
                    </div>
                  </v-card-title>
                <v-card-actions>
                <v-btn flat dark id="poolstats">Check it out!</v-btn>
              </v-card-actions>

                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>


<script>
export default {
  name: 'Projects',
  props: {
    msg: String
  }
}

const poolstatsBtn = document.getElementById('poolstats');
const punchlineBtn = document.getElementById('punchline');


poolstatsBtn.addEventListener('click', function(){
    window.location.replace("https://volysandro.github.io/PoolStats/Welcomepage.html");
});




punchlineBtn.addEventListener('click', function(){
    window.location.replace("https://volysandro.github.io/PunchLine/index.html");
});

</script>

<style>
#poolball{
    margin-top: 12%;
    margin-left: 15%;
}
</style>
