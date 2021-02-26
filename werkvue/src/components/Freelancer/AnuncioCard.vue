<template>
  <div>
    <b-card no-body tag="article" class="objeto-werk-card" id="werk-card">
      <b-card-body>
        <hooper :settings="insideHooperSettings">

          <slide>
            <b-img-lazy block fluid class="object-images"
            src="https://th.bing.com/th/id/OIP.-sTUQ7Jb7KUpdQf4GcAftAHaFj?w=274&h=205&c=7&o=5&pid=1.7" />
          </slide>

          <slide>
            <b-img-lazy block fluid class="object-images"
            src="https://th.bing.com/th/id/OIP.dmPvnOt-L2Uq3N9gZaZbmQHaFj?w=220&h=180&c=7&o=5&pid=1.7" />
          </slide>

          <slide>
            <b-img-lazy block fluid class="object-images"
            src="https://th.bing.com/th/id/OIP.0XkCRqzOZOq4KB6aoyEM6wAAAA?w=182&h=262&c=7&o=5&pid=1.7" />
          </slide>

          <slide>
            <b-img-lazy block fluid class="object-images"
            src="https://th.bing.com/th/id/OIP.it6bJ7Ju_ljHjPkxYMYm5wHaF7?w=210&h=180&c=7&o=5&pid=1.7" />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>

        <div class="card-icons" align="right">
          <font-awesome-icon icon="star" class="mr-2"/>
          <font-awesome-icon icon="share" />
        </div>
        <h2 class="card-title" align="left">Titulo Largo ABC-XYZ de la A1234</h2>

        <b-card-text align="left" class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo elementum enim, id efficitur felis tincidunt sed. Ut eget commodo justo, eu aliquet ligula. Duis placerat ac tellus a tincidunt. Praesent eu tempus arcu, vitae sollicitudin eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec malesuada nulla nec nibh pretium tempus. Pellentesque luctus lectus quis metus maximus ullamcorper.
        </b-card-text>

        <div class="objeto-werk-card-footer">
          <b-row align-h="between" align-v="end" class="m-0" style="position:relative;">
            <b-col class="p-0">
              <b-row class="m-0">
                <h3 class="card-price">DESDE $210 <sup>00</sup></h3>
              </b-row>
              <b-row class="m-0">
                <b-col style="display:contents;" class="like-icon">
                  <font-awesome-icon icon="thumbs-up" />
                  <p class="card-likes">+ 230</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="pr-0" align="right" align-self="stretch">
              <b-button pill href="#" class="action-read" variant="primary" :to="{name:'anuncioWerk-route'}">VER MÁS</b-button>
            </b-col>
          </b-row>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
<style>

  /* **pendiente el acomodar
     un css para que las tarjetas werk que sean del
     mismo estilo y medidas y lo consuman de ahí
  */

    #werk-card {
      font-size: 16px;
    }

    #werk-card .card-body{
      padding: .88em!important;
    }

  /* Anuncio Card config */
    #werk-card.objeto-werk-card {
      border-radius: 11px !important;
      border:  none!important;
      min-width: 16em;
      width: 16em;
      background-color: #f5f5f5 !important;
      -webkit-box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                  -.375em -.375em .75em 0 rgba(255, 255, 255, .69);
      -moz-box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                  -.375em -.375em .75em 0 rgba(255, 255, 255, .69);
      box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                  -.375em -.375em .75em 0 rgba(255, 255, 255, .69);/*.5em .5em .75em 0 rgba(16, 15, 15, 0.16);*/
    }

    #werk-card.objeto-werk-card .object-images {
      width: 100%;
      height: 8em;
      border: 3px solid transparent;
      border-radius: 10px !important;
      object-fit:  cover;
    }

    #werk-card.objeto-werk-card .card-icons {
      color: #dbdada;
      font-size: 1.3em;
    }

    #werk-card.objeto-werk-card .card-title {
      font-size: 1.125em;
      font-weight: 800;
      height: 2em;
      text-transform: uppercase;
      line-height: 1em;
      margin: 0;
      padding-bottom: 2px;
    }

    #werk-card.objeto-werk-card .card-text {
      font-size: .812em; /*13px*/
      line-height: 1.08em;
      margin-top: 1.76em;
      margin-bottom: 1.23em;
      height: 4.3em;
      overflow: hidden;
      padding-bottom: 2px;
    }

    #werk-card .objeto-werk-card-footer {
      margin: 0 auto;
    }

    #werk-card .card-price {
      font-size: .88em; /*14px*/
      color: #05386B;
      position: relative;
      text-align: left;
      font-weight: 900;
      padding-bottom: 2px;
    }

    #werk-card .card-price sup {
      position: absolute;
      top: .65em;
      font-size: 65%;
    }

    #werk-card .like-icon {
      color: #dbdada;
      font-size: 1.37em; /*22px*/
    }

    #werk-card .card-likes {
        font-size: .65em; /*13px*/
        line-height: 1em;
        margin: 0 .3em;
        position: absolute;
        bottom: .25em;
        left: 1.5em;
        font-weight: 500;
    }

    #werk-card .action-read {
      font-size: .68em; /*11px*/
      width: 9em!important;
      height: 2.36!important;
      font-weight: 900 !important;
      font-family: 'MadeTommyExtraBold';
      background-color: #5CD895 !important;
      color: #05386B !important;
      border: 0px solid transparent;
      border-radius: 28px!important;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    #werk-card .action-read:hover {
      background-color: #8EE4AF!important;
    }

    /* Hooper css */
      #werk-card .hooper {
        min-height: 8em!important;
        height: 8em!important;
      }

      #werk-card .hooper-slide {
        margin: 0;
        text-align: -webkit-center;
        width: 100%;
      }

    /* Botones Hooper imagen interna config */
      #werk-card .hooper-indicator {
        background-color: #a7a7a7;
        margin: 0 5px 0 5px;
        border-radius: 5px;
        width: 9px;
        height: 9px;
      }

      #werk-card .hooper-indicator:hover, #werk-card .hooper-indicator.is-active {
        background-color: black;
      }

      #werk-card button.hooper-indicator:active, #werk-card button.hooper-indicator:focus
      {
        outline: none;
      }
</style>

<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css';

export default {
  components : {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  data() {
    return {
      insideHooperSettings: {
        wheelControl: false,
        mouseDrag: false,
      }
    }
  }
}
</script>
