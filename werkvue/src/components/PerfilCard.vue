<template>
<div>

  <b-card no-body tag="article" class="objeto-werk-card" id="werk-card-perfil">
    <div class="blue-circle-background">
      <div class="clearfix">
        <div class="card-user-img">
          <b-avatar src="https://placekitten.com/300/300" size="3.5rem" style="margin: 7px 7px 0 7px;"></b-avatar>
        </div>
        <div class="card-username">
          <h2 class="card-title">Alfonso Dario Gonzalez Montemayor</h2>
        </div>
      </div>
    </div>

    <b-card-body style="padding-top: 19px!important;">
      <div class="card-icons" align="right">
        <font-awesome-icon icon="star" class="mr-2"/>
        <font-awesome-icon icon="share" />
      </div>

      <b-card-text align="left">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
        <br>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
        Ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
      </b-card-text>

      <div class="objeto-werk-card-footer">
        <b-row align-h="between" align-v="end" class="m-0" style="position:relative;">
          <b-col class="p-0">
            <b-row class="m-0 mb-1">
              <h3 class="card-price">DESDE $210 <sup>.00</sup></h3>
            </b-row>
            <b-row class="m-0">
              <b-col style="display:contents;" class="like-icon">
                <font-awesome-icon icon="thumbs-up" />
                <p class="card-likes">+ 230</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="pr-0" align="right" align-self="stretch">
            <b-button pill href="#" class="action-read" variant="primary">VER MÁS</b-button>
          </b-col>
        </b-row>
      </div>
    </b-card-body>
  </b-card>
</div>
</template>

<script>
export default {
	props: []
}
</script>

<style>

/* Imagen de perfil */

  #werk-card-perfil.objeto-werk-card .card-text {
    height: 11.7em;
    margin-top: 1em;
  }

  #werk-card-perfil.objeto-werk-card .card-user-img {
    float: left;
    margin-right: 5px;
  }

  #werk-card-perfil.objeto-werk-card .card-username  {
    text-align: left;
    width: inherit;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  #werk-card-perfil .blue-circle-background {
    background-color: #05386B;
    position: relative;
    width: 100%;
    height: 71px;
    border-radius: 11px 11px 0 0;
  }

  #werk-card-perfil .blue-circle-background::after {
    content: "";
    position: absolute;
    width: inherit;
    left: 0;
    top: 70px;
    height: 25px;
    background-repeat: no-repeat;
    z-index: 0;
    background-image: url(./Fondo.svg);
  }

</style>
