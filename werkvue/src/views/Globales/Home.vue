<template>
  <div class="home">
    <bigSearch></bigSearch>

    <b-container>
      <h1 align="left" style="font-weight:900; color:black; margin-bottom: 22px;">ANUNCIOS POPULARES</h1>
      <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 8px;">
        <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
      </b-row>

      <h1 align="left" style="font-weight:900; color:black; margin-bottom: 22px;">PERFILES POPULARES</h1>
      <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 8px;">
        <carruseles-werk :werk-user="false" :params-query="defaultCarruselPerfil"></carruseles-werk>
      </b-row>
    </b-container>

  </div>
</template>
<style>

  /*
  * Este contenedor 100% tiene algun uso en otra componente?
  .container {
      max-width: 100% !important;
  }*/

  @media only screen and (max-width:576px) {
    .offset-1 {
        margin-left: auto !important;
        margin-right: auto !important;
    }
  }
</style>
<script>

  //error en from '@/ vuejs
  import BigSearch from '../../components/Tools/BigSearch.vue'
  import CarruselesWerk from '../../components/Tools/CarruselesWerk.vue'

  export default {
    name: 'home-route',
    props: {
      needsLoginInicial: Boolean,
    },
    components: {
      BigSearch,
      CarruselesWerk,
    },
    data() {
      return {
        busqueda: this.busquedaInicial,
        needsLogin: this.needsLoginInicial,
        defaultCarruselPerfil: {
          "id_list": [
            "600f9a07144b8d7534e6629b","600f9aeb015c570ab870f3f1","600f9b2b015c570ab870f3f2",
            "600f9b77015c570ab870f3f3","600f9ba2015c570ab870f3f4","600f9c69015c570ab870f3f5",
            "600f9cdd015c570ab870f3f6","600f9d10015c570ab870f3f7"
          ],
          "tipo_objeto": "Freelance"
        },
        defaultCarruselAnuncio: {
          "id_list": [
          "600f9e1c015c570ab870f3f8","600f9ec8015c570ab870f3f9","600f9ef1015c570ab870f3fa",
          "600f9f36015c570ab870f3fb","600f9f4f015c570ab870f3fc","600f9f8c015c570ab870f3fd",
          "600f9f98015c570ab870f3fe","600f9fa4015c570ab870f3ff","600f9fa8015c570ab870f400"
        ],
          "tipo_objeto": "Anuncio"
        }
      }
    }
  }
</script>
