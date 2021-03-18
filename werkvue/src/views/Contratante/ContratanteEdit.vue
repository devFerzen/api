<template lang="html">
  <div>
    <div id="contratante-edit" class="blue-circle-background">
      <div class="blue-circle-content">
        <h1 class="contratante-edit-title">EDITA TU PERFIL</h1>
      </div>
    </div>

    <!--El famoso header -->
    <!-- hahahaha -->
    <!--SE VA A ELIMINAR-->

    <b-container fluid="md" align="left" class="contratante-edit-content" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">
      <b-form id="contratanteData">
        <div class="perfil-descripcion contratante-edit-seccion">
          <b-row no-gutters>
            <b-col cols="4" md="3" lg="2">
              <b-img fluid center class="perfil-image"
              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"></b-img>
            </b-col>
            <b-col cols="8" md="9" lg="10">
              <h5 style="margin-bottom:28px;">TIPO DE PERFIL</h5>
            </b-col>
          </b-row>
        </div>
        <!--perfil-descripcion-->

        <div class="informacion-personal contratante-edit-seccion float-lg-left">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">INFORMACIÓN PERSONAL</h5>
          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupContratanteNombres"
                label="NOMBRE(S)"
                label-for="contratanteNombre"
                class="werk-label">
                <b-form-input
                  id="contratanteNombre"
                  v-model="ContratanteInfo.informacion_personal.nombre.nombres"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--nombres-->

          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupContratanteApellidos"
                label="APELLIDOS"
                label-for="contratanteApellidos"
                class="werk-label">
                <b-form-input
                  id="contratanteApellidos"
                  v-model="ContratanteInfo.informacion_personal.nombre.apellidos"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--apellidos-->

          <label>FECHA DE NACIMIENTO</label>
          <b-row no-gutters>
            <b-col>
              <b-form-group>
                <b-form-select
                  id="contratanteDay"
                  v-model="nacimiento.dia"
                  class="werk-input werk-shadow-input"
                  :options="diaOptions"
                ></b-form-select>
              </b-form-group><!--dia-->
            </b-col>
            <b-col align-self="end" class="mr-2 ml-2">
              <b-form-group>
                <b-form-select
                  id="contratanteDay"
                  v-model="nacimiento.mes"
                  class="werk-input werk-shadow-input"
                  :options="mesOptions"
                ></b-form-select>
              </b-form-group><!--mes-->
            </b-col>
            <b-col align-self="end">
              <b-form-group>
                <b-form-select
                  id="contratanteDay"
                  v-model="nacimiento.ano"
                  class="werk-input werk-shadow-input"
                  :options="anoOptions"
                ></b-form-select>
              </b-form-group><!--ano-->
            </b-col>
          </b-row>
          <!--fechadenacimiento-->

          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupContratanteGenero"
                label="GÉNERO"
                label-for="contratanteGenero"
                class="werk-label">
                <b-form-select
                  id="contratanteGenero"
                  v-model="ContratanteInfo.informacion_personal.genero"
                  required
                  class="werk-input werk-shadow-input"
                  :options="generoOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!--genero-->

          <b-row no-gutters>
            <b-col class="mr-2">
              <label>UBICACIÓN</label>
              <b-form-group>
                <b-form-select
                  id="contratanteEstado"
                  v-model="ContratanteInfo.werker.ubicacion.estado"
                  class="werk-input werk-shadow-input"
                  :options="estadoOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col align-self="end">
              <b-form-group>
                <b-form-select
                  id="contratanteEstado"
                  v-model="ContratanteInfo.werker.ubicacion.ciudad"
                  required
                  class="werk-input werk-shadow-input"
                  :options="ciudadOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!--estado-ciudad-->
        </div>
        <!--informacion-personal-->

        <div class="contacto-redesSociales float-lg-right">
          <div class="contacto contratante-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">CONTACTO</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteTelFijo"
                  label="TELÉFONO FIJO"
                  label-for="contratanteTelFijo"
                  class="werk-label">
                  <b-form-input
                    id="contratanteTelFijo"
                    v-model="ContratanteInfo.contacto.telefonos.fijo"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!--telfijo-->

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteTelCel"
                  label="TELÉFONO CELULAR"
                  label-for="contratanteTelCel"
                  class="werk-label">
                  <b-form-input
                    id="contratanteCelular"
                    v-model="ContratanteInfo.contacto.telefonos.celular"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!--telCel-->

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteCorreo"
                  label="E-MAIL"
                  label-for="contratanteCorreo"
                  class="werk-label">
                  <b-form-input
                    id="contratanteCorreo"
                    v-model="ContratanteInfo.contacto.correo"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!--correo-->
          </div>
          <!--contacto-->

          <div class="redesSociales contratante-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">REDES SOCIALES</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteWeb"
                  label="PÁGINA WEB"
                  label-for="contratanteWeb"
                  class="werk-label">
                  <b-form-input
                    id="contratanteWeb"
                    v-model="ContratanteInfo.contacto.url"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--web-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteFacebook"
                  label="FACEBOOK"
                  label-for="contratanteFacebook"
                  class="werk-label">
                  <b-form-input
                    id="contratanteFacebook"
                    v-model="redes_sociales.facebook"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--facebook-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupContratanteInstagram"
                  label="INSTAGRAM"
                  label-for="contratanteInstagram"
                  class="werk-label">
                  <b-form-input
                    id="contratanteInstagram"
                    v-model="redes_sociales.instagram"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--instagram-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupcontratanteTwitter"
                  label="TWITTER"
                  label-for="contratanteTwitter"
                  class="werk-label">
                  <b-form-input
                    id="contratanteTwitter"
                    v-model="redes_sociales.twitter"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--twitter-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupcontratanteLinkedin"
                  label="LINKEDIN"
                  label-for="contratanteLinkedin"
                  class="werk-label">
                  <b-form-input
                    id="contratanteLinkedin"
                    v-model="redes_sociales.linkedin"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--linkedin-->
              </b-col>
            </b-row>
          </div>
          <!--redesSociales-->
        </div>
        <!--contacto-redesSociales-->

        <div class="datosNegocio float-lg-left">
          <div class="contratante-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">DATOS DE TU NEGOCIO</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                id="inputGroupContratanteNombre"
                label="NOMBRE COMERCIAL"
                label-for="contratanteNombre"
                class="werk-label">
                  <b-form-input
                  id="contratanteDTNombre"
                  v-model="ContratanteInfo.negocio.nombre"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--linkedin-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                id="inputGroupContratanteDTAnos"
                label="AÑOS ACTIVOS"
                label-for="contratanteDTAnos"
                class="werk-label">
                  <b-form-input
                  id="contratanteDTAnos"
                  v-model="ContratanteInfo.negocio.anos_activos"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--añosActivo-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                id="inputGroupContratanteDTDescripcion"
                label="DESCRIPCIÓN DE SERVICIOS"
                label-for="contratanteDTDescripcion"
                class="werk-label">
                  <b-form-input
                  id="contratanteDTDescripcion"
                  v-model="ContratanteInfo.negocio.descripcion"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--Cambiarlo a text arrea*****-->
              </b-col>
            </b-row>
          </div>
        </div>
        <!--datosNegocio-->

        <div class="datos-facturacion contratante-edit-seccion float-lg-right">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">DATOS DE FACTURACIÓN</h5>
          <b-row no-gutters>
            <b-col cols="3" md="4">
              <lable class="edit-label-checkbox">¿GENERAS FACTURAS?</lable>
            </b-col>
            <b-col>
              <b-form-checkbox class="edit-input-checkbox" v-model="ContratanteInfo.werker.factura" switch size="lg"></b-form-checkbox>
            </b-col>
          </b-row>
        </div>
        <!--datos-facturacion-->

        <b-row style="clear: both;">
          <b-button pill class="werk-main-buttom shadow-none mx-auto" @click="objetoWerkSave()">GUARDAR</b-button>
        </b-row>

      </b-form>
    </b-container>
  </div>
</template>

<script>

import { CONTRATANTE_INFO_QUERY } from '../../graphql/queries/contratanteQueries.js';
import { CONTRATANTE_UPDATE_MUTATE } from '../../graphql/mutations/contratanteMutations.js';

export default {
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      gqlQueryResult: '',
      ContratanteInfo: {
        informacion_personal: {
          nombre: {
            nombres: "ALFREDO X",
            apellidos: " - MEN"
          },
          nacimiento: "1989-12-01T05:00:00.000+00:00",
          genero: "masculino"
        },
        werker: {
          ubicacion: {
            estado: "Nuevo León",
            ciudad: "Monterrey"
          }
        },
        tipo_perfil: 1,
        negocio: {
          nombre: "El mas verga del mundo",
          descripcion: "El negocio más verga del mundo",
          anos_activos: "1",
          telefono: "83000000",
          direccion: "Abajo"
        },
        contacto: {
          telefonos: {
            fijo: "83000001",
            celular: "8110000000"
          },
          url: "www.penes.com"
        },
        categorizaciones_interes: [
          {
            tipo: "Categoría",
            nombre: "Sexo"
          }
        ],
        tags_interes: [
          {
            nombre: "Anal",
            experiencia: 1
          }
        ]
      },
      redes_sociales: {
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: ''
      },
      nacimiento:{
        dia: 0,
        mes: 0,
        ano: 0,
      },
      diaOptions: [
        { value: 0, text: 'DÍA', disabled: true }
      ],
      mesOptions: [
        { value: 0, text: 'MES', disabled: true },
        { value: 1, text: 'Enero' },
        { value: 2, text: 'Febrero' },
        { value: 3, text: 'Marzo' },
        { value: 4, text: 'Abril' },
        { value: 5, text: 'Mayo' },
        { value: 6, text: 'Junio' },
        { value: 7, text: 'Julio' },
        { value: 8, text: 'Agosto' },
        { value: 9, text: 'Septiembre' },
        { value: 10, text: 'Octubre' },
        { value: 11, text: 'Noviembre' },
        { value: 12, text: 'Diciembre' }
      ],
      anoOptions: [
        { value: 0, text: 'AÑO', disabled: true }
      ],
      estadoOptions: [
        { value: '0', text: 'Estado', disabled: true },
        { value: 'AGU', text: 'Aguascalientes' },
        { value: 'BCN', text: 'Baja California' },
        { value: 'BCS', text: 'Baja California Sur' },
        { value: 'CAM', text: 'Campeche' },
        { value: 'COA', text: 'Coahuila' },
        { value: 'COL', text: 'Colima' },
        { value: 'CHP', text: 'Chiapas' },
        { value: 'CHH', text: 'Chihuahua' },
        { value: 'CMX', text: 'Ciudad de México' },
        { value: 'DUR', text: '	Durango' },
        { value: 'GUA', text: 'Guanajuato' },
        { value: 'GRO', text: 'Guerrero' },
        { value: 'HID', text: 'Hidalgo' },
        { value: 'JAL', text: 'Jalisco' },
        { value: 'MEX', text: 'México' },
        { value: 'MIC', text: 'Michoacán' },
        { value: 'MOR', text: 'Morelos' },
        { value: 'NAY', text: 'Nayarit' },
        { value: 'NLE', text: 'Nuevo León' },
        { value: 'OAX', text: 'Oaxaca' },
        { value: 'PUE', text: 'Puebla' },
        { value: 'QUE', text: 'Querétaro' },
        { value: 'ROO', text: 'Quintana Roo' },
        { value: 'SLP', text: 'San Luis Potosí' },
        { value: 'SIN', text: 'Sinaloa' },
        { value: 'SON', text: 'Sonora' },
        { value: 'TAB', text: 'Tabasco' },
        { value: 'TAM', text: 'Tamaulipas' },
        { value: 'TLA', text: 'Tlaxcala' },
        { value: 'VER', text: 'Veracruz' },
        { value: 'YUC', text: 'Yucatán' },
        { value: 'ZAC', text: 'Zacatecas' }
      ],
      ciudadOptions: [
        { value: '0', text: 'Ciudad', disabled: true },
        { value: 'Aguascalientes', text: 'Aguascalientes' },
        { value: 'Ensenada', text: 'Ensenada' },
        { value: 'Mexicali', text: 'Mexicali' },
        { value: 'Tijuana', text: 'Tijuana' }
      ],
      generoOptions: [
        { value: '0', text: 'SELECCIONA' },
        { value: 'femenino', text: 'Femenino' },
        { value: 'masculino', text: 'Masculino' }
      ],
    }
  },
  methods: {
    contratanteSaveUpdate(){

      let params = {};
      params.input = this.ContratanteInfo;

      if(this.id !== '0'){
        params.id =  this.id;
      }

      const mutateAnswer = this.$apollo.mutate({
        mutation: this.id === '0' ? CONTRATANTE_NEW_MUTATE : CONTRATANTE_UPDATE_MUTATE,
        variables: {
          params
        }
      });
      console.dir(mutateAnswer);
    },
     getContratanteInfo: async(params) =>{
      if (params.id === '0') {
        return;
      }

      const gqlQueryResult = await this.$apollo.query({
          query: CONTRATANTE_INFO_QUERY,
          variables: {
            params
          }
        });
      console.dir(gqlQueryResult);
      this.ContratanteInfo = gqlQueryResult;
    }
  },
  async created(){
    let params = {};
    parms.id = this.id;

    await this.getContratanteInfo(params);
  }

}
</script>

<style lang="css" scoped>

  /* Globales */

  #contratante-edit.blue-circle-background {
    background-color: #05386B;
    position: relative;
    width: 100%;
    margin-bottom: 85px;
  }

  #contratante-edit.blue-circle-background::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url(../../components/Tools/Fondo.svg);
  }

  #contratante-edit .blue-circle-content {
    height: 130px;
  }

  .contratante-edit-title {
    position: absolute;
    top: 70%;
    text-align: center;
    color: white;
    width: 100%;
  }

  .contratante-edit-content h5{
    margin-left: -17px;
  }

  .contratante-edit-seccion {
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 1.2rem;
  }

  .perfil-descripcion {
    width: 100%;
  }

  .perfil-image{
    width: 120px;
    height: 120px;
    border-radius: 8px;
  }

  /*RESPONSIVIDAD*/

  .informacion-personal,
  .contacto-redesSociales,
  .datosNegocio,
  .datos-facturacion {
    width:50%;
  }

  @media only screen and (max-width:992px) {

    .informacion-personal,
    .contacto-redesSociales,
    .datosNegocio,
    .datos-facturacion {
      width:100%;
    }

    .datosNegocio{
      top: 0px;
    }

  }

  /* Inputs */
  .edit-label-checkbox{
    font-size: 13px;
    font-weight: 600;
  }

  .edit-input-checkbox{
    margin-left: 8px;
  }

</style>
