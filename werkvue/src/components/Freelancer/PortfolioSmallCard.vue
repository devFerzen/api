<template>
  <div class="portafolio-card werk-shadow-card mt-4">
    <b-row class="portafolio-card-body" style="padding: 9px;">
      <b-col cols="9" md="8">
        <b-row>
          <b-col cols="12" style="padding-left: 30px;">
            <h5 class="card-title">LOGOS MINIMALISTAS</h5>
          </b-col>
          <b-col cols="12" class="mt-4" style="padding-left: 30px;">
            <b-button pill class="ver-portafolio shadow-none" variant="primary">VER PORTAFOLIO</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" md="4" align-self="baseline">
        <b-img fluid width="140" height="110" class="portafolio-card-img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/109611151/original/a50b46024fc91f3fff823effaa582c3cbb0b9781/design-3-professional-logo-for-you-in-24-hours.jpg" alt="Portfolio-img"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  .portafolio-card {
    background-color: #f8f8f8 !important;
    width: auto;
    border: 1px solid #f1ecec;
    border-radius: 12px;
  }

  .card-title {
  	margin-bottom: 0px;
  }

  .ver-portafolio {
    font-size: 13px !important;
    width: 180px !important;
    height: 30px !important;
    font-family: 'MadeTommyExtraBold'!important;
    border: 0px !important;
    background-color: #7ed89a;
    color: #15365f!important;
  }

  .ver-portafolio:hover {
    background-color: #8EE4AF !important;
  }

  .portafolio-card-img {
  	border-radius: 11px;
  }

</style>
