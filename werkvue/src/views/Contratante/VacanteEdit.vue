<template>
  <b-container align="left" class="vacante-edit" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">
    <b-form>
      <div class="titulo">
        <b-row no-gutters>
          <b-col cols="7">
            <b-form-group
              id="inputGroupTitulo">
              <b-form-input
                id="vacanteTitulo"
                v-model="vacante.titulo"
                required
                placeholder="TECLEA EL TÍTULO DE TU VACANTE..."
                class="edit-inputs werk-shadow-input"
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

        <div class="informacion-general-vacante float-lg-left vacante-edit-seccion">
          <h6 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">INFORMACIÓN GENERAL</h6>
          <b-form-group
            id="inputGroupSobreVacante"
            label="SOBRE TU ANUNCIO"
            label-for="vacanteSobre">
            <b-form-input
              id="vacanteSobre"
              v-model="vacante.descripcion"
              required
              placeholder="Teclea aquí"
              class="edit-inputs werk-shadow-input"
            ></b-form-input>
          </b-form-group><!--sobre-->

          <b-form-group
            id="inputGroupCatVACANTE"
            label="SELECCIONA UNA CATEGORIA"
            label-for="vacanteCategoria">
            <b-form-input
              id="vacanteCategoria"
              v-model="vacante.categoria"
              required
              placeholder="Teclea aquí"
              class="edit-inputs werk-shadow-input">
              </b-form-input>
          </b-form-group><!--categorias-->

          <b-form-group
            id="inputGroupSubCat"
            label="SELECCIONA UNA SUBCATEGORIA"
            label-for="anuncioSubCategoria">
            <b-form-input
              id="anuncioSubCategoria"
              v-model="vacante.subCategoria"
              required
              placeholder="Teclea aquí"
              class="edit-inputs werk-shadow-input">
              </b-form-input>
          </b-form-group><!--subcategorias-->

          <b-form-group
            id="inputGroupSobreVacante"
            label="HABILIDADES REQUERIDAS"
            label-for="vacanteHabilidades">
            <b-form-input
              id="vacanteHabilidades"
              v-model="vacante.habilidades"
              required
              placeholder="Teclea aquí"
              class="edit-inputs werk-shadow-input"
            ></b-form-input>
          </b-form-group><!--habilidadesReq-->

          <b-form-group
            id="inputGroupPrestacionesBeneficios"
            label="PRESTACIONES / BENEFICIOS"
            label-for="vacantePrestacionBeneficio">
            <b-form-input
              id="vacantePrestacionBeneficio"
              v-model="vacante.prestaciones"
              required
              placeholder="Teclea aquí"
              class="edit-inputs werk-shadow-input"
            ></b-form-input>
          </b-form-group><!--prestacionesBeneficios-->
        </div>

        <div class="rangoSalarial-tags float-lg-left vacante-edit-seccion">
          <div class="rango-salarial-vacante">
            <h6 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">RANGO SALARIAL</h6>
            <div class="min-max">
              <b-row no-gutters align-content="between">
                <b-col>
                  <b-form-group
                    id="inputGroupMinimoVacante"
                    label="SUELDO MÍNIMO"
                    label-for="vacanteRangoMin"
                    style="margin-right: 8px;">
                    <b-form-input
                      id="vacanteRangoMin"
                      v-model="vacante.rangoMin"
                      required
                      placeholder="Teclea aquí"
                      class="edit-inputs werk-shadow-input">
                    </b-form-input>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group
                    id="inputGroupMaximoVacante"
                    label="SUELDO MÁXIMO"
                    label-for="vacanteRangoMax"
                    style="margin-left: 8px;">
                    <b-form-input
                      id="vacanteRangoMax"
                      v-model="vacante.rangoMax"
                      required
                      placeholder="Teclea aquí"
                      class="edit-inputs werk-shadow-input">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>

            <div class="vacante-modalidad">
              <b-form-group
                id="inputGroupModalidad"
                label="MODALIDAD DE LA VACANTE"
                label-for="vacanteModalidad">
                <b-form-input
                  id="vacanteModalidad"
                  v-model="vacante.modalidad"
                  required
                  placeholder="Teclea aquí"
                  class="edit-inputs werk-shadow-input"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="vacante-ubicacion mt-2">
              <b-row no-gutters>
                <b-col>
                  <b-form-group
                    id="inputGroupVacanteEstado"
                    label="UBICACIÓN"
                    label-for="vacanteEstado"
                    style="margin-right: 8px;">
                    <b-form-input
                      id="vacanteEstado"
                      v-model="vacante.estado"
                      required
                      placeholder="ESTADO"
                      class="edit-inputs werk-shadow-input"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col align-self="end">
                  <b-form-group
                    id="inputGroupVacanteCiudad"
                    label-for="vacanteCiudad"
                    style="margin-left: 8px;">
                    <b-form-input
                      id="vacanteCiudad"
                      v-model="vacante.ciudad"
                      required
                      placeholder="CIUDAD"
                      class="edit-inputs werk-shadow-input"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </div>
          </div>

          <div class="tags-vacante">
            <h6 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">TAGS</h6>
            <b-form-tags v-model="vacante.tags" no-outer-focus>
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
        </div>

        <div class="informacion-personal-contratante float-lg-left vacante-edit-seccion" style="clear:left;">
          <h6 align="left" class="informacion-personal-contratante-title">INFORMACIÓN PERSONAL</h6>
          <div class="info-personal-contratante-body">
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
        </div><!--informacion-personal-contratante-->

        <div class="acciones-edit-vacante float-lg-left vacante-edit-seccion">
          <div class="acciones-vacante-edit-body">
            <b-button pill class="btn-borrador shadow-none mt-2 mb-1" variant="primary">GUARDAR BORRADOR</b-button>
            <b-button pill class="btn-publicar shadow-none mt-2" variant="primary">GUARDAR Y PUBLICAR</b-button>
          </div>
        </div>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return{
      vacante:{
        titulo: '',
        descripcion: '',
        categorias: [],
        subcategorias: [],
        habilidades: '',
        prestaciones: '',
        rangoMin: '',
        rangoMax: '',
        modalidad: '',
        estado:'',
        ciudad:'',
        tags:['UX/UI', 'PHOTOSHOP']
      }
    }
  },

  watch: {
    //Aquí estará el watch para mandar a cambiar la información del componente
    //ya que no se renderiza el componente ni vuelve a pasar por los hook cycles
    //así que se hablará el wath para checar su url.
    $route(to, from){
      //Reaccionar a los cambios
    }
  }
}
</script>

<style>

  .informacion-general-vacante, .rangoSalarial-tags,
  .informacion-personal-contratante, .acciones-edit-vacante {
    width: 100%;
  }

  .informacion-personal-contratante {
    height: auto;
  }

  .informacion-personal-contratante-title {
    font-weight:900;
    color:black;
    margin-bottom: 8px;
    margin-left: 0;
    text-align: center;
  }

  .info-personal-contratante-body {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  .informacion-personal-contratante .tw-contactame-titulo {
    font-family: 'MadeTommyExtraBold';
  }

  .informacion-personal-contratante p{
    margin-bottom: 0;
    margin-left: 6px;
  }

  .informacion-personal-contratante span{
    font-family: 'MadeTommyReg';
    font-size: 12px;
    margin-left: 6px;
  }

  .informacion-personal-contratante .tw-redes {
    margin-top: 5px;
  }

  .informacion-personal-contratante .tw-redes-box {
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

  .informacion-personal-contratante .tw-redes-icons {
    color: white;
    font-size: 18px;
  }

  .informacion-personal-contratante .tw-contactame-icons {
    font-size: 19px;
    margin-right: 5px;
  }

  .informacion-personal-contratante .tw-contactame-texto {
    font-size: .8em;
    margin-bottom: 0;
  }

  @media only screen and (min-width:992px) {
    .informacion-general-vacante, .rangoSalarial-tags,
    .informacion-personal-contratante, .acciones-edit-vacante {
      width: 50%;
    }

    .info-personal-contratante-body {
      margin-left: 0;
      margin-right: 0;
    }

    .informacion-personal-contratante-title {
        text-align: left;
      }
  }

  .vacante-edit-seccion {
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 1.2rem;
  }

  .acciones-vacante-edit-body{
    align-self: flex-end;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .acciones-vacante-edit-body .btn-borrador {
    font-size: 12px !important;
    width: 185px !important;
    height: 28px !important;
    border: 0px !important;
    background-color: #DBDADA;
    color: #15365f!important;
    font-weight: 600;
  }

  .acciones-vacante-edit-body .btn-publicar {
    font-size: 15px !important;
    width: 245px !important;
    height: 33px !important;
    border: 0px !important;
    background-color: #5CDB95;
    color: #15365f!important;
    font-weight: 600;
  }

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
