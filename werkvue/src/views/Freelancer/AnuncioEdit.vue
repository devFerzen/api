<template>
  <b-container align="left" class="anuncio-edit" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">
    <div class="pending-list">
      <b-button v-b-toggle.list class="btn-pending-list">Lista de pendientes</b-button>
      <b-collapse id="list">
        <b-card>
          <p><strong>FRONT-END:</strong></p>
          <p><strong>1. --Inputs:</strong> dar estilos de los inputs, en especial el titulo</p>
          <p><strong>2. --Icono delete:</strong> pendiente estilo y icono.</p>
          <p><strong>3. --Categoría y sub:</strong> hacer el pensamiento de como el usuario visualizará esto ya que puede ser más de uno.</p>
          <p><strong>4. --Reglas de Validación:</strong> pendiente.</p>
          <p><strong>5. --Ajuntar imagen:</strong> crear el input para agregar imagenes y listado de imagenes ya existentes junto con sus acciones.</p>
          <p><strong>6. --Portafolios:</strong> crear la vista de tarjeta edición de los portafolios.</p>
        </b-card>
      </b-collapse>
    </div>

    <div style="clear:both;">
    </div>

    <b-form @submit="onSubmit" @reset="onReset">
      <div class="titulo">
        <b-row no-gutters>
          <b-col cols="7">
            <b-form-group
              id="inputGroupTitulo">
              <b-form-input
                id="anuncioTitulo"
                v-model="anuncio.titulo"
                required
                placeholder="TECLEA EL TÍTULO DE TU ANUNCIO..."
                class="edit-inputs"
              ></b-form-input>
            </b-form-group><!--titulo-->
          </b-col>
          <b-col offset="3" cols="2">
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
            <b-form-input
              id="anuncioSobre"
              v-model="anuncio.sobre"
              required
              placeholder="Teclea aquí"
              class="edit-inputs"
            ></b-form-input>
          </b-form-group><!--sobre-->

          <b-form-group
            id="inputGroupSobre"
            label="SELECCIONA UNA CATEGORIA"
            label-for="anuncioCategoria">
            <b-form-input
              id="anuncioCategoria"
              v-model="anuncio.categoria"
              required
              placeholder="Teclea aquí"
              class="edit-inputs">
              </b-form-input>
          </b-form-group><!--categorias-->

          <b-form-group
            id="inputGroupSobre"
            label="SELECCIONA UNA SUBCATEGORIA"
            label-for="anuncioSubCategoria">
            <b-form-input
              id="anuncioSubCategoria"
              v-model="anuncio.subCategoria"
              required
              placeholder="Teclea aquí"
              class="edit-inputs">
              </b-form-input>
          </b-form-group><!--subcategorias-->


          <b-form-group
            id="inputGroupEspecialdiad"
            label-for="anuncioAreaEspecialidad"
            label="ÁREA DE ESPECIALIDAD">
            <b-form-tags
              v-model="value"
              @input="resetInputValue()"
              tag-variant="success"
              class="mb-2 mt-2"
              :disabled="disabled"
              no-outer-focus
              placeholder="Escribe tu área de especialidad!."
            >
              <template v-slot="{tags, inputId, placeholder, addTag, removeTag }">
                <b-input-group>
                  <!-- Always bind the id to the input so that it can be focused when needed -->
                  <b-form-input
                    v-model="inputAreaEspecialidad"
                    :id="inputId"
                    :placeholder="placeholder"
                    :formatter="formatter"
                    class="edit-inputs">
                    </b-form-input>
                  <b-input-group-append>
                    <b-button @click="addTag(inputAreaEspecialidad)" variant="primary">Add</b-button>
                  </b-input-group-append>
                </b-input-group>
                <b-form-invalid-feedback :state="state">
                  Duplicate tag value cannot be added again!
                </b-form-invalid-feedback>
                <ul v-if="tags.length > 0" class="mb-0">
                  <li v-for="tag in tags" :key="tag" :title="`Tag: ${tag}`" class="mt-2">
                    <span  class="d-flex align-items-center">
                      <span class="mr-2">{{ tag }}</span>
                      <b-button
                        size="sm"
                        variant="outline-danger"
                        @click="removeTag(tag)"
                      >
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
                v-model="anuncio.precioMinimo"
                required
                placeholder="Teclea aquí"
                class="edit-inputs">
              </b-form-input>
            </b-form-group>

            <b-form-group
              id="inputGroupMaximo"
              label="MÁXIMO"
              label-for="anuncioAreaMaximo">
              <b-form-input
                id="anuncioAreaMáximo"
                v-model="anuncio.precioMáximo"
                required
                placeholder="Teclea aquí"
                class="edit-inputs">
              </b-form-input>
            </b-form-group>
          </div>
        </div>
      </div>

      <div class="imagenesProyectos-portafolios float-lg-left">
        <div class="imagenes-proyectos anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">AÑADE TUS IMAGENES DE PROYECTOS</h5>
        </div>

        <div class="portafolios anuncio-edit-seccion">
          <h5 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">ACTIVA TUS PORTAFOLIOS</h5>
          <PortafolioCard></PortafolioCard>
          <PortafolioCard></PortafolioCard>
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
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="phone-alt" class="tw-contactame-icons"/><span>818-181-8181</span></p>
              </b-row>
              <b-row class="ml-0">
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="envelope" class="tw-contactame-icons"/><span>adrina@werkmexico.com</span></p>
              </b-row>
              <b-row class="ml-0">
                <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="globe" class="tw-contactame-icons" style="transform: rotate(22deg);"/><span>www.portafolios.com.mx</span></p>
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
import PortafolioCard from '@/components/Freelancer/PortfolioSmallCard.vue'

export default {
  props: ['id'],
  components: {
    PortafolioCard,
  },
  computed: {
    availableCategorias() {
      return this.options.categorias.filter( opt => this.value.indexOf(opt) === -1 );
    },
  },
  methods: {
    resetInputValue() {
        this.inputAreaEspecialidad = ''
      },
  },
  data() {
    return {
      inputAreaEspecialidad: '',
      inputSearchTag: '',
      selectedSubCategoria: '',
      selectedTag: '',
      anuncio: {
        sobre: '',
        categorias: [
          'A1', 'A2'
        ],
        subCategorias: [],
        areasEspecialidad: ['Gogogogoggog!.'],
        precioMinimo: '',
        precioMáximo: '',
        tags: []
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

  .edit-inputs {
    border-radius: 8px;
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

</style>
