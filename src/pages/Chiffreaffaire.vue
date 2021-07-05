<template>
  <q-page>
    
    <!-- Rubrique des produits -->
    <div class="row">
      <div class="col" style="margin: 10px;">
        <q-card class="my-card bg-white text-green" style="border: 1px solid green; border-radius: 80px; height: 346px">
          <q-card-section>
            <div class="text-h6" style="text-align: center">Etso</div>
            <div class="produt">
              <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 250px; overflow: auto;">
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
              <!--
              <img class="produi" src="../assets/pommade.jpg" alt="" />
              <q-avatar class="price" color="teal" text-color="white"> <div style="font-size: 18px;">$423</div></q-avatar>
              -->
            </div>
        </q-card-section>
        </q-card>
      </div>
    </div>
    <div style="text-align:center; color: green;">
      <q-icon name="arrow_back" style="font-size: 1.7em;"/>
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
@media (min-width: 250px) and (max-width: 549px){
  .produt{
    height: 100px;
    text-align: center;
  }
}
@media (min-width: 550px) and (max-width: 1920px){
.produt{
  height: 200px;
  text-align: center;
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