<template>
  <b-container align="left" class="anuncio-edit" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">
    <div style="clear:both;">
    </div>
    <b-form @submit="onSubmit" @reset="onReset">
      <div class="titulo">
        <b-row no-gutters>
          <b-col cols="6">
            <b-form-group
              id="inputGroupTitulo">
              <b-form-textarea
                id="anuncioTitulo"
                v-model="AnuncioInfo.titulo"
                required
                placeholder="TECLEA EL TÍTULO DE TU ANUNCIO..."
                style="border:none;"
                rows=2
                max-rows=2
                no-resize=true
                autocomplete=false
                @keydown="maxCharTitle"
              ></b-form-textarea>
            </b-form-group><!--titulo-->
          </b-col>
          <b-col offset="4" cols="2">
            <div class="delete-box">
              <font-awesome-icon :icon="['fab', 'twitter']" class="tw-redes-icons" />
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="informacionGeneral-bandaPrecios float-lg-left">
        <div class="informacion-general anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">INFORMACIÓN GENERAL</h5>
          <b-form-group
            id="inputGroupSobre"
            label="SOBRE TU ANUNCIO"
            label-for="anuncioSobre">
            <b-form-textarea
              id="anuncioSobre"
              v-model="AnuncioInfo.descripcion"
              required
              placeholder="Teclea aquí"
              class="werk-input werk-shadow-input"
              rows="2"
              max-rows="6"
              no-resize=true
            ></b-form-textarea>
          </b-form-group><!--sobre-->

          <autocomplete-input
            labelFor="Categoria"
            input-lable="SELECCIONA UNA CATEGORIA"
            @evInputCat="getDataInputs"></autocomplete-input>

          <autocomplete-input
            labelFor="SubCategoria"
            input-lable="SELECCIONA UNA SUBCATEGORIA"
            @evInputCat="getDataInputs"></autocomplete-input>

          <b-form-group
            id="inputGroupEspecialdiad"
            label-for="anuncioAreaEspecialidad"
            label="ÁREA DE ESPECIALIDAD">
            <b-form-tags
              v-model="areas_de_especialidad"
              tag-variant="success"
              class="mb-2 mt-2"
              :disabled="disabled"
              no-outer-focus
              placeholder="Escribe tu área de especialidad!.">
              <template v-slot="{tags, placeholder, inputAttrs, inputHandlers, addTag, removeTag }">
                <b-input-group>
                  <!-- Always bind the id to the input so that it can be focused when needed -->
                  <b-form-input
                    v-model="area_de_especialidad"
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    :placeholder="placeholder"
                    :formatter="formatter"
                    class="werk-input werk-shadow-input">
                    </b-form-input>
                  <b-input-group-append>
                    <b-button @click="addingTag({inputAttrs, addTag})" variant="primary">Add</b-button>
                  </b-input-group-append>
                </b-input-group>
                <b-form-invalid-feedback :state="state">
                  Duplicate tag value cannot be added again!
                </b-form-invalid-feedback>
                <ul v-if="tags.length > 0" class="mb-0">
                  <li v-for="tag in tags" :key="tag" :title="`Werk..Tag: ${tag}`" class="mt-2">
                    <span  class="d-flex align-items-center">
                      <span class="mr-2">{{ tag }}</span>
                      <b-button
                        size="sm"
                        variant="outline-danger"
                        @click="removingTag({tag ,removeTag})">
                        remove tag
                      </b-button>
                    </span>
                  </li>
                </ul>
                <b-form-text v-else>
                  <!--No olvides agregar una especialidad!-->
                </b-form-text>
              </template>
            </b-form-tags>
          </b-form-group><!--área de especialidad-->
        </div>

        <div class="banda-precios anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">BANDA DE PRECIOS</h5>
          <div class="min-max">
            <b-form-group
              id="inputGroupMinimo"
              label="MÍNIMO"
              label-for="anuncioAreaMinimo">
              <b-form-input
                id="anuncioAreaMinimo"
                v-model="AnuncioInfo.costo.min"
                required
                placeholder="Teclea aquí"
                class="werk-input werk-shadow-input">
              </b-form-input>
            </b-form-group>

            <b-form-group
              id="inputGroupMaximo"
              label="MÁXIMO"
              label-for="anuncioAreaMaximo">
              <b-form-input
                id="anuncioAreaMáximo"
                v-model="AnuncioInfo.costo.max"
                required
                placeholder="Teclea aquí"
                class="werk-input werk-shadow-input">
              </b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>

      <div class="imagenesProyectos-portafolios float-lg-left">
        <div class="imagenes-proyectos anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">AÑADE TUS IMAGENES DE PROYECTOS</h5>
            <file-pond
              ref="refImages"
              name="filePondImages"
              label-idle="Añade tus imágenes de proyecto..."
              itemInsertLocation="after"
              :files="myFiles"
              @init="handleFilePondInit"
              @processfile="imagenesAnuncioOnProcess"
              @removefile="imagenesAnuncioOnDelete"
              @reorderfiles="imagenesAnuncioOnreorder"
            />
            <!-- :files="imagenesAnuncio"-->
        </div>

        <div class="portafolios anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">ACTIVA TUS PORTAFOLIOS</h5>
          <PortafolioCard></PortafolioCard>
        </div>
      </div>

      <div class="tags-informacionPersonal float-lg-left">
        <div class="tags anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">TAGS</h5>
          <b-form-tags v-model="anuncioTags" no-outer-focus>
            <template v-slot="{ tags, inputAttrs, inputHandlers, removeTag }">
              <b-input-group class="mb-2 werk-shadow-input">
                <input
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  placeholder="Añade los tags para tu anuncio"
                  autocomplete="off"
                  class="form-control edit-inputs shadow-none">
              </b-input-group>
              <div class="d-inline-block">
                <b-form-tag
                  v-for="tag in tags"
                  variant="tags"
                  key="tag"
                  title="tag"
                  class="mr-1 mb-1"
                  style="font-size: .9rem;"
                  @remove="removeTag(tag)">{{tag}}</b-form-tag>
              </div>
            </template>
          </b-form-tags>
        </div>

        <div class="informacion-personal anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 8px; margin-left: 0;">INFORMACIÓN PERSONAL</h5>
          <b-row class="ml-0 mr-0">
            <b-col cols="12" class="pl-0 pr-0">
              <b-row class="ml-0">
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="phone-alt" class="tw-contactame-icons"/><span>{{AnuncioInfo.contacto.telefonos.fijo}}</span></p>
              </b-row>
              <b-row class="ml-0">
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="envelope" class="tw-contactame-icons"/><span>{{AnuncioInfo.contacto.correo}}</span></p>
              </b-row>
              <b-row class="ml-0">
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="globe" class="tw-contactame-icons" style="transform: rotate(22deg);"/><span>{{AnuncioInfo.contacto.url}}</span></p>
              </b-row>
              <b-row no-gutters align-h="start" class="tw-redes">
                <b-col cols="2">
                    <div class="tw-redes-box">
                      <font-awesome-icon :icon="['fab', 'whatsapp']" class="tw-redes-icons" />
                    </div>
                </b-col>

                <b-col cols="2">
                  <div class="tw-redes-box">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" class="tw-redes-icons" />
                  </div>
                </b-col>

                <b-col cols="2">
                  <div class="tw-redes-box">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="tw-redes-icons" />
                  </div>
                </b-col>

                <b-col cols="2">
                  <div class="tw-redes-box">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="tw-redes-icons" />
                  </div>
                </b-col>

                <b-col cols="2">
                  <div class="tw-redes-box">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="tw-redes-icons" />
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row><!--tw-contactame-card-->
        </div>
      </div>

      <div class="acciones-anuncio-edit float-lg-left anuncio-edit-seccion">
        <div class="acciones-anuncio-edit-body">
          <b-button pill class="btn-borrador shadow-none mt-2 mb-1" variant="primary">GUARDAR BORRADOR</b-button>
          <b-button pill class="btn-publicar shadow-none mt-2" variant="primary">GUARDAR Y PUBLICAR</b-button>
        </div>
      </div>
    </b-form>
  </b-container>
</template>

<script>
  import vueFilePond, { setOptions } from 'vue-filepond'
  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata'

  // Create component
  //AFSS - AGREGAR DESPUES: https://nielsboogaard.github.io/filepond-plugin-get-file/
  const FilePond = vueFilePond(
          FilePondPluginFileValidateType,
          FilePondPluginImagePreview,
          FilePondPluginFileMetadata
  );
  setOptions({
    maxFiles: 6,
    credits: false,
    allowReorder: true,
    allowMultiple: true,
    imagePreviewMaxHeight: 256,
    maxFileSize: '7MB',
    itemInsertLocation: 'before',
    labelFileLoading: 'Cargando',
    labelFileLoadError: 'Error durante carga',
    labelFileProcessing: 'Cargando',
    labelFileProcessingComplete: 'Carga completada',
    labelFileProcessingAborted: 'Carga cancelada',
    labelFileProcessingError: 'Error durante carga',
    labelTapToCancel: 'Tap para cancelar',
    labelTapToRetry: 'Tap para reintentar',
    labelTapToUndo: 'Tap para deshacer',
    labelFileSizeNotAvailable: 'Tamaño no reconocido',
    labelFileWaitingForSize: 'Verificando',
    labelInvalidField: 'Archivo no valido',
    server: {
      url: 'http://localhost:3000/',
      process: {
        url: 'upload'
      },
      revert: "delete/",
      load:'load/',
      fetch:'load/'
    },
    fileMetadataObject: {
        'objetotipo' : 'Anuncio'
    }
  });

  import PortafolioCard from '@/components/Freelancer/PortfolioSmallCard.vue';
  import AutocompleteInput from '@/components/Tools/AutocompleteInput.vue';

  import {WERK_OBJECT_QUERY} from '../../graphql/queries/objetoWerkQueries.js';
  import OWMetodos from '../../actions/objetoWerk.js';


  export default {
    name: 'anuncioWerk-new-route',
    mixins: [OWMetodos],
    props: {
      id: {
        type: String,
        default: '0'
      }
    },
    components: {
      PortafolioCard,
      AutocompleteInput,
      FilePond
    },
    data() {
      return {
        myFiles: [{
          //Source poner mi url...
            source: "https://www.google.com/logos/doodles/2018/baba-amtes-104th-birthday-6729609885253632-s.png",
            options:{
                  type: 'remote'
            }
        }],
        area_de_especialidad: '',
        areas_de_especialidad: [],
        limitCharTitle: 30,
        File: {},
        imagenesAnuncio: [],

        AnuncioInfo: {
          id: '',
          titulo: '',
          costo: {
            min: 25000,
            max: 35000
          },
          areas_de_especialidad: ["Fotos de pie completo de Padre", "Fotos de talón de huerfanos", "Fotos de dedos raros de huerfanos"],
          descripcion: "",
          categorizaciones: [
            {
              tipo: "Categoria",
              nombre: "Marketing"
          	},
            {
              tipo: "SubCategoria",
              nombre: "Publicidad"
            }
          ],
          tags: [{
            nombre: "Pies",
            experiencia: 5
          }],
          contacto: {
            telefonos: {
              fijo: "83000000",
              celular: "8110000000"
            },
            redes_sociales: [{
              red: "faWhatsapp",
              url: "url@urlwhatsapp"
            }],
            url: "",
            correo: ""
          },
          werker: {
            id: '6002706a8343ff508c0316d3',
            nombre: {
              nombres: "Puto el que",
              apellidos: "Lolea Utop"
            },
            factura: false,
            ubicacion: {
              pais: "MX",
              estado: "NLE",
              ciudad: "MTY"
            },
          },
          objeto_werk: {
            tipo: 'anuncio',
            esquemas: [1,2,3],
            capacidad: [1,2],
            estatus: {
              tipo: true // AFSS - este debe que ser marcado ya sea en el validador del front o back
            }
          }
        },
        options: {
          categorias: [
            'A1', 'A2'
          ],
          subCategorias: [
            { value: 'A1', text: 'Opcion A1' },
            { value: 'B1', text: 'Opcion B1' },
          ],
          tags: [
            { value: 'T1', text: 'Opcion T1' },
            { value: 'T2', text: 'Opcion T2' },
          ]
        }
      }
    },
    computed: {
      availableCategorias() {
        //return this.options.categorias.filter( opt => this.value.indexOf(opt) === -1 );
      },

    },
    methods: {

      handleFilePondInit(){
        console.log("handleFilePondInit");
        console.log("getgile",this.$refs.refImages.getfile());
        console.log("getgiles",this.$refs.refImages.getfiles());
      },

      /**
       * @function imagenesAnuncioOnProcess Proceso para el guardado de imagenes
       * @param {Object} error Objeto con información del error.
       * @param {Object} file El file que se esta subiendo con información de la imagen.
       */
      imagenesAnuncioOnProcess(error, file) {
        if(error) {
          console.log("error onProcess",error);
          console.log("file in error", file.file);
          return;
        }

        let objetoImagen = {
          nombre_original: file.filename,
          nombre_werk: JSON.parse(file.serverId)[0],
          tamano: file.fileSize + '',
          extension: file.fileExtension,
          posicion: this.imagenesAnuncio.length,
          path: 'Anuncio'
        };
        console.log("ImageUploadOnProcess->objetoImagen:",objetoImagen);
        this.imagenesAnuncio.push(objetoImagen);
        this.objetoWerkImagesNew(objetoImagen, this.AnuncioInfo.id);
      },

      /**
       * @function imagenesAnuncioOnreorder Es el número del lugar donde estaba el arreglo
       * @param {Object} files Objeto producido por filepond
       * @param {Int} origin El lugar donde se encontraba la imagen en el arreglo
       * @param {Int} target El lugar ha donde se pasa dentro del arreglo
       */
      imagenesAnuncioOnreorder(files, origin, target) {

        console.log("ImageOnReorder->{orgin,target}:",orgin,target);

        /*
        Preguntas:
        Guardamos en automatico, o hacemos el update cuando le de save el usuario.
        */
        objetoWerkImagenesPositionUpdate(this.id, origin, target);

      },

      /**
       * @function imagenesAnuncioOnDelete Los Carácteres máximos que tendrá el título
       */
      imagenesAnuncioOnDelete(error,file) {
        console.log("ImageDelete->file:",file);
        if(error) {
          console.log("error onDelete",error);
          console.log("file in error", file.file);
          return;
        }
        let objetoImagen = {
          nombre_original: file.filename,
          nombre_werk: '',
          tamano: file.fileSize + '',
          extension: file.fileExtension,
          posicion: file.origin, //extraer la posicion correcta en base a lo que hay en data.this.AnuncioInfo
          path: 'Anuncio'
        };

        //Mandar a eliminar de la BD solamente.
        console.log("ImageDelete->objetoImagen:",objetoImagen);
        console.log("ImageDelete->AnuncioInfo.id:",this.AnuncioInfo.id);
        this.objetoWerkImagesDelete(objetoImagen, this.AnuncioInfo.id);
      },

      /**
       * @function maxCharTitle Los Carácteres máximos que tendrá el título
       */
      maxCharTitle(event){
        /*El evento keyDown se procesa antes que el navegador lo procese */
        let keycode = event.keyCode;
        if(this.AnuncioInfo.titulo.length > this.limitCharTitle){
          if(keycode < 48 || keycode > 57){
            event.preventDefault();
          }
        }
      },

      /**
       * @function anuncioSaveUpdate Guarda o actualiza un objeto Anuncio
       * @param {Object} params {  }
       */
      anuncioSaveUpdate(){
        let params = {};
        params.input = this.AnuncioInfo;

        if (this.id !== '0') {
          params.id = this.id;
        }

        this.objetoWerkNewUpdate(params);

      },

      /**
       * @function getAnuncioInfo Extrae La información del objeto Anuncio
       * @param {Object} params {  }
       */
      getAnuncioInfo: async(params) => {
        if (params.id_list === '0') {
          console.log("cancelling...");
          return;
        }
        console.log("starting get");
        try {
          const getQueryResult = await this.$apollo.query({
            query: WERK_OBJECT_QUERY,
            variables: {
              params_query: params
            }
          });
          console.log("finish get");
          console.log("getQueryResult", getQueryResult);
          this.AnuncioInfo = getQueryResult;
        } catch (e) {
          throw new Error('Panico...');
        }
      },

      /**
       * @function getDataInputs Extrae el valor de los inputs autocompletes hacia nuestro objeto
       * @param {Object} autocompleteObjValues { inputFor: String, value: String }
       */
      getDataInputs(autocompleteObjValues){
        console.log("getDataInputs",autocompleteObjValues);
        let arr = this.AnuncioInfo.categorizaciones;

        for (var loop = 0; loop < arr.length; loop++) {
          if(arr[loop].tipo == autocompleteObjValues.inputFor){
            this.AnuncioInfo.categorizaciones.[loop].tipo = autocompleteObjValues.inputFor;
            this.AnuncioInfo.categorizaciones.[loop].nombre = autocompleteObjValues.value;
            break;
          }
        }
      },

      /**
       * @function addingTag Añadiendo tag hacía el objeto AnuncioInfo y limpia input
       */
       addingTag({inputAttrs, addTag}){
         addTag(inputAttrs.value);
         this.area_de_especialidad = '';
         this.AnuncioInfo.areas_de_especialidad.push(inputAttrs.value);
       },

       /**
        * @function removingTag Añadiendo tag hacía el objeto AnuncioInfo y limpia input
        */
        removingTag({tag, removeTag}){
          removeTag(tag);
          const indexTag = this.AnuncioInfo.areas_de_especialidad.indexOf(tag);
          if(indexTag > -1){
            this.AnuncioInfo.areas_de_especialidad.splice(indexTag,1);
          }
        },

    },
    async created(){


      let params = {};
      params.id_list = ["600f9fa8015c570ab870f400"]; //this.id;
      console.log("created->params:", params);

      const getQueryResult = await this.$apollo.query({
        query: WERK_OBJECT_QUERY,
        variables: {
          params_query: params
        }
      });
      console.log("created->getQueryResult:", getQueryResult);
      this.AnuncioInfo = getQueryResult.data.qObjetWerkView;
      /* Se da la limpia de la información del id dada */
      this.areas_de_especialidad = this.AnuncioInfo.areas_de_especialidad;
      this.imagenesAnuncio = this.AnuncioInfo.imagenes.map(function(imageInfo){
          return { source: imageInfo.nombre_werk, options: { type: 'remote' }};
      });

      console.log("created->imagenesAnuncio:",this.imagenesAnuncio);
      /*myFiles: [{
          source: "https://www.google.com/logos/doodles/2018/baba-amtes-104th-birthday-6729609885253632-s.png",
          options:{
                type: 'remote'
          }
      }],*/

    },
    beforeRouteLeave(to, from, next) {
      /*const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (this.is_editing) {
        next();
      } else if (answer) {
        next();
      } else {
        next(false);
      }*/
    },
  }
</script>

<style lang="css">

  .pending-list {
    position: relative;
    top: 80px;
    z-index: 1;
    float: left;
    width: 350px;
  }

  .pending-list p {
    text-align: left;
    font-size: 9px;
    font-family: sans-serif;
    margin: 2px 0;
  }
  .anuncio-edit h5{
    margin-left: -17px;
  }

  #anuncioTitulo {
    font-size: 30px;
    font-family: "MadeTommyExtraBold";
    border: none;
  }

  #anuncioTitulo.form-control::-webkit-input-placeholder {
    color: #C8C8C8;
  }

  .anuncio-edit-seccion {
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 1.2rem;
  }

  .informacionGeneral-bandaPrecios {
    width: 45%;
  }

  .informacionGeneral-bandaPrecios label {
    font-family: 'MadeTommyExtraBold';
    font-size: 12px;
  }

  .informacion-general{
    height: auto;
    width: 100%;
  }

  .banda-precios{
    height: auto;
    width: 100%;
  }

  .banda-precios .min-max{
    display: flex;
    justify-content: center;
  }

  .banda-precios .form-group {
    width: 100%;
  }

  .banda-precios .form-group:last-child {
    margin-left: 16px;
  }

  .imagenesProyectos-portafolios{
    height: auto;
    width: 55%;
  }

  .imagenes-proyectos{
    height: auto;
    width: 100%;
  }

  .portafolios{
    height: auto;
    width: 100%;
  }

  .tags-informacionPersonal{
    height: auto;
    width: 45%;
    clear: both;
  }

  .tags{
    height: auto;
  }

  .informacion-personal{
    height: auto;
  }

  .informacion-personal .tw-contactame-titulo {
    font-family: 'MadeTommyExtraBold';
  }

  .informacion-personal p{
    margin-bottom: 0;
    margin-left: 6px;
  }

  .informacion-personal span{
    font-family: 'MadeTommyReg';
    font-size: 12px;
    margin-left: 6px;
  }

  .informacion-personal .tw-redes {
    margin-top: 5px;
  }

  .informacion-personal .tw-redes-box {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #8EE4AF;
    text-align: center;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  .informacion-personal .tw-redes-icons {
    color: white;
    font-size: 18px;
  }

  .informacion-personal .tw-contactame-icons {
    font-size: 19px;
    margin-right: 5px;
  }

  .informacion-personal .tw-contactame-texto {
    font-size: .8em;
    margin-bottom: 0;
  }

  .acciones-anuncio-edit{
    height: 220px;
    width: 55%;
    display: flex;
    align-items: center;
  }

  .acciones-anuncio-edit-body{
    align-self: flex-end;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .acciones-anuncio-edit .btn-borrador {
    font-size: 12px !important;
    width: 185px !important;
    height: 28px !important;
    border: 0px !important;
    background-color: #DBDADA;
    color: #15365f!important;
    font-weight: 600;
  }

  .acciones-anuncio-edit .btn-publicar {
    font-size: 15px !important;
    width: 245px !important;
    height: 33px !important;
    border: 0px !important;
    background-color: #5CDB95;
    color: #15365f!important;
    font-weight: 600;
  }

  .acciones-anuncio-edit .btn-publicar:hover {
      background-color: #8EE4AF !important;
  }

  /*RESPONSIVIDAD*/
  @media only screen and (max-width:992px){
    .informacionGeneral-bandaPrecios{
      width: 100%;
    }

    .imagenesProyectos-portafolios{
      width: 100%;
    }

    .tags-informacionPersonal{
      width: 100%;
    }

    .acciones-anuncio-edit{
      width: 100%;
      height: 120px;
    }
  }


  /*TAGS*/
  .b-form-tags {
      background-color: inherit;
      border: none;
      padding-left: 0;
      padding-right: 0;
  }

  .badge-tags {
    font-size: 0.7em!important;
    line-height: 1em;
    padding: 5px 15px;
    border-radius: 20px;
    color: #379683;
    background-color: #8EE4AF;
  }

  .badge-tags:hover {
    color: #379683;
    background-color: #5CD895;
  }

  .filepond--root {
    font-family: 'MadeTommyReg';
  }

  .filepond--file-action-button {
    cursor: pointer;
  }

</style>
