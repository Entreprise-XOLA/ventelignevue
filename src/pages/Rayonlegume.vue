<template>
  <q-page style="background: yellow">
    <!-- Rubrique des produits -->
    <div style="color: green; top:-40px;">
      <div class="row">
        <div class="col-4">
          <h4 style="margin-left:20px;">Rayon<br> Léguime</h4>
        </div>
        <div class="col-8" style="text-align: right; margin: auto;">
          <img class="produitsuni" src="../assets/epice.png" alt="" />
        </div>
      </div>
      <div class="row" style="justify-content: center;">
        <div style="width: 96%;">
          <q-btn
            size="25px"
            align="between"
            style="background: green; color: yellow; width: 100%; font-weight : bold; border-radius: 20px; margin-bottom: 25px; font-size:20px;"
            class="btn-fixed-width"
            icon-right="arrow_forward"
            glossy
            label="Feuilles de manioc"
            @click="nvocode"
          />
        </div>
        <div style="width: 96%;">
          <q-btn
            size="25px"
            align="between"
            style="background: green; color: yellow; width: 100%; font-weight : bold; border-radius: 20px; margin-bottom: 25px; font-size:20px;"
            class="btn-fixed-width"
            icon-right="arrow_forward"
            glossy
            label="Salades"
            @click="nvocode"
          />
        </div>
        <div style="width: 96%;">
          <q-btn
            size="25px"
            align="between"
            style="background: green; color: yellow; width: 100%; font-weight : bold; border-radius: 20px; margin-bottom: 25px; font-size:20px;"
            class="btn-fixed-width"
            icon-right="arrow_forward"
            glossy
            label="Gboma"
            @click="nvocode"
          />
        </div>
        <div style="width: 96%;">
          <q-btn
            size="25px"
            align="between"
            style="background: green; color: yellow; width: 100%; font-weight : bold; border-radius: 20px; margin-bottom: 25px; font-size:20px;"
            class="btn-fixed-width"
            icon-right="arrow_forward"
            glossy
            label="Adémè"
            @click="nvocode"
          />
          
        </div>
        <center>
        <div style="text-align:center; color: green;">
            <q-item  to="/" clickable v-close-popup style=" ">
            <q-icon name="arrow_back" style="font-size: 3em;font-weight: bold;"/>
            </q-item>
          </div>
        </center>

      </div>
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
#button1 {
    text-align: center;
}
.affich-center{
  align-items: flex-end;
  justify-content: space-around;
}
.q-carousel {
    background-color: #fff;
    height: 200px !important;
}
.q-carousel.q-panel-parent.q-carousel--without-padding.q-carousel--arrows-horizontal.q-carousel--navigation-bottom {
    z-index: 6;
    top: -50px;
}
.on-right {
    margin-right: 0px !important;
    padding-right: 0px !important;
    align-items: flex-end;
  /*justify-content: space-around;*/
}
@media (min-width: 250px) and (max-width: 549px){
  .produitsuni{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 200px;
  }
}
@media (min-width: 550px) and (max-width: 1920px){
.produitsuni{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
}
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>