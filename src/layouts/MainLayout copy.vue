<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
            <q-icon style="color: black" name="search" />
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
        <q-item to="/accueil" exact>
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
            <q-icon name="record_voice_over" />
          </q-item-section>

          <q-item-section>
            Nos Produits
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/vente" exact>
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>

          <q-item-section>
            Panier
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item to="/facture" exact>
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>

          <q-item-section>
            Compte
          </q-item-section>
        </q-item>
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
</style>

<script>
import { openURL } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'


export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
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
    }
  }
}
</script>
