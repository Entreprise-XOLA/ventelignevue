<template>
  <q-page>
    <!-- Rubrique des prodocts -->
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/ADEME-FB.jpg" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/ALCOOL23.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/gboebessse.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/bissap-aff.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/gboebessse.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/GBOMA-NEW-FINIE.jpg" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/gombo-coupé.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/OIGNON NEW-FINIE.jpg" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/OIGNON-MOULU.png" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/HUILE-DE-PALME-5L-FB.jpg" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/AZIMEME-FACEBOOK.jpg" alt="" />
        </q-card>
    </div>
    <div class="row" style="margin: 10px 5px; justify-content:center;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
              <img class="prodocts" src="../assets/KONM-FACEBOOK.jpg" alt="" />
        </q-card>
    </div>
    <q-footer style="background-color: green; color: white;">
      <div style="padding-top: 15px; padding-left:5px; text-decoration: underline; font-size: 20px;">
        Information de contact
      </div>
      <div class="row">
        <div class="col-1">
          <q-icon name="location_on" style="font-size: 1.7em;"/>
        </div>      
        <div class="col-11" style="margin-top: auto;">
          11,rue des Guillemins B-4000 Liège-Belgique
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <q-icon name="local_phone" style="font-size: 1.7em;"/>
        </div>      
        <div class="col-11" style="margin-top: auto;">
          0033 66 90 83 90
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<style>

@media (min-width: 250px) and (max-width: 377px){
  
}
@media (min-width: 378px) and (max-width: 549px){
  
}
@media (min-width: 550px) and (max-width: 769px){

}
@media (min-width: 770px) and (max-width: 1027px){

}
@media (min-width: 1028px) and (max-width: 2560px){

}
/*
#slid
{
  z-index: 6;
    top: -50px;
    border: 5px solid white;
    border-radius: 7px;
  position:absolute;
  z-index: 3;
  top: -2
  
}
*/
body {
background-image:url(../assets/femmeafricaine.png);
background-repeat: no-repeat;
background-color: rgb(191, 240, 191);
background-size: contain;
background-position: center;
background-position-y: 350px;
background-attachment: fixed;
background-blend-mode: overlay;
/*height: 200px;
background-position:right bottom;*/

}
</style>

<script>
export default {
  data () {
    return {
      infocode: null,
      infoinscri: null,
      infonbreinscrnon: null,
      infoabonnement: null,
      data: null,
      options: null,
      response: null,
      infoabscencetud: null,
      infopresencetud: null,
      slide: 1,
      autoplay: true,
      graph: false
    }
  },
  methods: {
    affichprod () {
      this.$router.push('/detailproduit')
    }
  }
}
</script>