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
          CONNEXION
      </div>
    </div>
    <q-form @submit="onSubmit">
    <div class="row bg-green text-white" style="margin: 20px;">
      <div style="width: 80%;margin:auto;">
        <div style="margin:10px auto; text-align:center; color: yellow; font-weight: bold; text-transform: uppercase">Se connecter</div>
        <q-input square outlined v-model="email" label="Email" bg-color="white"/><br>
        <q-input square outlined v-model="password" label="Mot de passe" bg-color="white" type="password"/><br>
        <br><br>
        <div style="text-align:center; color: yellow">Vous ne disposez pas de compte <span @click="nvoCompte"  style="color:white">Créez un compte !</span></div>
        <br><br>
      </div>
    </div>
    <div class="row bg-green text-white" style="margin: 20px; text-align:center">
        <div style="width: 80%;margin:auto;">
            <q-btn color="green" text-color="yellow" label="CONTINUE" @click="envoie"/>
        </div>
    </div>
    </q-form>
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

}
@media (min-width: 550px) and (max-width: 1920px){

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
import { Notify } from "quasar";
export default {
  data () {
    return {
      fullname: null,
      email: null,
      password: null,
      confirmpassword: null
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
    },
    onSubmit () {
      if (this.fullname != null && this.email != null && this.password != null &&  this.confirmpassword != null) {
        const params = new URLSearchParams()
      params.append('email', this.email)
      params.append('password', this.password)
      
      console.log(this.email)
      
       this.$axios.post(`http://localhost/E-Commerce/index.php/Ecommerce/login1?`, params)
        .then(response => { 
          // envoie des infos
          if (response.data.status === 201) {
            console.log(response.data);
            localStorage.setItem("idutilisateur", response.data.info.idtype);
            localStorage.setItem("idrole", response.data.info.NumPiece);
            localStorage.setItem("nom", response.data.info.nom);
            localStorage.setItem("email", response.data.info.prenom);
          }
        this.$q.notify({
        color: "primary",
        position: "top",
        message: "Votre demande a été envoyé avec succès.",
        icon: "close"
      });
      this.$router.push("/");
        })
        .catch(e => {
          this.$q.notify({
            color: "positive",
            position: "top",
            message: "Erreur de chargement de la page",
            icon: "report_problem"
          });
        });
      } else {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Veuillez remplir tous les champs",
          icon: "close"
      });
      }
      //
    },
    envoie(){
      this.idrole=4;
      if (this.email != null && this.password != null) {
        const params = new URLSearchParams()
      params.append('email', this.email)
      params.append('password', this.password)
      
      console.log(this.email)
      
       this.$axios.post(`http://localhost/E-Commerce/index.php/Ecommerce/login1?`, params)
        .then(response => { 
          // envoie des infos
          if (response.data.status === 201) {
            console.log(response.data);
            localStorage.setItem("idutilisateur", response.data.idutilisateur);
            localStorage.setItem("idrole", response.data.idrole);
            localStorage.setItem("nom", response.data.fullname);
            localStorage.setItem("email", response.data.email);
          }
        this.$q.notify({
        color: "primary",
        position: "top",
        message: "Votre demande a été envoyé avec succès.",
        icon: "close"
      });
      this.$router.push("/accueilUtili");
        })
      } else {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Veuillez remplir tous les champs",
          icon: "close"
      });
      }
    },
    nvoCompte(){
      this.$router.push("/comptes");
    }
  }
}
</script>