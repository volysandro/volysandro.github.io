<template>
  <!--
  * Author:		    Usama Guenedi
  * File name: 	  Info.vue
  * Version:		  1.0
  * Date:		      01.03.2019
  * Description:	General information about sports day can be found here.
  -->
  <v-container>
    <panel title="Infos">
      <div class="text-xs-left">
        <h2>Allgemeine Hinweise:</h2>
        <h3>Dauer:</h3>
        <p>Die Schnuppersportangebote finden am Vormittag des 14.09.2019 von ca. 08.30 Uhr bis 11.30 Uhr statt. Es gibt
          nur halbtägige Angebote, von denen sie eines wählen können.</p>
        <h3>Teilnahme:</h3>
        <p>Die Teilnahme an einem Schnuppersportangebot ist obligatiorisch. Die defininitiven Teilnehmerlisten werden
          bekanntgegeben. Ein Abtausch ist dann nicht mehr erlaubt!</p>
        <h3>Durchführung:</h3>
        <p>Ein Angebot kann nur durchgeführt werden, wenn genügend Anmeldungen eingegangen sind. Ansonsten behält sich
          die Organisation vor, das Angebot ersatzlos zu streichen und allfällige Angemeldete umzuteilen. Gibt es bei
          einem Angebot zu viele Anmeldungen, werden die Plätze ausgelost.</p>
        <h3>Ausrüstung:</h3>
        <p>Grundsätzlich nur das Sporttune.</p>
        <h3>Ort:</h3>
        <p>Wankdorfstadion, Allmend, Umgebung oder je nach Angebot.</p>
      </div>
    </panel>
  </v-container>
</template>

<script>
  import Panel from '@/components/Panel'
  export default {
    components: {
      Panel
    },

  }

</script>

<style scoped>
</style>
