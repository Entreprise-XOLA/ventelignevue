<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="row">
      <div class="col" style="margin: 30px;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green; border-radius: 80px; height: 100%;">
          <q-card-section>
            <div class="text-h6" style="text-align: center; top: -30px; position: relative; ">
              <q-btn color="green" text-color="yellow" label="Etso" style="border-radius: 20px; padding-right: 20px; padding-left: 20px; font-weight: bold;" />
            </div>
            <div class="prod">
              <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 250px; overflow: auto;">
                <q-infinite-scroll @load="onLoadRef" :offset="250" :scroll-target="$refs.scrollTargetRef">
                  <!--produit info -->
                      <div class="prod">
                        <img class="produi" src="../assets/pommade.jpg" alt="" />
                        <q-avatar class="price" color="teal" text-color="white"> <div style="font-size: 18px;">$423</div></q-avatar>
                      </div>
                    <div class="row">
                      <div class="col-6">
                        <p style="margin: 0 5px; padding: 0px; font-size: 16px; text-align: right">BAIES DE SELIM</p>
                        <p style="margin: 0 5px; padding: 0px; font-size: 16px; text-align: right">SELIM BERRIES</p>
                      </div>
                      <div class="col-6">
                        <p style="margin: 0 5px;padding: 0px; font-size: 16px; text-align: left;">SELIM BESSEN</p>
                        <p style="margin: 0 5px;padding: 0px; font-size: 16px; text-align: left;">SELIM BERREN</p>
                      </div>
                    </div>
                    <p style="margin: 0px; padding: 0px; font-size: 20px; font-weight: bold; text-align: center">Poids: 80g</p>
                    <p style="margin: 0px; padding: 0px; font-size: 20px; font-weight: bold; text-align: center">DLC: 07/12/12</p>

                </q-infinite-scroll>
              </div>
              <!--
              <img class="produi" src="../assets/pommade.jpg" alt="" />
              <q-avatar class="price" color="teal" text-color="white"> <div style="font-size: 18px;">$423</div></q-avatar>
              -->
            </div>
        </q-card-section>
        <q-card-actions class="piedsproduit">
            <div class="col-9" style="text-align: left">
                <q-icon  name="local_mall" style="font-size: 2.5em; margin-left:40px;"/>
                <q-icon  name="favorite" style="font-size: 2.5em;"/>
            </div>
            <div class="col-3" style="text-align: left">
                <q-icon  name="thumb_up" style="font-size: 2.5em;"/>
            </div>
            
        </q-card-actions>
        </q-card>
        
      </div>
    </div>
    <center>
      <div style="text-align:center; color: green;">
        <q-item  to="/" clickable v-close-popup style=" justify-content:center; ">
        <q-icon name="arrow_back" style="font-size: 2em;font-weight: bold;"/>
        </q-item>
      </div>
    </center>
    <q-footer style="background-color: green; color: white;">
      <div class="row" style="text-align:center;padding-top: 10px;">
        <div class="col-4">
          <img src="../assets/insta.png" alt="" height="30"/>
        </div>      
        <div class="col-4">
          <img src="../assets/tweet.png" alt="" height="30"/>
        </div>
        <div class="col-4">
          <img src="../assets/fcbk.png" alt="" height="30"/>
        </div>
      </div>
      <div style="text-align:center; font-size: 20px;">
        M2J BEAUTY WORLD
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
/* css pieds produits */
@media (min-width: 200px) and (max-width: 544px){
  .piedsproduit{
    margin-top: 30px;
    margin-left: 20px;
  }
}

@media (min-width: 545px) and (max-width: 1920px){
  .piedsproduit{
    margin-top: 30px;
    margin-left: 20px;
  }
}
/*Fin pieds produits */


@media (min-width: 250px) and (max-width: 549px){
  .prod{
    height: 200px;
    text-align: center;
  }
  .produi{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 200px;
  }
  .price{
    z-index:2;
    top:-70px;
    margin-left: -12%;
  }
}
@media (min-width: 550px) and (max-width: 1920px){
.prod{
  height: 200px;
  text-align: center;
}
.produi{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.price{
  z-index:2;
  top:-70px;
  margin-left: -10%;
}
}
@media (min-width: 1020px) and (max-width: 2500px){
  /*
footer{
  bottom: 0px;
  position: absolute;
  width: 100%;
  height: 60px;
}
*/
}
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
      graph: false,
      itemsRef: [ {}, {}, {}, {}, {}, {}, {} ],
      itemsId: [ {}, {}, {}, {}, {}, {}, {} ]
    }
  },
  methods: {
    onLoadRef (index, done) {
      setTimeout(() => {
        if (this.itemsRef) {
          this.itemsRef.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },

    onLoadId (index, done) {
      setTimeout(() => {
        if (this.itemsId) {
          this.itemsId.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    }
  }
}
</script>