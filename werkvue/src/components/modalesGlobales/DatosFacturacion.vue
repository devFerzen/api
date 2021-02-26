<template>
<b-modal id="DatosFacturacionModalID" size="lg" hide-footer hide-header>
  <b-form>
    <h4 style="text-align:left; margin-bottom: 20px;">DATOS DE FACTURACIÓN</h4>
    <b-row>
      <b-col>
        <b-form-group id="NombreLableDFModal" label="NOMBRE COMPLETO O RAZÓN SOCIAL" label-for="NombreInputDFModal" class="lable-DF-Modal form-group">
          <b-form-input id="NombreInputDFModal" v-model="facturacion.nombre" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col>
        <b-form-group id="RFCLableDFModal" label="RFC" label-for="RFCInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="RFCInputISModal" v-model="facturacion.rfc" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-form-group id="CalleLableDFModal" label="CALLE" label-for="CalleInputDFModal" class="lable-DF-Modal form-group">
          <b-form-input id="CalleInputDFModal" v-model="facturacion.calle" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="3">
        <b-form-group id="NoIntLableDFModal" label="NÚM. INT." label-for="NoIntInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="NoIntInputISModal" v-model="facturacion.noInt" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="3">
        <b-form-group id="NoExtLableDFModal" label="NÚM. EXT." label-for="NoExtInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="NoExtInputISModal" v-model="facturacion.noExt" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-form-group id="ColoniaLableDFModal" label="COLONIA" label-for="ColoniaInputDFModal" class="lable-DF-Modal form-group">
          <b-form-input id="ColoniaInputDFModal" v-model="facturacion.colonia" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="4">
        <b-form-group id="CodPostalLableDFModal" label="CÓDIGO POSTAL" label-for="CodPostalInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="CodPostalInputISModal" v-model="facturacion.codPostal" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4">
        <b-form-group id="EstadoLableDFModal" label="ESTADO" label-for="EstadoInputDFModal" class="lable-DF-Modal form-group">
          <b-form-input id="EstadoInputDFModal" v-model="facturacion.estado" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="4">
        <b-form-group id="MunicipiolLableDFModal" label="MUNICIPIO" label-for="MunicipiolInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="MunicipiolInputISModal" v-model="facturacion.municipio" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-form-group id="CorreoLableDFModal" label="E-MAIL" label-for="CorreoInputDFModal" class="lable-DF-Modal form-group">
          <b-form-input id="CorreoInputDFModal" v-model="facturacion.correo" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group id="TelLableDFModal" label="NÚM. TELEFÓNICO" label-for="TelInputISModal" class="lable-DF-Modal form-group">
          <b-form-input id="TelInputISModal" v-model="facturacion.tel" class="input-DF-Modal werk-shadow-input" placeholder="Teclea aquí" required>
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col style="text-align: center;">
        <b-button type="submit" class="btn-comprar">GUARDAR</b-button>
      </b-col>
    </b-row>
  </b-form>
  <!--form-modal-->
</b-modal>
</template>

<style>
@media(max-width:500px) {
  .modal-lg {
    width: 100% !important;
  }
}

#DatosFacturacionModalID .modal-content {
  -webkit-border-radius: 6px !important;
  -moz-border-radius: 6px !important;
  border-radius: 6px !important;
}

#DatosFacturacionModalID .modal-body {
  padding: 24px!important;
}

#DatosFacturacionModalID .form-group {
  margin-right: auto;
  margin-left: auto;
}

.lable-DF-Modal {
  font-weight: bold;
  font-size: 14px;
}

.input-DF-Modal {
  height: 45px;
  font-size: 13px;
  border-radius: 10px;
}

.acciones-modal-facturacion {
  text-align: center;
  margin-top: 15px;
}

.btn-comprar {
  width: 296px;
  height: 44px;
  background-color: #7ed89a !important;
  border: 0 solid transparent;
  margin-top: 30px;
}
</style>

<script>
import ModalBus from '../../plugins/ModalPlugin.js';
import {
  mapActions
} from 'vuex'

export default {
  data() {
    return {
      facturacion: {
        nombre: '',
        rfc: '',
        calle: '',
        noInt: '',
        noExt: '',
        colonia: '',
        codPostal: '',
        estado: '',
        municipio: '',
        correo: '',
        tel: ''
      }
    }
  },
  methods: {
    mostrarModalDF() {
      this.$bvModal.show('DatosFacturacionModalID');
    },
    hideModalDF() {
      this.$bvmodal.hide('DatosFacturacionModalID');
    }

  },
  beforeMount() {
    ModalBus.EventBus.$on('modalDF', (params) => {
      this.mostrarModalDF(params)
    })
  }
}
</script>
