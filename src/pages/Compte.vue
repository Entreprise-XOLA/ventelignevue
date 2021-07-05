<template>
  <q-page>
    <!-- Rubrique des produits -->
    <div class="row">
      <div class="col-1" style="margin: 10px; color: green;">
          <q-icon name="arrow_back" style="font-size: 1.7em;"/>
      </div>
      <div class="col-10" style="margin-top:10px;text-align:center; color: green;font-size: 17px; font-weight: bold;">
          COMPTE
      </div>
    </div>
    <div class="row bg-green text-white" style="margin: 20px;">
      <div style="width: 80%;margin:auto;">
        <div style="margin:10px auto; text-align:center; color: yellow; font-weight: bold; text-transform: uppercase">Create an Account</div>
        <q-input square outlined v-model="text" label="FullName" bg-color="white"/><br>
        <q-input square outlined v-model="text" label="Email" bg-color="white"/><br>
        <q-input square outlined v-model="text" label="Password" bg-color="white"/><br>
        <q-input square outlined v-model="text" label="Confirm Password" bg-color="white"/><br>
        <br><br>
        <div style="text-align:center; color: yellow"> By creating an account you agree to our Terms of Service and Privacy Policy</div>
        <br><br>
      </div>
    </div>
    <div class="row bg-green text-white" style="margin: 20px; text-align:center">
        <div style="width: 80%;margin:auto;">
            <q-btn color="green" text-color="yellow" label="CONTINUE"  width: 80%/>
        </div>
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