<template>
  <div id="werker-home">
    <div class="pending-list">
      <b-button v-b-toggle.list class="btn-pending-list">Lista de pendientes</b-button>
      <b-collapse id="list">
        <b-card>
          <p><strong>1.</strong>Falta diseño movil del header.</p>
          <p><strong>2.</strong>En las tarjeta werker en general:</p>
          <p>A) Se indica al componente tarjeta werk que imprima el diseño werker. </p>
          <p>B) Los botones de acción de una tarjeta cambian al editar, compartir, eliminar. </p>
          <p>C) El ícono de likes muestra el total de likes y se agrega las vistas y su total. </p>
          <p>D) Mandar a indicar que agregue la tarjeta de añadir anuncio/portafolio/Vacante. </p>
        </b-card>
      </b-collapse>
    </div>

    <div class="blue-circle-background">
      <b-container fluid="md" class="blue-circle-content">
        <b-row no-gutters>
        </b-row>
      </b-container>
    </div>
    <div v-if="userIs == 'freelance'">
      <b-container fluid="md" align="left" class="portafolio" style="margin-top:140px;">
        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">MIS ANUNCIOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">MIS PORTAFOLIOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">VACANTES DE ACUERDO A MI PERFIL</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">FAVORITOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-container fluid="md" align="left" class="portafolio" style="margin-top:140px;">
        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">MIS VACANTES</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>

        <h1 align="left" style="font-weight:900; color:black; margin-bottom: 28px;">FAVORITOS</h1>
        <b-row align-v="center" style="margin-bottom:57px; margin-bottom: 28px;">
          <carruseles-werk :werk-user="false" :params-query="defaultCarruselAnuncio"></carruseles-werk>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

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

  #werker-home .blue-circle-background {
    background-color: #05386B;
  	position: relative;
  	width: 100%;
  	margin-bottom: 120px;
  }

  #werker-home .blue-circle-background::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url(../../components/Tools/Fondo.svg);
  }

  #werker-home .blue-circle-content {
    height:225px;
  }
  /*
  big circle draw
  width: 152%;
  height: 152%;
  position: absolute;
  left: -26%;
  border-radius: 0% 0% 100% 100%;
  background-color: yellow;
  margin-top: -681px;

  @media only screen and (min-width:576px){
    #werker-home .blue-circle-content{
      height:287px;
    }
  }

  @media only screen and (min-width:992px){
    #werker-home .blue-circle-content{
      height:319px;
    }
  }

  @media only screen and (min-width:1200px){
    #werker-home .blue-circle-content{
      height:397px;
    }
  }
  */
</style>

<script>
import CarruselesWerk from '../../components/Tools/CarruselesWerk.vue'

export default {
  name: 'werker-home-route',
  components: {
    CarruselesWerk
  },
  data() {
    return{
      defaultCarruselAnuncio: {
        "id_list": [
        "600f9e1c015c570ab870f3f8","600f9ec8015c570ab870f3f9","600f9ef1015c570ab870f3fa",
        "600f9f36015c570ab870f3fb","600f9f4f015c570ab870f3fc","600f9f8c015c570ab870f3fd",
        "600f9f98015c570ab870f3fe","600f9fa4015c570ab870f3ff","600f9fa8015c570ab870f400"
      ],
        "tipo_objeto": "Anuncio"
      },
    }
  },
  computed: {
    userIs(){
      return this.$store.state.Autenticacion.user.werker.tipo;
    }
  }
}
</script>
