<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="position: fixed; z-index: 3;">
      <q-video
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
    <q-toolbar style="margin-bottom: 35px; justify-content: space-around; display:none;">
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
            <q-icon style="color: black" name="search" @click="recherch"/>
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
              style="height: 110px; max-width: 110px;margin-top:20px auto"
            />
            <q-item-label header style="color:black; font-size: 12px;">
              M2J BEAUTY
            </q-item-label>
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
        -->
        <q-separator inset />
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>

          <q-item-section @click="logout">
            Déconnecter
          </q-item-section>
        </q-item>
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
@media (min-width: 750px) and (max-width: 1100px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center{
      width: 580px;
}
}
@media (min-width: 1105px) and (max-width: 1699px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center{
      width: 880px;
}
}
@media (min-width: 1700px) and (max-width: 5000px){
.q-field__inner.relative-position.col.self-stretch.column.justify-center{
      width: 980px;
}
}
@media (min-width: 250px) and (max-width: 549px){

}
@media (min-width: 550px) and (max-width: 769px){

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
    recherch() {
      this.$router.push('/recherche')
    }
  }
}
</script>
