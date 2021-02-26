<template>
  <div class="documento-card werk-shadow-card mt-4">
    <b-row class="documento-card-body" style="padding: 9px;" no-gutters>
      <b-col cols="2" align-self="baseline">
        <b-img width="85" height="85" class="documento-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSExRGnO_z2TnM6KomhUMSE6auWvcOVvXGOw&usqp=CAU" alt="Portfolio-img"></b-img>
      </b-col>

      <b-col cols="8">
        <h5 class="card-title">LOGOS MINIMALISTAS</h5>
        <p>Certificación XXI - 2016</p>
        <p>Creación de diseños validados por la USNG</p>
      </b-col>

      <b-col cols="2" align-self="baseline">
        <b-button pill class="ver-documento shadow-none" variant="primary">VER</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  .documento-card {
    background-color: #f8f8f8 !important;
    width: 520px;
    border: 1px solid #f1ecec;
    border-radius: 12px;
    display: block;
    margin-left:auto;
    margin-right: auto;
  }

  @media only screen and (min-width:992px){
    .documento-card {
      margin: 0;
    }
  }

  @media only screen and (min-width:1200px){
    .documento-card {
      width: 560px;
    }
  }

  .documento-card-body p {
    margin-bottom: 0;
    font-size: 12px;
  }

  .documento-card-img {
    border-radius: 11px;
  }

  .card-title {
  	margin-bottom: 0px;
  }

  .ver-documento {
    font-size: 13px !important;
    width: 85px !important;
    height: 30px !important;
    font-family: 'MadeTommyExtraBold'!important;
    border: 0px !important;
    background-color: #5cdb95;
    color: #15365f!important;
  }

  .ver-documento:hover {
    background-color: #8EE4AF !important;
  }



</style>
