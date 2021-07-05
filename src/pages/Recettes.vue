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
          RECETTES
      </div>
    </div>
    <div class="row text-green" style="margin-top: 20px; background-color: transparent !important;">
      <div style="width: 80%;margin:0 auto;">
        <div style="font-size:30px ; margin:10px auto; text-align:left; color: green; font-weight: bold; text-transform: uppercase">Titre recette</div>
        
        <p style="text-align:justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque blanditiis asperiores architecto suscipit aliquid, dicta facere sequi atque ullam rerum saepe excepturi repellendus! Animi reiciendis accusamus totam obcaecati optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque blanditiis asperiores architecto suscipit aliquid, dicta facere sequi atque ullam rerum saepe excepturi repellendus! Animi reiciendis accusamus totam obcaecati optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque blanditiis asperiores architecto suscipit aliquid, dicta facere sequi atque ullam rerum saepe excepturi repellendus! Animi reiciendis accusamus totam obcaecati optio!
        </p>
        <br><br>
      </div>
      <div class="row" style="width: 80%;margin:0 auto;">
        <div class="col-11" style="font-size: 2em">
          <q-icon name="schedule" /><span style="font-size: 15px !important;"> June 2, 2017</span>
      </div>
      <div class="col-1" style="margin: auto 0; text-align: right; padding-right: 0px; padding-left: 20px;">
        <q-item-section side>
            <q-icon name="more_vert" style="font-size: 1.7em;"/>
          </q-item-section>
      </div>
      </div>
    </div>
    <div class="row" style="margin-top: 10px; margin-bottom: 5px; justify-content: center;">
       <q-btn color="green" label="MORE" />
    </div>
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
    }
  },
  methods: {
  }
}
</script>