<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="row">
      <div class="col-1" style="margin: 10px; color: green;">
        <q-item  to="/" clickable v-close-popup>
          <q-icon name="arrow_back" style="font-size: 1.7em;"/>
        </q-item>
      </div>
      <div class="col-10" style="margin-top:17px;text-align:center; color: green;font-size: 17px; font-weight: bold;">
          COMMENTAIRES
      </div>
    </div>
    <div class="commentaire">
          <div class="row">
      <div class="col-11">
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Nom Prénoms</q-item-label>
            <q-item-label caption>@johndoe.49s</q-item-label>
          </q-item-section>
          </q-item>
      </div>
      <div class="col-1" style="margin: auto;">
        <q-item-section side>
            <q-icon name="more_vert" style="font-size: 1.7em;"/>
          </q-item-section>
      </div>  
    </div>
    <div class="row bg-green text-white" style="margin: 20px;">
      <div class="col-3 col-xs-3 col-sm-3">
        <q-avatar rounded size="82px" style="margin: 8px;">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
      <div class="col-9 col-xs-9 col-sm-9" style="color: yellow">
        <div class="text-h6">
          Name Surname
        </div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, possimus temporibus dolorem illum iusto consectetur.</div>
      </div>
    </div>
    <div class="row" style="font-size: 1em; color: green;justify-content: space-around;">
      <div>
        <q-icon name="favorite" /><span>90</span>
      </div>
      <div>
        <q-icon name="indeterminate_check_box" /><span>78</span>
      </div>
      <div>
        <q-icon name="sync" /><span>12</span>
      </div>
      <div>
        <q-icon name="bookmark" /><span>34</span>
      </div>
      
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
    margin-left: 50%;
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