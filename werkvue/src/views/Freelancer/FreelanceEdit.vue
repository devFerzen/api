<template>
  <div>
    <div id="freelance-edit" class="blue-circle-background">
      <div class="blue-circle-content">
        <h1 class="freelance-edit-title">EDITA TU PERFIL</h1>
      </div>
    </div>
    <b-container fluid="md" align="left" class="freelance-edit-content" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">
      <b-form id="freelanceData">

        <div class="perfil-descripcion freelance-edit-seccion">
          <b-row no-gutters>
            <b-col cols="4" md="3" lg="2">
              <b-img fluid center class="perfil-image"
              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"></b-img>
            </b-col>
            <b-col cols="8" md="9" lg="10">
              <b-form-group
                id="inputGroupfreelanceDescripcion"
                label="DESCRIPCIÓN"
                label-for="freelanceDescripcion"
                class="werk-label">
                <b-form-textarea
                  id="freelanceDescripcion"
                  v-model="FreelanceInfo.descripcion"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                  rows="3"
                  no-resize
                  style="height: auto!important;"
                ></b-form-textarea>
              </b-form-group>
              <!--descripcion-->
            </b-col>
          </b-row>
        </div>
        <!--perfil-descripcion-->

        <div class="informacion-personal freelance-edit-seccion float-lg-left">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">INFORMACIÓN PERSONAL</h5>
          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupfreelanceNombres"
                label="NOMBRE(S)"
                label-for="freelanceNombre"
                class="werk-label">
                <b-form-input
                  id="freelanceNombre"
                  v-model="FreelanceInfo.informacion_personal.nombre.nombres"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                ></b-form-input>
              </b-form-group><!--nombres-->
            </b-col>
          </b-row>

          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupfreelanceApellidos"
                label="APELLIDOS"
                label-for="freelanceApellidos"
                class="werk-label">
                <b-form-input
                  id="freelanceApellidos"
                  v-model="FreelanceInfo.informacion_personal.nombre.apellidos"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                ></b-form-input>
              </b-form-group><!--apellidos-->
            </b-col>
          </b-row>

          <label>FECHA DE NACIMIENTO</label>
          <b-row no-gutters>
            <b-col>
              <b-form-group>
                <b-form-select
                  id="freelanceDay"
                  v-model="nacimiento.dia"
                  class="werk-input werk-shadow-input"
                  :options="diaOptions"
                ></b-form-select>
              </b-form-group><!--dia-->
            </b-col>
            <b-col align-self="end" class="mr-2 ml-2">
              <b-form-group>
                <b-form-select
                  id="freelanceDay"
                  v-model="nacimiento.mes"
                  class="werk-input werk-shadow-input"
                  :options="mesOptions"
                ></b-form-select>
              </b-form-group><!--mes-->
            </b-col>
            <b-col align-self="end">
              <b-form-group>
                <b-form-select
                  id="freelanceDay"
                  v-model="nacimiento.ano"
                  class="werk-input werk-shadow-input"
                  :options="anoOptions"
                ></b-form-select>
              </b-form-group><!--ano-->
            </b-col>
          </b-row>

          <b-row no-gutters>
            <b-col>
              <b-form-group
                id="inputGroupfreelanceGenero"
                label="GÉNERO"
                label-for="freelanceGenero"
                class="werk-label">
                <b-form-select
                  id="freelanceGenero"
                  v-model="FreelanceInfo.informacion_personal.genero"
                  required
                  class="werk-input werk-shadow-input"
                  :options="generoOptions"
                ></b-form-select>
              </b-form-group><!--genero-->
            </b-col>
          </b-row>

          <b-row no-gutters>
            <b-col class="mr-2">
              <label>UBICACIÓN</label>
              <b-form-group>
                <b-form-select
                  id="freelanceEstado"
                  v-model="FreelanceInfo.werker.ubicacion.estado"
                  class="werk-input werk-shadow-input"
                  :options="estadoOptions"
                ></b-form-select>
              </b-form-group><!--estado-->
            </b-col>
            <b-col align-self="end">
              <b-form-group>
                <b-form-select
                  id="freelanceEstado"
                  v-model="FreelanceInfo.werker.ubicacion.ciudad"
                  required
                  class="werk-input werk-shadow-input"
                  :options="ciudadOptions"
                ></b-form-select>
              </b-form-group><!--ciudad-->
            </b-col>
          </b-row>
        </div>
        <!--informacion-personal-->

        <div class="contacto-redesSociales float-lg-right">
          <div class="contacto freelance-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">CONTACTO</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupfreelanceTelFijo"
                  label="TELÉFONO FIJO"
                  label-for="freelanceTelFijo"
                  class="werk-label">
                  <b-form-input
                    id="freelanceTelFijo"
                    v-model="FreelanceInfo.contacto.telefonos.fijo"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--tel fijo-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupfreelanceCorreo"
                  label="E-MAIL"
                  label-for="freelanceCorreo"
                  class="werk-label">
                  <b-form-input
                    id="freelanceCorreo"
                    v-model="FreelanceInfo.contacto.correo"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--EMAIL-->
              </b-col>
            </b-row>

            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupfreelanceTelCel"
                  label="TELÉFONO CELULAR"
                  label-for="freelanceTelCel"
                  class="werk-label">
                  <b-form-input
                    id="freelanceCelular"
                    v-model="FreelanceInfo.contacto.telefonos.celular"
                    required
                    placeholder="TECLEA AQUÍ"
                    class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--telCel-->
              </b-col>
            </b-row>
          </div>
          <!--contacto-->

          <div class="redesSociales freelance-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">REDES SOCIALES</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                  id="inputGroupfreelanceWeb"
                  label="PÁGINA WEB"
                  label-for="freelanceWeb"
                  class="werk-label">
                  <b-form-input
                    id="freelanceWeb"
                    v-model="FreelanceInfo.contacto.url"
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
                  id="inputGroupfreelanceFacebook"
                  label="FACEBOOK"
                  label-for="freelanceFacebook"
                  class="werk-label">
                  <b-form-input
                    id="freelanceFacebook"
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
                  id="inputGroupfreelanceInstagram"
                  label="INSTAGRAM"
                  label-for="freelanceInstagram"
                  class="werk-label">
                  <b-form-input
                    id="freelanceInstagram"
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
                  id="inputGroupfreelanceTwitter"
                  label="TWITTER"
                  label-for="freelanceTwitter"
                  class="werk-label">
                  <b-form-input
                    id="freelanceTwitter"
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
                  id="inputGroupfreelanceLinkedin"
                  label="LINKEDIN"
                  label-for="freelanceLinkedin"
                  class="werk-label">
                  <b-form-input
                    id="freelanceLinkedin"
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

        <div class="habilidades-datosNegocio float-lg-left">
          <div class="habilidades freelance-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">TAGS</h5>
            <b-form-tags v-model="FreelanceInfo.tags.nombre">
              <template v-slot="{ inputAttrs, inputHandlers }">
                <b-input-group aria-controls="tags-list">
                  <b-form-input
                    v-model="werkTagNombre"
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    placeholder="Seleccione"
                    class="werk-input werk-shadow-input mr-2"
                  >
                  </b-form-input>
                  <b-input-group-append>
                    <b-form-select
                      v-model="werkTagExp"
                      :options="experienciaOptions"
                      class="werk-input werk-shadow-input ml-2 mr-2"
                    >
                    </b-form-select>
                  </b-input-group-append>
                  <b-input-group-append>
                    <b-button class="shadow-none ml-2" style="border-radius:6px;"@click="addingWerkTag({werkTagNombre, werkTagExp})"> ADD</b-button>
                  </b-input-group-append>
                </b-input-group>
                <span style="font-size: 10px; color: #a5a5a5;">TAGS:</span>
                <ul id="tags-list" class="list-unstyled d-inline-flex flex-wrap mb-0 mt-1">
                  <b-badge
                    v-for="(werkTag, index) in FreelanceInfo.tags"
                    :key="index"
                    tag="li"
                    class="mx-1 my-1 werk-tags"
                  >
                  {{werkTag.nombre}} {{werkTag.experiencia}}
                  </b-badge>
                </ul>
              </template>
            </b-form-tags>
          </div>

          <div class="datos-negocio freelance-edit-seccion">
            <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">DATOS DE TU NEGOCIO</h5>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                id="inputGroupfreelanceNombre"
                label="NOMBRE COMERCIAL"
                label-for="freelanceNombre"
                class="werk-label">
                  <b-form-input
                  id="freelanceDTNombre"
                  v-model="FreelanceInfo.negocio.nombre"
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
                id="inputGroupfreelanceDTAnos"
                label="AÑOS ACTIVOS"
                label-for="freelanceDTAnos"
                class="werk-label">
                  <b-form-input
                  id="freelanceDTAnos"
                  v-model="FreelanceInfo.negocio.anos_activos"
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
                id="inputGroupfreelanceDTDescripcion"
                label="DESCRIPCIÓN DE SERVICIOS"
                label-for="freelanceDTDescripcion"
                class="werk-label">
                  <b-form-input
                  id="freelanceDTDescripcion"
                  v-model="FreelanceInfo.negocio.descripcion"
                  required
                  placeholder="TECLEA AQUÍ"
                  class="werk-input werk-shadow-input"
                  ></b-form-input>
                </b-form-group><!--Cambiarlo a text arrea*****-->
              </b-col>
            </b-row>
          </div>
        </div><!--habilidades-datosNegocio-->
        <!--habilidades-datosNegocio-->

        <div class="datos-facturacion freelance-edit-seccion float-lg-right">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">DATOS DE FACTURACIÓN</h5>
          <b-row no-gutters>
            <b-col cols="3" md="4">
              <lable class="edit-label-checkbox">¿GENERAS FACTURAS?</lable>
            </b-col>
            <b-col>
              <b-form-checkbox class="edit-input-checkbox" v-model="FreelanceInfo.werker.factura" switch size="lg"></b-form-checkbox>
            </b-col>
          </b-row>

          <b-row class="freelance-facturacion-card werk-shadow-card mt-2" align-v="center">
            <b-col>
              <p>NOMBRE / RAZÓN SOCIAL</p>
              <p>RFC</p>
              <p>DIRECCIÓN COMPLETA...</p>
            </b-col>
            <b-col style="display: flex; justify-content: flex-end;" cols="3" align-self="center">
              <b-form-checkbox class="edit-input-checkbox" v-model="FreelanceInfo.factura" switch size="lg"></b-form-checkbox>
              <font-awesome-icon :icon="['fab', 'twitter']" class="facturacion-acciones-icons" />
              <font-awesome-icon :icon="['fab', 'twitter']" class="facturacion-acciones-icons" />
            </b-col>
          </b-row><!--vfor, junta para quitarlo de aqui-->
        </div>
        <!--datos-facturacion-->

        <b-row style="clear: both;">
          <b-button pill class="werk-main-buttom shadow-none mx-auto" @click="objetoWerkSaveUpdate()">GUARDAR</b-button>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<style lang="css" scoped>

  /* Globales */

  #freelance-edit.blue-circle-background {
    background-color: #05386B;
    position: relative;
    width: 100%;
    margin-bottom: 85px;
  }

  #freelance-edit.blue-circle-background::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url(../../assets/Fondo.svg);
  }

  #freelance-edit .blue-circle-content {
    height: 130px;
  }

  .freelance-edit-title {
    position: absolute;
    top: 70%;
    text-align: center;
    color: white;
    width: 100%;
  }

  .freelance-edit-content h5{
    margin-left: -17px;
  }

  .freelance-edit-seccion {
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 1.2rem;
  }

  .freelance-edit-content .perfil-descripcion {
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
  .habilidades-datosNegocio,
  .datos-facturacion {
    width:50%;
  }

  @media only screen and (max-width:992px) {

    .informacion-personal,
    .contacto-redesSociales,
    .habilidades-datosNegocio,
    .datos-facturacion {
      width:100%;
    }

    .habilidades-datosNegocio{
      top: 0px;
    }

    .freelance-facturacion-card {
      width: 600px;
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

  /* tags */
  .badge.werk-tags {
    font-size: 12px;
    line-height: 13px;
    padding: 6px 24px;
    border-radius: 17px;
    color: #379683;
    background-color: #7ed89a;
    margin-right: 5px;
    font-family: 'Montserrat';
    cursor: pointer;
  }

  .badge.werk-tags:hover {
    color: #379683;
    background-color: #5CD895;
  }

  /* facturacion */
  .freelance-facturacion-card {
    width: 535px;
    height: 75px;
    border-radius: 8px;
  }

  .freelance-facturacion-card p:first-child {
    font-family: 'Montserrat';
    font-weight: 600;
  }

  .freelance-facturacion-card p {
    margin-bottom: 0;
    font-size:12px;
  }

  .facturacion-acciones-icons {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 22px;
  }
</style>

<script>

  import { WERKOBJECT_NEW, WERKOBJECT_UPDATE } from '../../graphql/mutations/objetoWerkMutations.js';
  //Falta el objetoqUERIES

  export default {
    props: {
      id: {
        type: String,
        default: '0'
      }
    },
    data() {
      return {
        FreelanceInfo: {
          informacion_personal: {
            nombre: {
              nombres: "Pacheco Chupame",
              apellidos: "Melap Utonio"
            },
            nacimiento: "1989-12-01T05:00:00.000+00:00",
            genero: "masculino"
          },
          negocio: {
            nombre: "Pies company",
            descripcion: "Vendo fotos de pies",
            anos_activos: 1
          },
          areas_de_especialidad: ["Fotos de pie completo", "Fotos de talón", "Fotos de dedos raros"],
          descripcion: "Soy fotografo de pies, Lorem ipsum dolor sit amet, te la comes Winnies lol consectetur adipiscing elit. Morbi aliquet molestie ligula in eleifend. PENE Nulla facilisi. Suspendisse potenti. Integer dictum ullamcorper enim sed suscipit. Vivamus iaculis lacus viverra velit suscipit rhoncus. Quisque quis nisi posuere, finibus mi non, malesuada est. Cras vehicula cursus malesuada. Suspendisse fringilla quis lectus a ornare.",
          categorizaciones: [
            {
              tipo: "categoria",
              nombre: "Marketing"
          	},
          	{
              tipo: "categoria",
              nombre: "Fotografía"
            },
          	{
              tipo: "sub-categoria",
              nombre: "Publicidad"
            }],
          tags: [{
            nombre: "Pies",
            experiencia: 5
          },
          {
            nombre: "Fotografía Nocturna Astral",
            experiencia: 1
          }],
          contacto: {
            telefonos: {
              "fijo": "83000000",
              "celular": "8110000000"
            },
            "redes_sociales": [{
              red: "faWhatsapp",
              url: "url@urlwhatsapp"
            },
            {
              red: "faTwitter",
              url: "url@urltwitter"
            },
            {
              red: "faLinkedin",
              url: "url@urllinkedin"
            }]
          },
          werker: {
            factura: true,
            ubicacion: {
              pais: "MX",
              estado: "NLE",
              ciudad: "MTY"
            },
            objetos_werk: [{
              tipo: "anuncio",
              id: "600f9fa8015c570ab870f400"
            },{
              tipo: "anuncio",
              id: "600f9fa4015c570ab870f3ff"
            }]
          },
          objeto_werk: {
            tipo: "freelance",
            esquemas: [1,2,3],
            capacidad: [1,2],
            estatus: {
              tipo: true
            }
          }
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
        werkTagNombre: '',
        werkTagExp: '0',
        experienciaOptions: [
          { value: '0', text: 'Selecciona'},
          { value: 1, text: 'menor a 2 años'},
          { value: 2, text: '3 a 5 años'},
          { value: 3, text: 'mayor a 5 años'},
        ]
      }
    },
    methods:{
      showDFModal(){
        //AFSS - esta funcion esta pendiente de pasar a modal config
        const params = {
          title: "puto"
        };
        this.$GlobalModal.modalDF(params)
      },
      addingWerkTag(valor){
        /*if (valor.arraySeleccion == '0') {
          return;
        }*/
        this.FreelanceInfo.tags.push({nombre: valor.werkTagNombre, exp: valor.werkTagExp});
      },
      getFreelanceinfo: async(params) => {
        if (params.id === '0') {
          return;
        }

        const gqlQueryResult = await this.$apollo.query({
          query: WERK_OBJECT_QUERY,
          variables: {
            params
          }
        });
        this.FreelanceInfo = gqlQueryResult;
      },
      objetoWerkSaveUpdate(){
        // AFSS - Pendiente Validación
        let params = {};
        params.input = this.FreelanceInfo;

        if(this.id !== '0'){
          params.id = this.id;
        }

        const answer = this.$apollo.mutate({
          mutation: this.id === '0' ? WERKOBJECT_NEW : WERKOBJECT_UPDATE,
          variables: {
            params
          }
        });
        console.dir(answer);
      }
    },
    async created(){
      //AFSS - pasar a module para que se use globalmente Select año and día autofill
      for (var day = 1; day <= 31; day++) {
        this.diaOptions.push({ value: day , text: day});
      }
      const actualYear = new Date().getFullYear();
      const startYear = actualYear - 100;

      for (var ano = actualYear; ano >= startYear; ano--) {
        this.anoOptions.push({ value: ano , text: ano});
      }

      let params = {};
      parms.id = this.id;
      await this.getFreelanceinfo(params);
    }
  }
</script>
