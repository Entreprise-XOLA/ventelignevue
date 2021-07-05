<template>
  <q-page>
    <!-- Rubrique des produitsepices -->
    <div class="row">
      <div class="col" style="margin: 10px">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section  @click="affichprod">
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Cocktail</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/_XT211501-854x1000.png" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col" style="margin: 10px">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Cocktail</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/_XT211499-854x1000.png" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col" style="margin: 10px">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Gingembre</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/IMG-20210217-WA0014.jpg" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col" style="margin: 10px;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Bissap</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/IMG-20210217-WA0015.jpg" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
        <div class="row">
      <div class="col" style="margin: 10px">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Baobab</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/IMG-20210217-WA0016.jpg" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col" style="margin: 10px;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Citron</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/IMG-20210217-WA0018.jpg" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
        <div class="row">
      <div class="col" style="margin: 10px">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green;">
          <q-card-section>
            <div class="text-h6" style="text-align: center"><q-icon name="more_vert" style=""/>Tamarin</div>
            <div class="prodtepice">
              <img class="produitsepices" src="../assets/boisson/IMG-20210217-WA0020.jpg" alt="" />
              <q-avatar class="priceacepice" color="teal" text-color="white"> <div style="font-size: 18px;">100g</div></q-avatar>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col" style="margin: 10px;">
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
  .prodtepice{
    height: 100px;
    text-align: center;
  }
  .produitsepices{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 85px;
  }
  .priceacepice{
    z-index:2;
    top:-70px;
    margin-left: 50%;
  }
}
@media (min-width: 378px) and (max-width: 549px){
  .prodtepice{
    height: 100px;
    text-align: center;
  }
  .produitsepices{
    margin: 0px;
    text-align: center;
    z-index:1;
    height: 110px;
  }
  .priceacepice{
    z-index:2;
    top:-70px;
    margin-left: 50%;
  }
}
@media (min-width: 550px) and (max-width: 769px){
.prodtepice{
  height: 200px;
  text-align: center;
}
.produitsepices{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceacepice{
  /* z-index:2;
  top:-70px;
  margin-left: 50%; */
  z-index: 2;
  top: -90px;
  margin-left: 20%;
}
}
@media (min-width: 770px) and (max-width: 1027px){
.prodtepice{
  height: 200px;
  text-align: center;
}
.produitsepices{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceacepice{
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
.prodtepice{
  height: 200px;
  text-align: center;
}
.produitsepices{
  margin: 0px;
  text-align: center;
  z-index:1;
  height: 210px;
}
.priceacepice{
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