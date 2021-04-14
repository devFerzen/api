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

</style>
<script>

  //error en from '@/ vuejs
  import BigSearch from '../../components/Tools/BigSearch.vue'
  import CarruselesWerk from '../../components/Tools/CarruselesWerk.vue'

  import OWMetodos from '../../actions/objetoWerk.js';

  export default {
    name: 'home-route',
    mixins: [OWMetodos],
    props: {
      needsLoginInicial: Boolean,
    },
    components: {
      BigSearch,
      CarruselesWerk,
    },
    data() {
      return {
        errorMutate: "",
        busqueda: this.busquedaInicial,
        needsLogin: this.needsLoginInicial,
        defaultCarruselPerfil: {
          "id_list": [
            "600f9d10015c570ab870f3f7","600f9d10015c570ab870f3f7","600f9d10015c570ab870f3f7","600f9d10015c570ab870f3f7"
          ],
          "tipo_objeto": "Freelance"
        },
        defaultCarruselAnuncio: {
          "id_list": [
          "600f9ef1015c570ab870f3fa",
          "600f9f36015c570ab870f3fb","600f9f4f015c570ab870f3fc","600f9f8c015c570ab870f3fd",
          "600f9f98015c570ab870f3fe","600f9fa4015c570ab870f3ff","600f9fa8015c570ab870f400"
        ],
          "tipo_objeto": "Anuncio"
        }
      }
    }
    ,
  /*  async mounted() {
      //Test actions area
      let Params = {
        "id_list": ["604beaa9fed04b67846da3a5"],
        "tipo_objeto": "Freelance"
      };
      let action = "like";
      const answer = await this.objetoWerkLikeAction(Params, action);
    }*/

  }
</script>
