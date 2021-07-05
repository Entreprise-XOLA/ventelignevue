<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="row" style="color:green; font-size:26px; margin:10px;">
        Organisez votre galerie
    </div>
    <div class="row" style="margin:10px;">
        <div class="col-sm-7 col-xs-12">
        <q-input rounded outlined v-model="search" label="Recherche ........." bg-color="white">
            <template v-slot:append>
                <q-icon style="color: black" name="search" @click="recherhe" />
            </template>
        </q-input>
        </div>
        <div class="col-sm-5 col-xs-12" style="text-align: right;">
            <q-icon name="settings" color="green" class="icone-ajout" style="font-size: 3em; margin-right:10px;" />
            <q-btn rounded align="around" id="boutonajout" style="height:55px;" class="btn-fixed-width" color="white" label-color="green" label="Ajouter média" icon="add" />
        </div>
    </div>
    <hr color="green" style="margin:0 10px;">
    <div class="row">
      <div class="col" style="margin: 10px">
        <div class="row">
          <div class="col-sm-4 col-xs-12" style="text-align: left">
            1 sélectionnée(s)
          </div>
          <div class="col-sm-4 col-xs-12" style="text-align:center">
            Désélectionnée(s)
          </div>
          <div class="col-sm-4 col-xs-12" style="text-align:right">
            Supprimée(s)
          </div>
        </div>
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section  @click="affichprod">
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style="font-size: 1.7em;"/>Etso</div>
            <div class="prodt">
              <img class="produits" src="../assets/kisspng-peanut-house-peanut-oi@2x.png" alt="" />
              <q-avatar class="priceac" color="teal" text-color="white"> <div style="font-size: 18px;">$423</div></q-avatar>
            </div>
          </q-card-section>
          <div style=""> 
            <p style="margin: 0px; padding: 0px; font-size: 16px; font-weight: bold; text-align: center">BAIES DE SELIM</p>
            <p style="margin: 0px; padding: 0px; font-size: 16px; font-weight: bold; text-align: center">BAIES DE SELIM</p>
            <p style="font-size: 16px; font-weight: bold; text-align: center">BAIES DE SELIM</p>
          </div>
        </q-card>
      </div>
      <div class="col" style="margin:0 10px">
        <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 350px; overflow: auto; background-color: white;">
            <q-infinite-scroll @load="onLoadRef" :offset="250" :scroll-target="$refs.scrollTargetRef">
              <div v-for="(item, index) in itemsRef" :key="index" class="caption">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
              </div>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                </div>
              </template>
            </q-infinite-scroll>
          </div>
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
span.block, i.material-icons.q-icon.notranslate.on-left {
  color: green;
}
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
.q-btn__wrapper:before {
    box-shadow: none !important;
}
/* fixé le menu */
/*
.q-menu.q-position-engine.scroll {
  top: 269px !important;
  left: 0px  !important;
}
*/
@media (min-width: 250px) and (max-width: 377px){
  .prodt{
    height: 100px;
    text-align: center;
  }
  .produits{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 85px;
  }
  .priceac{
    z-index:2;
    top:-70px;
    margin-left: 50%;
  }
}
@media (min-width: 378px) and (max-width: 549px){
  .prodt{
    height: 100px;
    text-align: center;
  }
  .produits{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 110px;
  }
  .priceac{
    z-index:2;
    top:-70px;
    margin-left: 50%;
  }
}
@media (min-width: 550px) and (max-width: 769px){
.prodt{
  height: 200px;
  text-align: center;
}
.produits{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceac{
  z-index:2;
  top:-70px;
  margin-left: 50%;
}
}
@media (min-width: 770px) and (max-width: 1027px){
.prodt{
  height: 200px;
  text-align: center;
}
.produits{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceac{
  z-index:2;
  top:-70px;
  margin-left: -15%;
}
#card-container{
    position: absolute;
    margin-left: 40px;
  }
.q-card {
    box-shadow: none;
    border-radius: 4px;
    vertical-align: top;
    background: #fff;
    position: relative;
}
}
@media (min-width: 1028px) and (max-width: 2560px){
.prodt{
  height: 200px;
  text-align: center;
}
.produits{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceac{
  z-index:2;
  top:-70px;
  margin-left: -12%;
}
#card-container{
    position: absolute;
    margin-left: 40px;
  }
.q-card {
    box-shadow: none;
    border-radius: 4px;
    vertical-align: top;
    background: #fff;
    position: relative;
}
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
/* background-image:url(../assets/femmeafricaine.png);
background-repeat: no-repeat; */
background-color: rgb(228, 253, 1);
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
      search: null,
      graph: false,
      itemsRef: [ {}, {}, {}, {}, {}, {}, {} ],
      itemsId: [ {}, {}, {}, {}, {}, {}, {} ]
    }
  },
  methods: {
    affichprod () {
      this.$router.push('/detailproduit')
    },
    recherhe(){
        console.log("recherche");
    }
  }
}
</script>