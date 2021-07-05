<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="position: fixed; z-index: 3;">
      <q-toolbar style="margin-bottom: 35px; justify-content: space-around;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <div style="margin-right:20px;">
        </div>
        <q-input
          rounded standout
          bg-color="white"
          color="black"
          style="margin-top: 5px; margin-bottom: 5px;"
          v-model="search"
          debounce="1000"
          placeholder="Rechercher..."
          
        >
          <template v-slot:append>
            <q-icon style="color: black" name="search" @click="recherch" />
          </template>
        </q-input>
        <q-icon  name="local_mall" style="font-size: 2.5em; margin-left:40px;" />
        <!--
        <q-toolbar-title>
          M2J BEAUTY
        </q-toolbar-title>
        
        <div>v1.0.0</div>
        -->
      </q-toolbar>

      <!-- ajout entete -->
      <div class="q-pa-md" style="background-color: yellow; padding-bottom: 0px; margin-bottom: 0px; height: 100px;">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="border:5px solid white; -moz-border-radius:17px; -webkit-border-radius:17px; border-radius:17px;"
    >
      <q-carousel-slide :name="1" img-src="../assets/fruits1.jpg"/>
      <q-carousel-slide :name="2" img-src="../assets/slide1.png" />
      <q-carousel-slide :name="3" img-src="../assets/slide2.png"/>
      <q-carousel-slide :name="4" img-src="../assets/facebook-new1.jpg"/>
      <q-carousel-slide :name="5" img-src="../assets/facebook-new2.jpg"/>
    </q-carousel>
    </div>
    <q-toolbar class="affich-center" style="top: 0px; height: 108px;">
      <!--Avant le menu était en div (menu d'avant) -->
      <!--
        <div style="color: white; padding-right: 5px; margin-right: 20px; border-right: solid 5px; font-weight: bold;" label="A PROPOS"></div>
      <div style="color: white; padding-right: 5px; margin-right: 20px; border-right: solid 5px; font-weight: bold;">NOS PRODUITS</div>
      <div style="color: white; padding-right: 5px; margin-right: 20px; font-weight: bold;">PANIER</div>
      -->
      <q-btn class="taille-ecriture" to="/apropos" style="color: white; padding-right: 5px; margin-right: 20px; border-right: solid 5px; font-weight: bold;" label="A PROPOS">
      </q-btn>
      <q-btn class="taille-ecriture" style="color: white; padding-right: 5px; margin-right: 20px; border-right: solid 5px; font-weight: bold;" label="NOS PRODUITS">
        <q-menu :offset="[150, 0]">
          <q-list style="min-width: 250px; position: relative; background-color: green; color: white; ">
            <q-separator />
            <q-item to="/produitsepices" id="me" clickable v-close-popup>
              <q-item-section>EPICES</q-item-section>
            </q-item>
            <q-separator />
            <q-separator />
            <q-item to="/rayon" clickable v-close-popup>
              <q-item-section>BOISSON</q-item-section>
            </q-item>
            <q-separator />
            <q-item  to="/rayonfarine" clickable v-close-popup>
              <q-item-section>CEREALES ET FARINE</q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/rayonleguime" clickable v-close-popup>
              <q-item-section>LEGUMES</q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/rayonobjet" clickable v-close-popup>
              <q-item-section>OBJET D'ART</q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/rayonbeaute" clickable v-close-popup>
              <q-item-section>COSMETIQUES</q-item-section>
            </q-item><br>
          </q-list>
          <div class="row" style="background-color: green; color: white; font-size:20px; padding-bottom: 5px; ">
            <div style="border-right: 10px solid yellow; color: yellow; padding-left: 10px; padding-right: 10px;" @click="video" clickable>
              VIDEO
            </div>
            <div style="color: yellow; padding-left: 10px; padding-right: 10px;" @click="recette" clickable>
              RECETTES
            </div>
          </div>
          <div style="background-color: yellow; color: green; text-align:center; font-size:20px;font-weight: bold; padding-top:5px; padding-bottom:5px;" @click="compte" clickable>
            <q-icon name="person" style="font-size: 1.2em;"/>COMPTE
          </div>
        </q-menu>
      </q-btn>
      <q-btn class="taille-ecriture" to="/vente" style="color: white; padding-right: 5px; margin-right: 20px; font-weight: bold;" label="PANIER"></q-btn>
    </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <center>
          <q-item-label header style="background: linear-gradient(green, #fff)">
              <img
              src="../assets/IMG-20201224-WA0002@2x.png"
              style="height: 140px; max-width: 140px;margin-top:20px auto"
            />
            <!--
            <q-item-label header style="color:black; font-size: 12px;">
              M2J BEAUTY
            </q-item-label>
            -->
          </q-item-label>
        </center>
        <q-separator inset />
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Accueil
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/apropos" exact>
          <q-item-section avatar>
            <q-icon name="book"  />
          </q-item-section>

          <q-item-section>
            A propos de Nous
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/produit" exact>
          <q-item-section avatar>
            <q-icon name="local_offer" />
          </q-item-section>

          <q-item-section>
            Nos Produits
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/vente" exact>
          <q-item-section avatar>
            <q-icon name="local_mall" />
          </q-item-section>

          <q-item-section>
            Panier
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/commentaire" exact>
          <q-item-section avatar>
            <q-icon name="insert_comment" />
          </q-item-section>

          <q-item-section>
            Commentaire
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/recettes" exact>
          <q-item-section avatar>
            <q-icon name="local_atm" />
          </q-item-section>

          <q-item-section>
            Recettes
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/comptes" exact>
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>

          <q-item-section>
            Compte
          </q-item-section>
        </q-item>
        <!--
        <q-separator inset />
        <q-item to="/administration" exact>
          <q-item-section avatar>
            <q-icon name="engineering" />
          </q-item-section>

          <q-item-section @click="logout">
            Connection
          </q-item-section>
        </q-item>
        
        <q-separator inset />
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>

          <q-item-section @click="logout">
            Déconnecter
          </q-item-section>
        </q-item>
        -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.q-item.q-router-link--active, .q-item--active {
    color: green !important;
}
.q-item.q-router-link--active#me, .q-item--active#me{
  background-color: yellow;
  color: green  !important;
}
.q-toolbar.row.no-wrap.items-center {
  background-color: green !important;
}
.q-field__native.q-placeholder {
  color: black;
}
.q-header.q-layout__section--marginal.fixed-top {
  background-color: green;
  z-index: 1;
  position: absolute;
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
  .taille-ecriture{
    font-size: 9px;
    font-weight: bolder;
  }
}
@media (min-width: 250px) and (max-width: 549px){
  
}
@media (min-width: 750px) and (max-width: 1100px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center, .q-field.row.no-wrap.items-start.q-input.q-field--standout.q-field--rounded.q-validation-component{
      width: 580px;
}
}
@media (min-width: 1105px) and (max-width: 1699px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center, .q-field.row.no-wrap.items-start.q-input.q-field--standout.q-field--rounded.q-validation-component{
      width: 880px;
}
}
@media (min-width: 1700px) and (max-width: 5000px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center, .q-field.row.no-wrap.items-start.q-input.q-field--standout.q-field--rounded.q-validation-component{
      width: 980px;
}
}
@media (min-width: 770px) and (max-width: 1027px){

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
@media only screen and (max-width:800px) {
}
.q-field__native, .q-field__input {
    color: black !important;
}
</style>

<script>
import { openURL } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'


export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      data: null,
      options: null,
      response: null,
      slide: 1,
      autoplay: true,
      search: '',
    }
  },
  methods: {
    openURL,
    logout() {
      localStorage.clear();
      this.$q.notify({
        color: "primary",
        position: "top",
        message: "Votre compte est déconnecté",
        icon: "close"
      });
      this.$router.push("/");
    },
    recette () {
      this.$router.push('/recettes')
    },
    video () {
      this.$router.push('/preparation')
    },
    compte () {
      this.$router.push('/comptes')
    },
    recherch() {
      this.$router.push('/recherche')
    }
  }
}
</script>
