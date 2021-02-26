<template>
  <b-modal id="InicioSesionModalID" hide-footer hide-header class="IS-Modal">
    <div class="avatar mx-auto">
  			<img fluid-grow style="width: 100%; height: auto;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="Skytsunami" />
  	</div>
    <b-form>
      <h2 style="text-align:center;">{{ title }}</h2>
      <b-form-group id="CorreoLableISModal" label="Correo" label-for="CorreoInputISModal" class="lable-IS-Modal first-form-group">
        <b-form-input id="CorreoInputISModal" v-model="usuarioLogin.correo" class="input-IS-Modal werk-shadow-input" placeholder="Teclea aquí" required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="PasswordLableISModal" label="Contraseña" label-for="PasswordInputISModal" class="lable-IS-Modal">
        <b-form-input id="PasswordInputISModal" v-model="usuarioLogin.password" class="input-IS-Modal werk-shadow-input" placeholder="Teclea aquí" required>
        </b-form-input>
      </b-form-group>

    </b-form><!--form-modal-->
    <div class="acciones-modal">
      <a href="#" class="a-password">Olvide mi contraseña</a>
      <ApolloMutation :mutation="loginGql" :variables="{
          correo: usuarioLogin.correo,
          password: usuarioLogin.password
        }"
        @done="iniciandoSesionStore">
        <template slot-scope="{ mutate, loading, error }">
          <b-button :disabled="loading" pill class="btn-ingresar shadow-none" @click="mutate();">INGRESAR</b-button>
          <div v-if="loading">loading...</div>
          <div v-if="error">A ocurrido un error: {{error}}</div>
        </template>
      </ApolloMutation>
      <b-button pill class="btn-registrar shadow-none" variant="secondary">REGISTRATE</b-button>
    </div><!--acciones-modal-->
  </b-modal>
</template>

<style >
  #InicioSesionModalID .modal-dialog {
    width:386px;
  }

  @media only screen and (max-width:767px) {
    .modal{
      left:75px!important;
    }
  }

  .modal-content {
    -webkit-border-radius: 15px!important;
    -moz-border-radius: 15px!important;
    border-radius: 15px!important;
  }

  .avatar {
  	width: 200px;
  	max-height: 200px;
  	height: 200px;
  	box-sizing: border-box;
  	border: 7px #153566 solid;
  	border-radius: 50%;
  	overflow: hidden;
  	transform: translatey(0px);
  	animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
  	0% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
  	50% {
  		box-shadow: 0 20px 15px 0px rgba(0,0,0,0.2);
  		transform: translatey(-10px);
  	}
  	100% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
  }

  .first-form-group{
    margin-top: 35px;
    margin-bottom: 15px;
  }

  .form-group{
    margin-right: auto;
    margin-left: auto;
  }

  .a-password{
    font-size: 11px;
  }

  .lable-IS-Modal{
    font-weight: bold;
    font-size: 14px;
    width:266px;
  }

  .input-IS-Modal{
    height: 45px;
    font-size: 13px;
    border-radius: 10px;
    width:266px;
  }

  .acciones-modal{
    text-align: center;
    margin-top: 15px;
  }

  .btn-ingresar {
    width:296px;
    height: 44px;
    background-color: #7ed89a!important;
    border: 0 solid transparent;
    margin-top:30px;
  }

  .btn-registrar {
    width:243px;
    height: 36px;
    margin-top:15px;
  }
</style>

<script>
/*
* No se hará un modal global dentro de VUEX porque no sabe
* si cambiaremos a un state management de GRAPHQL
*/

import ModalBus from '../../plugins/ModalPlugin.js';
import { gql } from "apollo-boost";
import { mapActions } from 'vuex'
import router from '../../router';

export default {
  data() {
    return {
      title: '',
      text: '',
      // adding callback function variable
      onIniciandoSesion: {},
      usuarioLogin: {
        correo: 'meje@meje.com',
        password: '123456789'
      },
      loginGql: gql `
        mutation LOGIN_USUARIO(
          $correo: String!
          $password: String!
        ){
          loginUsuario(
            correo: $correo
            password: $password
          ){
            _id
            sobreNombre
            werker{
              tipo
            }
          }
        }
      `,
    }
  },
  methods: {
    ...mapActions({
      actUserStore: 'Autenticacion/actUserStore'
    }),
    navigateToWerkerHomePage(val){
      if(val == "Freelance" || val == "Contratante"){
        router.push({ name: "werker-home-route"});
      }
    },
    ISHideModal() {
      // this method is unchanged
      this.$bvModal.hide('InicioSesionModalID');
    },
    iniciandoSesionStore(val) {
        //Mandar al store los valores de inicio de sesion
        this.actUserStore(val.data.loginUsuario);
        this.navigateToWerkerHomePage(val.data.loginUsuario.werker.tipo);
        this.ISHideModal();
    },
    mostarModalIS(params) {
      this.$bvModal.show('InicioSesionModalID');
      this.title = params.title;
    }
  },
  beforeMount() {
    //Listen for emited events
    ModalBus.EventBus.$on('modalIS', (params) => {
      this.mostarModalIS(params)
    })
  }
}

</script>
