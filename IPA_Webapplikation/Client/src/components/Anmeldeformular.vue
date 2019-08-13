<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  Anmeldeformular.vue
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	The registration form for the apprentices is summerized and sent to the backend.
  -->
  <v-container v-if="this.$store.state.loggedIn">
    <panel title="Anmeldeformular">
      <v-layout align-center justify-space-around row fill-height>
        <v-flex xs12 sm5>
          <v-text-field label="Vorname" disabled v-model="formular.vorname">
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm5>
          <v-text-field label="Nachname" disabled v-model="formular.nachname">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex xs12 sm5>
          <v-text-field label="Klasse" disabled v-model="formular.klasse">
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm5>
          <v-text-field type="number" v-model="formular.number" label="Schuhgrösse *" v-if="!existingForm" required
            :rules="[required]">
          </v-text-field>
          <v-text-field label="Schuhgrösse" disabled :value="existingForm[0].Schugroesse" v-else>
          </v-text-field>
        </v-flex>
      </v-layout>
      <div>
        <v-layout align-center justify-space-around row fill-height>
          <v-flex xs12 sm4>
            <v-autocomplete v-model="formular.first" hide-selected label="1. Priorität *" required :rules="[required]"
              :items="activities" item-text="Sportart" item-value="ID" v-if="!existingForm">
            </v-autocomplete>
            <v-text-field label="1. Priorität" disabled :value="existingForm[0].first" v-else>
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-autocomplete v-model="formular.second" hide-selected label="2. Priorität *" required :rules="[required]"
              :items="activities" item-text="Sportart" item-value="ID" v-if="!existingForm">
            </v-autocomplete>
            <v-text-field label="2. Priorität" disabled :value="existingForm[0].second" v-else>
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-autocomplete v-model="formular.third" hide-selected label="3. Priorität *" required :rules="[required]"
              :items="activities" item-text="Sportart" item-value="ID" v-if="!existingForm">
            </v-autocomplete>
            <v-text-field label="3. Priorität" disabled :value="existingForm[0].third" v-else>
            </v-text-field>
          </v-flex>
        </v-layout>
        <div v-html="error"></div>
        <v-btn dark class="blue darken-2" @click="submit" v-if="!existingForm">Bestätigen</v-btn>
      </div>
      <br>
      <v-hover>
        <v-card-text class="pt-1" style="position: relative">
          <v-expand-transition>
            <div v-if="isOpen" style="height: 100%; position: relative">
              <h3 class="text-sm-left">Wichtige Hinweise:</h3>
              <p class="text-sm-left">
                Die Angebote werden nur bei ausreichender Teilnehmerzahl durchgeführt!
              </p>
              <p class="text-sm-left">
                Angebote mit beschränkter Teilnehmerzahl werden ausgelost!
              </p>
              <p class="text-sm-left">
                Wenn das Anmeldeformular ausgefüllt wurde kann die Auswahl nicht mehr verändert werden!
              </p>
            </div>
          </v-expand-transition>
          <v-btn color="light-blue darken-3" @click="onClick()" dark absolute large right top>
            <i class="material-icons">
              info
            </i>
          </v-btn>
        </v-card-text>
      </v-hover>
    </panel>
  </v-container>
</template>

<script>
  import Panel from '@/components/Panel'
  import * as easings from 'vuetify/es5/util/easing-patterns'
  import BackendRequests from '@/api/BackendRequests'
  import LoginVue from './Login.vue';

  export default {
    data() {
      return {
        formular: {
          vorname: this.$store.state.user[0].Vorname,
          nachname: this.$store.state.user[0].Nachname,
          klasse: this.$store.state.user[0].Klassenname,
          number: null,
          first: null,
          second: null,
          third: null,
          userID: this.$store.state.user[0].ID_User
        },
        activities: [],
        error: null,
        required: (value) => !!value || 'Ausfüllen',
        existingForm: [],
        isOpen: false
      }
    },
    methods: {

      // Send the form to the backend when all required fields have been completed
      async submit() {
        this.error = null
        // Is used to compare if something is an object
        const areAllFieldsFilledIn = Object
          .keys(this.formular)
          .every(key => !!this.formular[key])

        if (!areAllFieldsFilledIn) {
          this.error = 'Bitte alle benötigten Felder ausfüllen.'
          return
        }

        try {
          let res = await BackendRequests.postForm(this.formular)
          this.$router.go()
        } catch (err) {
          this.error = err.response.data.error;
        }

      },
      // This is a function for a button 
      onClick() {
        if (this.isOpen === true) {
          this.isOpen = false
        } else {
          this.isOpen = true
        }
      },

    },

    // Get the required information from the backend and paste it into an array
    async mounted() {
      try {
        this.existingForm = (await BackendRequests.getForm(this.formular.userID)).data

        this.activities = (await BackendRequests.getActivities()).data.activities
      } catch (err) {
        this.error = 'Daten konnten nicht aus der Datenbank abgerufen werden.'
      }

      // If form already exists toggle form view to read only 
      if (this.existingForm.length == 0) {
        this.existingForm = false;
      }

    },
    components: {
      Panel
    },
  }

</script>

<style scoped>
  /* copied from vuetify */

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
  }

</style>
