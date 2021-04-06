<template>
  <div class="header" style="margin-bottom:20px;">
    <b-navbar toggleable="xl" type="light" class="nav werk-header-shadow">
      <b-navbar-brand :to="{name:'home-route'}" class="logo">werk..</b-navbar-brand>

      <!-- Searchbar -->
      <b-nav-form id="searchbar">
        <b-input-group>
        	<template v-slot:append>
        		<button type="button" class="btn btn-outline-secondary"><b-icon icon="Search"></b-icon></button>
        	</template>
        <b-form-input class="seam-r" placeholder="Buscar"></b-form-input>
        </b-input-group>
      </b-nav-form>
      <!-- Searchbar -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="this.activeUser === 'Visitante'">
          <b-nav-item href="#">FREELANCER</b-nav-item>
          <b-nav-item href="#">CONTRATANTE</b-nav-item>
          <b-nav-item href="#">werkcoins..</b-nav-item>
          <b-nav-item href="#">werk..packs</b-nav-item>
          <b-nav-item href="#">SMART</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else-if="this.activeUser ==! 'Visitante'">
          <b-nav-item :to="{name:'werker-home-route'}">Home</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="this.activeUser == 'Visitante'">
          <b-nav-item @click="showISModal" class="buttonInicio">INICIAR SESIÓN</b-nav-item>
          <b-nav-item @click="showRModal" class="buttonRegister">REGISTRARSE</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else-if="this.activeUser ==! 'Visitante'">
          <b-nav-item @click="showISModal">Hola, {{ shortName }}</b-nav-item>
          <b-nav-item>
            <b-img
              :src="require('../../assets/werkCoins.png')"
              center
              height="28"
            ></b-img>
          </b-nav-item>
          <b-nav-item>
            <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
          </b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
  .logo {
  	color:#05386B !important;
  	font-weight:900;
  	font-size: 30px !important;
  	margin-right: 20px;
    padding-left: 10px;
  }

  .btn-outline-secondary {
      border-color: #ced4da !important;
      border-left: 0px !important;
  }
  .seam-r {
  	border-right: 0px !important;
  }

  #searchbar {
    display: none;
  }

  .nav {
  	position: fixed !important;
  	top: 0;
  	width: 100%;
  	vertical-align: middle;
  	z-index:1000;
  	background-color: #fff;
  	height: 60px;
  }

  .nav a {
  	font-size: 13px;
  	margin-left:10px;
  	color: #100F0F !important;
    background-color: #fff;
  }
  .nav a:hover {
  	color: #5cdb95 !important;
  	transition: 0.3s;
  }
  .nav input {
  	border-radius: 11px;
  }

  .nav-item {
    align-self: center;
  }

  .navbar-brand {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .buttonInicio {
  }

  .buttonRegister {
  }

  .btn-outline-secondary {
  	color: #100F0F !important;
  }

  .btn-outline-secondary:hover {
  	color: #5cdb95 !important;
  }

  @media only screen and (min-width:1200px) {
    #searchbar {
      display: block;
    }

    .buttonInicio {
      margin-left: 0;
      margin-right: 20px;
    }

    .buttonRegister {
      border: #100F0F solid 1px;
      border-radius: 11px;
      padding-right: 20px;
      height: 40px;
    }
  	.nav a {
  		background-color: transparent;
  	}
  }
  @media only screen and (min-width:1440px) {
  	.logo {
  		padding-left: 60px;
  	}
  	.buttonRegister {
  		margin-right: 60px;
  	}
  	.nav a {
  		background-color: transparent;
  	}
  }
</style>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
    }
  },
  props: [ 'activeUser' ],
  computed: {
    shortName(){
      return this.activeUser.sobreNombre || null;
    }
  },
  methods: {
    ...mapActions({
      mRActiveAction: 'Models/mRActiveAction',
      mISActiveAction: 'Models/mISActiveAction'
    }),
    showISModal() {
      // we must pass object params with all the information
      const params = {
        modalInerInfo : {
          title: "INICIAR SESIÓN",
          text: "",
        },
        isActive: true
      };

      this.mISActiveAction(params);
      /*AFSS - Hay mejor forma de saber cuando renderizo el Modal
        para proceder a abrirlo.*/
      setTimeout(() =>{
        this.$GlobalModal.modalIS(params);
      },100);
    },
    showRModal(){
      const params = {
        title: "ÚNETE A werk...",
      };
      // now we can call function that will reveal our ISmodal prototype of our plugin
      this.mRActiveAction(true);
      setTimeout(() =>{
        this.$GlobalModal.modalRP(params);
      },100);
    },
  }

}
</script>
