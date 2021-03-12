<template>
  <b-container fluid="md" align="left" class="anuncio" style="margin-bottom:20px;">
    <b-row cols="2">
      <b-col cols="8" md="12">
      </b-col>

      <b-col cols="4" md="3" offset-md="3" order-md="3" align-self="baseline" class="mt-0 mt-md-5" style="display: flex; justify-content: flex-end;">
        <like-star-share></like-star-share>
      </b-col>

      <b-col cols="12" md="6" class="mt-5">
        <h1 class="anuncio-title">{{objetoWerkData.titulo}}</h1>
      </b-col>
    </b-row> <!--title-and-like-component-->

    <b-row style="margin-bottom: 50px;">
      <b-col cols="12" md="6" class="mx-auto pl-0">
        <div class="anuncio-sobre mt-4">
          <h5 class="mb-4">SOBRE EL PROYECTO</h5>
          <p class="mb-4"> {{objetoWerkData.descripcion}} </p>
        </div>

        <div class="anuncio-especialidades-mv mt-4" v-if="objetoWerkData.areas_de_especialidad">
          <h5 class="mb-4">ÁREAS DE ESPECIALIDAD</h5>
          <p class="mb-0" v-for=" (area, index) in objetoWerkData.areas_de_especialidad" :key="index">- {{area}}. </p>
        </div>

        <div class="anuncio-banda-costo-mv  mt-4">
          <h5>BANDA DE COSTOS</h5>
          <div class="base-band werk-header-shadow">
            <div class="highlight-band">
            </div>
            <div class="min-base-band base-band-price">
              {{minBand}}<sup>00</sup>
            </div>
            <div class="max-base-band base-band-price">
              {{maxBand}}<sup>00</sup>
            </div>
            <div class="min-highlight-band highlight-band-price">
              {{objetoWerkData.costo.min}}<sup>00</sup>
            </div>
            <div class="max-highlight-band highlight-band-price">
              {{objetoWerkData.costo.max}}<sup>00</sup>
            </div>
          </div>
        </div>

        <div class="anuncio-tags-mv mt-4">
          <h5 class="mb-4">TAGS</h5>
          <b-badge class="werk-tags" v-for="(tag, index) in objetoWerkData.tags" :key="index">
            {{tag.nombre}}
          </b-badge>
        </div>

        <div class="anuncio-card-mv mt-4">
          <h5 class="mb-4">SOBRE EL werk..er</h5>
          <div class="tarjeta-werk mt-4 werk-shadow-card">
            <b-row class="tarjeta-werk-body" no-gutters>
              <b-col md="10" lg="7">
                <div class="tw-nombre-werker">
                  <b-row no-gutters>
                    <b-col sm="4" xl="3">
                      <b-img fluid width="65px" height="65px" block class="tw-image-werker" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/109611151/original/a50b46024fc91f3fff823effaa582c3cbb0b9781/design-3-professional-logo-for-you-in-24-hours.jpg" alt="Portfolio-img"></b-img>
                    </b-col>

                    <b-col class="tw-nombres-werker">
                      <p>{{objetoWerkData.werker.nombre.nombres}}</p>
                      <p>{{objetoWerkData.werker.nombre.apellidos}}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col md="12" lg="5">
                <div class="tarjeta-werk-social">
                  <like-star-share></like-star-share>
                </div>
              </b-col>
              <b-col lg="12" xl="6">
                <div class="tw-info-werker">
                  <b-row>
                    <b-col cols="6">
                      <b class="w-100 tw-sub-title">País</b>
                      <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.pais}}</p>
                    </b-col>

                    <b-col>
                      <b class="w-100 tw-sub-title">Estado</b>
                      <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.estado}}</p>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col cols="6">
                      <b class="w-100 tw-sub-title">Genera factura</b>
                      <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.factura = true ? 'Sí':'No'}}</p>
                    </b-col>

                  </b-row>

                  <b-row align-h="center">
                    <b-button pill class="ver-perfil shadow-none" variant="primary">VER PERFIL</b-button>
                  </b-row>
                </div>
              </b-col>
              <b-col lg="12" xl="6">
                <b-row class="ml-0 mr-0">
                  <b-col cols="12" class="tw-contactame-card werk-shadow-card">
                    <b-row class="ml-0">
                      <p class="w-100 tw-contactame-titulo">CONTÁCTAME</p>
                    </b-row>
                    <b-row class="ml-0">
                      <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="phone-alt" class="tw-contactame-icons"/><span>{{objetoWerkData.contacto.telefonos.fijo}}</span></p>
                    </b-row>
                    <b-row class="ml-0">
                      <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="envelope" class="tw-contactame-icons"/><span>{{objetoWerkData.contacto.correo}}</span></p>
                    </b-row>
                    <b-row class="ml-0">
                      <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="globe" class="tw-contactame-icons" style="transform: rotate(22deg);"/><span>{{objetoWerkData.contacto.telefonos.fijo}}</span></p>
                    </b-row>
                    <b-row no-gutters class="tw-row-redes" align-h="center">
                      <b-col v-for="(redSocial, index) in objetoWerkData.contacto.redes_sociales" :key="index">
                          <div class="tw-redes-box">
                            <font-awesome-icon :icon="['fab', redSocial.red]" class="tw-redes-icons" />
                          </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row><!--tw-contactame-card-->
              </b-col>
            </b-row>
          </div>

        </div>
      </b-col>

      <b-col cols="12" md="6" class="mx-auto pr-0">
        <div class="carrusel mt-4" style="width:auto">
            <b-carousel
              id="anuncioCarrusel"
              class="werk-smart-outline"
              v-model="slide" :interval="4000"
              controls indicators fade background="#ababab"
              no-touch = "true"
              img-width="1024" img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024" height="480"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/dbf97f33b86612a917fdd960d945bd95-1591613231/A%2079761%20JPL%20(12)/design-vintage-retro-logo-in-24-hours.jpg"
                    alt="image slot">
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024" height="480"
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/5b9833a6d8e84542afd5848c7e0adf5e-1593068164/1_/design-vintage-retro-logo-in-24-hours.jpg" alt="image slot">
                </template>
              </b-carousel-slide>
            </b-carousel>
        </div>

        <div class="portafolios mt-4">
          <div class="anuncio-portafolios-dv">
            <h5 class="mb-4">PORTAFOLIOS</h5>
            <PortafolioCard></PortafolioCard>
            <PortafolioCard></PortafolioCard>
            <PortafolioCard></PortafolioCard>
          </div>
        </div>
      </b-col> <!--carrusel-portafolios-->

      <b-col  cols="12" md="6" class="anuncio-banda-costo-dv">
        <h5>BANDA DE COSTOS</h5>
        <div class="base-band werk-header-shadow">
          <div class="highlight-band">
          </div>
          <div class="min-base-band base-band-price">
            {{minBand}}<sup>00</sup>
          </div>
          <div class="max-base-band base-band-price">
            {{maxBand}}<sup>00</sup>
          </div>
          <div class="min-highlight-band highlight-band-price">
            {{objetoWerkData.costo.min}}<sup>00</sup>
          </div>
          <div class="max-highlight-band highlight-band-price">
            {{objetoWerkData.costo.max}}<sup>00</sup>
          </div>
        </div>
      </b-col>

      <b-col  cols="12" md="6" class="anuncio-portafolios-mv mt-4" >
        <h5 class="mb-4">PORTAFOLIOS</h5>
        <PortafolioCard></PortafolioCard>
        <PortafolioCard></PortafolioCard>
        <PortafolioCard></PortafolioCard>
      </b-col>

      <b-col  cols="12" class="anuncio-tags-dv mt-4">
        <h5 class="mb-4">TAGS</h5>
        <b-badge class="werk-tags" v-for="(tag, index) in objetoWerkData.tags" :key="index">
          {{tag.nombre}}
        </b-badge>
      </b-col>

      <b-col cols="12" class="anuncio-card-dv mt-4">
        <h5 class="mb-4">SOBRE EL werke..er</h5>
        <div class="tarjeta-werk mt-4 werk-shadow-card">
          <b-row class="tarjeta-werk-body" no-gutters>
            <b-col cols="6">
              <div class="tw-nombre-werker">
                <b-row no-gutters>
                  <b-col cols="4">
                    <b-img fluid width="65px" height="65px" block class="tw-image-werker" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/109611151/original/a50b46024fc91f3fff823effaa582c3cbb0b9781/design-3-professional-logo-for-you-in-24-hours.jpg" alt="Portfolio-img"></b-img>
                  </b-col>
                  <b-col class="tw-nombres-werker">
                    <p>{{objetoWerkData.werker.nombre.nombres}}</p>
                    <p>{{objetoWerkData.werker.nombre.apellidos}}</p>
                  </b-col>
                </b-row>
              </div>
              <div class="tw-info-werker">
                <b-row>
                  <b-col cols="6">
                    <b class="w-100 tw-sub-title">País</b>
                    <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.pais}}</p>
                  </b-col>

                  <b-col>
                    <b class="w-100 tw-sub-title">Estado</b>
                    <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.estado}}</p>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="6">
                    <b class="w-100 tw-sub-title">Genera factura</b>
                    <p class="w-100 tw-p-content">{{objetoWerkData.werker.ubicacion.factura = true ? 'Sí':'No'}}</p>
                  </b-col>

                </b-row>

                <b-row align-h="center">
                  <b-button pill class="ver-perfil shadow-none" variant="primary">VER PERFIL</b-button>
                </b-row>
              </div>
            </b-col>

            <b-col cols="6">
              <b-row align-h="center">
                <b-col cols="4">
                  <like-star-share></like-star-share>
                </b-col>
              </b-row><!--like-star-share-->

              <b-row class="ml-0 mr-0">
                <b-col cols="12" class="tw-contactame-card werk-shadow-card">
                  <b-row class="ml-0">
                    <p class="w-100 tw-contactame-titulo">CONTÁCTAME</p>
                  </b-row>
                  <b-row class="ml-0">
                    <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="phone-alt" class="tw-contactame-icons"/><span>{{objetoWerkData.contacto.telefonos.fijo}}</span></p>
                  </b-row>
                  <b-row class="ml-0">
                    <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="envelope" class="tw-contactame-icons"/><span>{{objetoWerkData.contacto.correo}}</span></p>
                  </b-row>
                  <b-row class="ml-0">
                    <p class="w-100 tw-contactame-titulo"><font-awesome-icon icon="globe" class="tw-contactame-icons" style="transform: rotate(22deg);"/><span>{{objetoWerkData.contacto.url}}</span></p>
                  </b-row>
                  <b-row no-gutters align-h="center" class="tw-redes">
                    <b-col v-for="(redSocial, index) in objetoWerkData.contacto.redes_sociales" :key="index">
                        <div class="tw-redes-box">
                          <font-awesome-icon :icon="['fab', redSocial.red]" class="tw-redes-icons" />
                        </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row><!--tw-contactame-card-->
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>

  /*Responsividad de tarjetas con em a ems*/
  .anuncio {
    margin-top: 60px;
  }

  @media only screen and (max-width:767px) {

    .anuncio-banda-costo-mv, .anuncio-tags-mv,
    .anuncio-card-mv, .anuncio-portafolios-dv{
      display: none!important;
    }

    .anuncio-banda-costo-dv, .anuncio-tags-dv,
    .anuncio-card-dv, .anuncio-portafolios-mv {
      display: block!important;
    }

  }

  .anuncio-banda-costo-mv, .anuncio-tags-mv,
  .anuncio-card-mv, .anuncio-portafolios-dv {
    display: block;
  }

  .anuncio-banda-costo-dv, .anuncio-tags-dv,
  .anuncio-card-dv, .anuncio-portafolios-mv  {
    display: none;
  }

  .anuncio-mf-view{
    width: 100%;
  }

  .base-band{
    position: relative;
    border-radius: 10px;
    height: 23px;
    width: 90%;
    justify-content: center;
    background-color: #e0e0e0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 63px;
    margin-bottom: 63px;
  }

  .base-band-price {
    height: inherit;
    border-radius: 10px;
    position: absolute;
    color: #c9c9c9;
  }

  .min-base-band {
    left: 0;
    top: -139%;
  }

  .max-base-band {
    right: 0;
    top: -139%;
  }

  .highlight-band {
    height: inherit;
    width: 60%;
    border-radius: 10px;
    background-color: #8ee4af;
    position: absolute;
    left: 50%;
    transform: translate(-60%);
  }

  .highlight-band-price{
    height: inherit;
    border-radius: 10px;
    position: absolute;
  }

  .min-highlight-band{
    left: 10%;
    bottom: -139%;
  }

  .max-highlight-band{
    right: 21%;
    bottom: -139%;
  }

  @media only screen and (min-width:767px) {
    .anuncio-mf-view{
      width: 50%;
    }
  }

  h1, h5 {
    color: #000 !important;
    font-weight: 900 !important;
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

  @media only screen and (max-width:776px) {
    .anuncio {
      padding-left: 30px;
      padding-right: 30px;
    }
  }


  @media only screen and (min-width:992px) and (max-width:1250px) {
    .anuncio {
      padding: 40px 40px 0 40px;
    }
  }

  .badge.werk-tags {
    font-size: 14px;
    line-height: 16px;
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


  #anuncioCarrusel {
    margin: 0px 0px 30px 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    border-radius: 7px;
  }

  #anuncioCarrusel .carousel-indicators{
    text-shadow: none!important;

  }

  #anuncioCarrusel .carousel-indicators li {
    background-color: #a7a7a7;
    margin: 0 5px 0 5px;
    border-radius: 5px;
    width: 9px;
    height: 9px;
    border-top: 0!important;
    border-bottom: 0!important;
    outline: none;
    box-shadow: none;
  }

  #anuncioCarrusel .carousel-indicators .active {
      background-color: #7ed89a;
  }

  #anuncioCarrusel .carousel-control-prev,
  #anuncioCarrusel .carousel-control-next {
    width: 3em;
    height: 3em;
    top: 40%;
    border-radius: 7px;
    background-color: #ccc;
    opacity: 0.89!important;
  }

  #anuncioCarrusel .carousel-control-prev:hover,
  #anuncioCarrusel .carousel-control-next:hover {
    width: 3.2em;
    height: 3.2em;
    opacity: 1!important;
  }

  #anuncioCarrusel .carousel-control-prev{
    left: -23px;
  }

  #anuncioCarrusel .carousel-control-next {
    right: -23px;
  }


  @media only screen and (min-width:1440px) {
    .content {
      padding-left: 160px;
      padding-right: 160px;
    }
  }

  .tarjeta-werk {
    border-radius: 12px;
    border: 1px solid #f1ecec;
    width: inherit;
    max-width: 510px;
    margin-left: auto;
    margin-right: auto;
  }

  .tarjeta-werk-body {
    padding: 19px;
  }

  @media only screen and (max-width:992px) {
    .tarjeta-werk-social {
      margin-left: 78px;
      margin-top: 15px;
    }
  }

  .tw-image-werker {
    border-radius: 10px;
  }

  .tw-nombres-werker p {
    margin-bottom: 0;
    font-family: 'MadeTommyExtraBold';
    font-size: 19px;
    line-height: 19px;
  }

  .tw-name-werker {
    margin-bottom: 0;
    font-family: 'MadeTommyExtraBold';
    font-size: 1.30em;
    line-height: 1.50rem;
  }

  .tw-info-werker{
    margin-top: 15px;
  }

  .tw-sub-title {
    font-family: 'MadeTommyExtraBold';
    margin-bottom: 0;
    font-size: 14px;
  }

  .tw-p-content {
    font-size: 13px;
    margin-bottom: 9px;
  }

  .tw-contactame-card {
    padding: 8px 12px;
    border: 1px solid #f1ecec;
    border-radius: 10px;
    margin-top: 15px;
    max-width: 266px!important;
    margin-left: auto;
    margin-right: auto;
  }

  .tw-contactame-card p{
    margin-bottom: 0;
    margin-left: 6px;
  }

  .tw-contactame-card span{
    font-family: 'MadeTommyReg';
    font-size: 12px;
  }

  .tw-contactame-titulo {
    font-family: 'MadeTommyExtraBold';
  }

  .tw-redes {
    margin-top: 5px;
  }

  .tw-row-redes {
    width: auto;
    max-width: 260px;
  }

  .tw-redes-box {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #8EE4AF;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    cursor: pointer;
  }

  .tw-redes-icons {
    color: white;
    font-size: 18px;
    vertical-align: bottom;
  }

  .tw-contactame-icons {
    font-size: 19px;
    margin-right: 5px;
  }

  .tw-contactame-texto{
    font-size: .8em;
    margin-bottom: 0;
  }

  .ver-perfil {
    font-size: 13px !important;
    width: 180px !important;
    height: 30px !important;
    font-family: 'MadeTommyExtraBold'!important;
    border: 0px !important;
    background-color: #7ed89a;
    color: #15365f!important;
  }

  .ver-perfil:hover {
    background-color: #8EE4AF !important;
  }
</style>

<script>
import PortafolioCard from '@/components/Freelancer/PortfolioSmallCard.vue'
import likeStarShare from '@/components/Tools/likeStarShare.vue'

import { WERK_OBJECT_QUERY } from '../../graphql/queries/objetoWerkQueries.js';

export default {
  name: 'anuncioWerk-route',
  components: {
    PortafolioCard,
    likeStarShare
  },
  props:{
    id: String
  },
  data() {
    return {
      anuncioTags: ['INSPECTOR', '8008', 'UX/UI'],
      objetoWerkData: '',
      minBand: 0,
      maxBand: 0,
      anuncioId: {
        id_list: [this.id]
      },
    }
  },
  async created(){
    let params_query = this.anuncioId;
    console.log("Id to search >>>",params_query);

    const objetoWerkDataResult = await this.$apollo.query(
      {
        query: WERK_OBJECT_QUERY,
        variables: {
          params_query
        }
      }
    );

    console.dir(objetoWerkDataResult.data.qObjetWerkView);
    this.objetoWerkData = objetoWerkDataResult.data.qObjetWerkView;
    this.minBand = this.objetoWerkData.costo.min - 650;
    this.maxBand = this.objetoWerkData.costo.max + 3000;
  },
  mounted(){

  },
  watch: {
    //Aquí estará el watch para mandar a cambiar la información del componente
    //ya que no se renderiza el componente ni vuelve a pasar por los hook cycles
    //así que se hablará el wathcher para checar su url.
    $route(to, from){
      //Reaccionar a los cambios
    }
  },
}
</script>
