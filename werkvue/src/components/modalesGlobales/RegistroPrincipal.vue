<template>
  <div class="">
    <b-modal id="RegistroPrincipalModalID" centered hide-footer hide-header>
      <b-form>
        <h2 style="text-align:center; margin-top:30px; margin-bottom:0;">{{ title }}</h2>

        <div class="registro-roles">
          <b-row>
            <label class="werk-label registro-roles-titulo">ELIGE TU TIPO DE PERFIL</label>
          </b-row>
          <b-row>
            <b-col class="col-rol">
              <b-button v-on:click="activeRol('Freelance')" v-bind:class="[usuarioRegistro.werker.tipo == 'Freelance' ? 'rol-buttom-selected' : '' ]" class="rol-buttom werk-shadow-card ">FREELANCER</b-button>
            </b-col>
            <b-col class="col-rol">
              <b-button v-on:click="activeRol('Contratante')" v-bind:class="[usuarioRegistro.werker.tipo == 'Contratante' ? 'rol-buttom-selected' : '' ]" class="rol-buttom werk-shadow-card ">CONTRATANTE</b-button>
            </b-col>
          </b-row>
          <b-form-group id="CorreoLableRPModal" label="E-MAIL" label-for="CorreoInputRPModal" class="werk-label" style="margin-top: 19px; margin-bottom: 23px;">
            <b-form-input id="CorreoInputRPModal" v-model="usuarioRegistro.correo" class="werk-input werk-shadow-input" placeholder="Teclea aquí" required>
            </b-form-input>
          </b-form-group>
        </div>

      </b-form><!--form-modal-->
      <div class="acciones-modal">
        <b-button pill v-b-modal.RegistroCorreoModalID class="werk-main-buttom shadow-none">CONTINUAR</b-button>

        <b-button class="redes-sociales-buttom facebook-buttom shadow-none">
          <font-awesome-icon class="redes-sociales-buttom-icon" style="color:white;" size="2x" :icon="['fab', 'facebook-square']"  />
          <p>Registrarse con Facebook</p>
        </b-button>
        <b-button class="redes-sociales-buttom shadow-none">
          <font-awesome-icon class="redes-sociales-buttom-icon" size="2x" :icon="['fab', 'google']" />
          <p>Registrarse con Google</p>
        </b-button>
        <b-button class="redes-sociales-buttom shadow-none">
          <font-awesome-icon class="redes-sociales-buttom-icon" size="2x" :icon="['fab', 'apple']" />
          <p>Registrarse con Apple</p>
        </b-button>
        <p>Al unirte, aceptas recibir e-mails de <b>werk..</b></p>
      </div><!--acciones-modal-->
    </b-modal><!--Modal-Registro-Principal-->

    <b-modal id="RegistroCorreoModalID" hide-footer hide-header class="R-Modal">
      <b-form>
        <h2 style="text-align:center; margin-top:30px;">{{ title }}</h2>
        <div class="registro-usuario">
          <b-form-group id="NombreLableRModal" label="NOMBRE COMPLETO" label-for="NombreInputRModal" class="werk-label" style="margin-top: 45px; margin-bottom: 23px;">
            <b-form-input id="NombreInputRModal" v-model="usuarioRegistro.sobreNombre" class="werk-input werk-shadow-input" placeholder="Teclea aquí" required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="PasswordLableRModal" label="CONTRASEÑA" label-for="PasswordInputRModal" class="werk-label">
            <b-form-input id="PasswordInputRModal" v-model="usuarioRegistro.password" class="werk-input werk-shadow-input" placeholder="Contraseña" required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="RepPasswordLableRModal" label="CONTRASEÑA" label-for="RepPasswordInputRModal" class="werk-label">
            <b-form-input id="RepPasswordInputRModal" v-model="usuarioRegistro.repPassword" class="werk-input werk-shadow-input" placeholder="Contraseña" required>
            </b-form-input>
          </b-form-group>
          <b-form-group id="CodPromLableRModal" label="CÓDIGO PROMOCIONAL" label-for="CodPromInputRModal" class="werk-label">
            <b-form-input id="CodPromInputRModal" v-model="usuarioRegistro.codPromocional" class="werk-input werk-shadow-input" placeholder="Teclea aquí" required>
            </b-form-input>
          </b-form-group>
        </div>

      </b-form><!--form-modal-->
      <div class="acciones-modal">
        <p>Al unirte aceptas los <a href="#" class="a-password">términos y condiciones</a>, así como el
          <a href="#" class="a-password">aviso de privacidad</a> de <b>werk...</b></p>
          <ApolloMutation :mutation="creandoUsuarioGql" :variables="{
            input:{
              sobreNombre: usuarioRegistro.sobreNombre,
              correo: usuarioRegistro.correo,
              password: usuarioRegistro.password,
              werker:{
                tipo: usuarioRegistro.werker.tipo
              }
            }
          }"
          @done="registroUserStore">
          <template slot-scope="{ mutate, loading, error }">
            <div v-if="loading">Loading...</div>
            <b-button :disabled="loading" pill class="werk-main-buttom shadow-none" @click="mutate();">FINALIZAR</b-button>
            <p v-if="error">A ocurrido un error: {{ error }}</p>
          </template>
        </ApolloMutation>
      </div><!--acciones-modal-->
    </b-modal><!--Modal-Registro-Correo-->
  </div>

</template>
<style scoped>

  /* --Configuración Modal-- */

  @media only screen and (max-width:767px) {
    .modal{
      left:75px!important;
    }
  }

  .modal-dialog {
    width:386px;
  }/*
      #RegistroPrincipalModalID,
      #RegistroCorreoModalID
  */

  .modal-content {
    -webkit-border-radius: 15px!important;
    -moz-border-radius: 15px!important;
    border-radius: 15px!important;
  }

  /* --Botones-- */

  .werk-main-buttom {
    margin-top:23px;
  }

  .rol-buttom{
    width: 120px;
    font-weight: 500;
    font-size: 13px;
    border-radius: 10px;
    height: 38px;
    border: none;
    background-color: white;
    color: #6a6a6a;
    font-weight: 500;
  }

  .rol-buttom:hover{
    color: #519482!important;
    font-weight: 700;
  }

  .rol-buttom-selected{
    background-color: #9fe1b3!important;
    color: #519482!important;
    font-weight: 800!important;
  }

  .redes-sociales-buttom {
    width: 266px;
    height: 45px;
    margin-top: 19px;
    border-radius: 10px;
    background-color: white;
    color: black;
    font-weight: 500;
    border: 0 solid transparent;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .redes-sociales-buttom:hover {
    background-color: #7ed89a!important;
    color: white;
  }

  .redes-sociales-buttom p {
    width: auto!important;
  }

  .redes-sociales-buttom-icon{
    margin-right: 15px;
  }

  .facebook-buttom{
    background-color: #3f5793!important;
    color:white;
  }

  /*Estilos generales*/

  .werk-input{
    width:100%!important;
  }

  .registro-roles {
    width: 315px;
    margin: auto;
    margin-top: 45px;
  }

  .registro-roles-titulo {
    padding-left: 49px;
  }

  .registro-usuario{
    width: 315px;
    margin: auto;
  }

  .col-rol {
    display: flex;
    justify-content: center;
  }

  .acciones-modal{
    text-align: center;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .acciones-modal p{
    font-size: 11px;
    width: 230px;
    margin-top: 15px;  /*aqui conflicto - no estaban*/
    margin-bottom: 8px; /*aqui conflicto - no estaban*/
  }

  .a-password{
    font-size: 11px;
  }

</style>

<script>
/*
* No se hará un modal global dentro de VUEX porque no sabe
* si cambiaremos a un state management de GRAPHQL
*/

import ModalBus from '../../plugins/ModalPlugin.js';
import { gql } from "apollo-boost";
import { mapActions } from 'vuex';
import router from '../../router';

export default {
  data() {
    return {
      title: '',
      text: '',
      // adding callback function variable
      onRegistro: {},
      usuarioRegistro: {
        correo: 'test@test.com',
        password: '123456789',
        repPassword: '123456789',
        sobreNombre: 'test2',
        werker:{
          tipo: 'Freelance'
        }
      },
      creandoUsuarioGql: gql `
        mutation creandoUsuario($input: UsuarioInput!){
          creandoUsuario(input: $input){
            sobreNombre
            correo
            password
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
    registroUserStore(val) {
      // we must check if this.onRegistro is function
      this.actUserStore(val.data.creandoUsuario);
      this.navigateToWerkerHomePage(val.data.creandoUsuario.werker.tipo);
      this.hideModalRP();
      this.hideModalRC();
    },
    showModalRP(params) {
      // making modal visible
      this.$bvModal.show('RegistroPrincipalModalID');
      this.title = params.title;
    },
    hideModalRP() {
      this.$bvModal.hide('RegistroPrincipalModalID');
    },
    hideModalRC() {
      this.$bvModal.hide('RegistroCorreoModalID');
    },
    // get Rol selection
    activeRol(activeRol){
      this.usuarioRegistro.werker.tipo = activeRol;
      //Add and remove class ¿?
    }
  },
  beforeMount() {
    // here we need to listen for emited events
    // we declared those events inside our plugin
    ModalBus.EventBus.$on('modalRP', (params) => {
      this.showModalRP(params)
    })
  }
}

</script>
