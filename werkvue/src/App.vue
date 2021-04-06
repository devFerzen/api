<template>
  <div id="app">
    <Header :activeUser="isLoggeado"/>
    <!-- ROUTER NAV
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/project">Project</router-link>
    </div>
    -->
    <router-view/>

    <!-- AFSS - Pensar si es lo mejor tener todos los modales globales
      que se usarán en toda la vida de la aplicación y hacerlo
      consumo Lazy loading, es buena opción o como son las mejores
      implementaciones
     -->
    <inicio-sesion-modal v-if="mISActive"/>
    <registro-modal v-if="mRActive"/>
    <facturacion-modal/>
  </div>
</template>

<script>
  /*Utilities*/
  import Vue from 'vue';
  import { mapActions } from 'vuex';
  import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
  import gql from "graphql-tag";

  /*Componentes*/
  import Header from './components/Tools/Header.vue';

  /*Constantes*/
  export const gql_user_data = gql `
    query userActivo {
        userActivo {
          _id
          sobreNombre
          werker{
            id
          }
        }
     }
   `;

  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)

  export default {
    name: 'App',
    components: {
      Header,
      InicioSesionModal: () => import('./components/modalesGlobales/InicioSesion.vue'),
      RegistroModal: () => import('./components/modalesGlobales/RegistroPrincipal.vue')
    },
    data() {
      return {
      }
    },
    computed: {
      isLoggeado(){
        if (this.$store.state.Autenticacion.user) {
          return this.$store.state.Autenticacion.user;
        }
          return 'Visitante';
      },
      isFreelancer(){
        return this.$store.state.Autenticacion.user && this.$store.state.Autenticacion.user.werker.tipo == "Freelance";
      },
      isContratante(){
        return this.$store.state.Autenticacion.user && this.$store.state.Autenticacion.user.werker.tipo == "Contratante";
      },
      mISActive(){
        return this.$store.state.Models.mISActive;
      },
      mRActive(){
        return this.$store.state.Models.mRActive;
      }
    },
    methods: {
      ...mapActions({
        actUserStore: 'Autenticacion/actUserStore'
      }),
    },
    async created(){
     //Identify the user, and store it.
     await this.$apollo.query({ query: gql_user_data })
       .then(value => {
         this.actUserStore(value.data.userActivo);
       });
    },
    beforeMount() {

    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800;900&display=swap');
  @font-face {
    font-family: "MadeTommyReg";
    src: local("MadeTommyReg"),
     url(./assets/fonts/MadeTommy/MadeTommyReg.otf) format("truetype");
  }
  @font-face {
    font-family: "MadeTommyExtraBold";
    src: local("MadeTommyExtraBold"),
     url(./assets/fonts/MadeTommy/MadeTommyExtraBold.otf) format("truetype");
  }

  @-ms-viewport{
    width: device-width;
  }

  #app {
    font-family: 'MadeTommyReg','Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #100F0F;
    background-color: #fff;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MadeTommyExtraBold'!important;
  }

  @media only screen and (max-width:992px) {
    h1 {
      font-size: 2rem !important;
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: .82rem;
    }

  }

  .werk-shadow-card{
    -webkit-box-shadow: 3px 4px 5px 0 rgba(16, 16, 15, 0.16),
                          9px 5px 13px 0px rgb(16 16 15 / 11%);
    -moz-box-shadow: 3px 4px 5px 0 rgba(16, 16, 15, 0.16),
                          9px 5px 13px 0px rgb(16 16 15 / 11%);
    box-shadow: 3px 4px 5px 0 rgba(16, 16, 15, 0.16),
                          9px 5px 13px 0px rgb(16 16 15 / 11%);
  }

  .werk-shadow-input{
    -webkit-box-shadow: 5px 5px 5px -4px #c7c7c7cf;
    -moz-box-shadow: 5px 5px 5px -4px #c7c7c7cf;
    box-shadow: 5px 5px 5px -4px #c7c7c7cf;
  }

  .werk-header-shadow{
    -webkit-box-shadow: 3px 4px 5px 0 rgb(202 202 182 / 16%),
                          9px 9px 13px 0px rgb(90 90 75 / 11%);
    -moz-box-shadow: 3px 4px 5px 0 rgb(202 202 182 / 16%),
                      9px 9px 13px 0px rgb(90 90 75 / 11%);
    box-shadow: 3px 4px 5px 0 rgb(202 202 182 / 16%),
                  9px 9px 13px 0px rgb(90 90 75 / 11%);
  }

  .form-control{
    border: 1px solid #ced4da;
  }

  .werk-smart-outline {
    border: 8px solid #54a9e4;
  }

  /*Configuración inputs werk*/
  .form-group{
    margin-right: auto;
    margin-left: auto;
  }

  .werk-label{
    font-weight: bold;
    font-size: 14px;
  }

  .werk-input {
    height: 45px!important;
    font-size: 13px!important;
    -webkit-border-radius: 10px!important;
    -moz-border-radius: 10px!important;
    border-radius: 10px!important;
  }/*saber como funciona el after para agregale un after shadowwerk*/

  .werk-main-buttom {
    width:296px;
    height: 44px;
    background-color: #7ed89a!important;
    color: #15365f!important;
    border: 0 solid transparent!important;
    font-size: 19px!important;
    font-weight: 800!important;
    margin-top: 30px!important;
  }

  .werk-main-buttom:active {
    background-color:#7ed89a!important;
    color: #15365f!important;
  }

</style>
