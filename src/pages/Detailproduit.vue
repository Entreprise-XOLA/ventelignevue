<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="col" style="margin: 30px;">
            <div style="text-align:center;font-size: 50px; color:green">
                <sup>$</sup>423.00
            </div>
            <div style="text-align:center">
                Etso 80g<br>
                17/10/2020
            </div>
            <div class="prod">
                <img class="produi" src="../assets/kisspng-peanut-house-peanut-oi@2x.png" alt="" />
            </div>
    </div>
<div class="row" style="justify-content:center; margin-bottom: 20px;">
                <div class="col-5" style="text-align:right; margin-right:5px;">
                    <q-btn color="green" text-color="yellow" label="PAY NOW" />
                </div>
                <div class="col-5" style="margin-left:5px;">
                    <q-btn outline color="white" text-color="green" label="DECLINE"/>
                </div>
            </div>
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