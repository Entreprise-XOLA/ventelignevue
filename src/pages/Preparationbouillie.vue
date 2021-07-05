<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="row" style="color: green; top:-40px;">
      <q-item  to="/" clickable v-close-popup style=" ">
        <q-icon name="arrow_back" style="font-size: 3em; top: 0px !important; z-index: 5; color: white; position: fixed;"/>
      </q-item>
    <div class="row text-green">
      <div style="width: 80%;margin:0 auto;">
        <div style="font-size:20px ; margin-bottom:0; margin-top: 10px; text-align:left; color: green; font-weight: bold; text-transform: uppercase">Préparation de la bouillie</div>
        <div>A la base de aklui ebli</div>
        
        <p style="text-align:justify; margin-top:10px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque blanditiis asperiores architecto suscipit aliquid, dicta facere sequi atque ullam rerum saepe excepturi repellendus! Animi reiciendis accusamus totam obcaecati optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque blanditiis asperiores architecto suscipit aliquid, dicta facere sequi atque ullam rerum saepe excepturi repellendus! Animi reiciendis accusamus totam obcaecati optio!
        </p>
        <br>
        <q-item-section style="display: inline-block">
            <q-icon name="thumb_up" style="font-size: 1.7em;"/>15{{'  '}}
            <q-icon name="thumb_down" style="font-size: 1.7em; margin-left:15px;"/>20
          </q-item-section>
      </div>
      <div class="row bg-green text-yellow" style="width: 80%;margin:auto; margin-top: 10px;">
        <div class="col-9">
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Nom Prénoms</q-item-label>
          </q-item-section>
          </q-item>
      </div>
      <div class="col-3" style="margin: auto;">
        <q-item-section side style=" color:yellow !important;">
            1 hour ago
          </q-item-section>
      </div>  
        
        <div style="color: yellow; margin-left: 70px ;"> By creating an account you agree to our Terms of Service and Privacy Policy</div>
        <br><br>
      </div>
    </div><br/>
    </div>
    <q-footer style="background-color: green; color: white; margin-top:10px;">
      <div class="row" style="padding: 10px;">     
        <div class="col-11" style="margin-top: auto; color: yellow">
          M2J BEAUTY WORLD<br>
          <span style="font-size:10px;"> 120,900.500 subscribers</span>
        </div>
        <div class="col-1">
          <q-item-section side>
            <q-icon name="more_vert" style="font-size: 1.7em; color: yellow;"/>
          </q-item-section>
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
.q-field__native, .q-field__input {
    color: black !important;
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