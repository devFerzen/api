<template>
  <div id="freelance">
    <div class="pending-list">
      <b-button v-b-toggle.list class="btn-pending-list">Lista de pendientes</b-button>
      <b-collapse id="list">
        <b-card>
          <p><strong>1.</strong> Falta diseño movil del header.</p>
          <p><strong>2.</strong> Componente carrusel renderice diferentes componentes de werk.</p>
        </b-card>
      </b-collapse>
    </div>
    <div class="blue-circle-background">
      <b-container fluid="md" class="blue-circle-content">
        <b-row no-gutters>

        </b-row>
      </b-container>
    </div>
    <div>
      <b-container fluid="md" align="left" class="portafolio" style="margin-top:60px;">
        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">ANUNCIOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">PORTAFOLIOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">PERFILES SIMILARES</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselPerfil"></carruseles-werk>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import CarruselesWerk from '../../components/Tools/CarruselesWerk.vue';

export default {
  components: {
    CarruselesWerk
  },
  data(){
    return {
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
  },
  watch: {
    //Aquí estará el watch para mandar a cambiar la información del componente
    //ya que no se renderiza el componente ni vuelve a pasar por los hook cycles
    //así que se hablará el wath para checar su url.
    $route(to, from){
      //Reaccionar a los cambios
      // si no funciona este usar beforeRouteUpdate
    }
  }
}
</script>

<style>

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

  .blue-circle-background {
    background-color: #05386B;
    position: relative;
    width: 100%;
    min-width: 800px;
    margin-bottom: 120px;
  }

  .blue-circle-background::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url(../../assets/Fondo.svg);
  }

  .blue-circle-content {
    height:225px;
  }
</style>
