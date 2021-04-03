<template>
  <div v-if="objetoWerk.objeto_werk.tipo == 'Anuncio'">
    <b-card no-body tag="article" class="objeto-werk-card" id="werk-card-anuncio">
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

        <h2 class="card-title" align="left">{{objetoWerk.titulo}}</h2>

        <b-card-text align="left" class="card-text">
          {{objetoWerk.descripcion}}
        </b-card-text>

        <div class="objeto-werk-card-footer">
          <b-row align-h="between" align-v="end" class="m-0" style="position:relative;">
            <b-col class="p-0" cols="8">
              <b-row class="m-0">
                <h3 class="card-price">DESDE $ {{objetoWerk.costo.min}} <sup> 00</sup></h3>
              </b-row>
              <b-row class="m-0" no-gutters>
                <b-col style="display:contents;" class="total-icon" v-if="werkUser">
                  <font-awesome-icon icon="thumbs-up" style="vertical-align: -3px!important;"/>
                  <span class="total-icon-span">+ {{objetoWerk.objeto_werk.likes}}</span>
                  <font-awesome-icon icon="eye" style="vertical-align: -4px!important;"/>
                  <span class="total-icon-span">+ {{objetoWerk.objeto_werk.vistas}}</span>
                </b-col>
                <b-col style="display:contents;" class="like-icon" v-else>
                  <font-awesome-icon icon="thumbs-up" />
                  <p class="card-likes">+ {{objetoWerk.objeto_werk.likes}}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="pr-0 pl-0" align="right" align-self="stretch">
              <b-button pill href="#" class="action-read" variant="primary" :to="{name:'anuncioWerk-route', params: { id: objetoWerk.id }}">VER MÁS</b-button>
            </b-col>
          </b-row>
        </div>
      </b-card-body>
    </b-card>
  </div>
  <!--Vista Tarjeta..Werk Anuncio-->
  <div v-else-if="objetoWerk.objeto_werk.tipo == 'Freelance'">
    <b-card no-body tag="article" class="objeto-werk-card" id="werk-card-perfil">

      <b-card-body>
        <b-img fluid class="object-images"
        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/23197467/original/7fe4f022a60d8c54335a09d1ed3ad86b86df63f6/design-an-impressive-logo.jpg"></b-img>

        <div class="card-icons" align="right" v-if="werkUser">
          <font-awesome-icon icon="pencil-alt" class="mr-2"/>
          <font-awesome-icon icon="share" class="mr-2"/>
          <font-awesome-icon icon="trash-alt" />
        </div>
        <div class="card-icons" align="right" v-else>
          <font-awesome-icon icon="star" class="mr-2"/>
          <font-awesome-icon icon="share" />
        </div>

        <div class="clearfix">
          <div class="card-user-img">
            <b-avatar src="https://placekitten.com/300/300" size="3.5rem" style="margin: 7px 7px 0 7px;"></b-avatar>
          </div>
          <div class="card-username">
            <h2 class="card-title">{{objetoWerk.informacion_personal.nombre.nombres}} {{objetoWerk.informacion_personal.nombre.apellidos}}</h2>
          </div>
        </div>

        <b-card-text align="left">
          {{objetoWerk.descripcion}}
        </b-card-text>

        <div class="objeto-werk-card-footer">
          <b-row align-h="between" align-v="end" class="m-0" style="position:relative;">
            <b-col class="p-0" cols="8">
              <b-row class="m-0">
                <h3 class="card-price">DESDE $ {{objetoWerk.costo.max}} <sup>.00</sup></h3>
              </b-row>
              <b-row class="m-0" no-gutters>
                <b-col style="display:contents;" class="total-icon" v-if="werkUser">
                  <font-awesome-icon icon="thumbs-up" style="vertical-align: -3px!important;"/>
                  <span class="total-icon-span">+ 230</span>
                  <font-awesome-icon icon="eye" style="vertical-align: -4px!important;"/>
                  <span class="total-icon-span">+ 330</span>
                </b-col>
                <b-col style="display:contents;" class="like-icon" v-else>
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
  <!--Vista Tarjeta..Werk Freelance-->
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
  import 'hooper/dist/hooper.css';

  import ObjetoWerkActions from '../../actions/objetoWerk.js';

  export default {
    mixins: [ObjetoWerkActions],
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination,
    },
    props: {
      objetoWerk: Object,
      werkUser: Boolean,
    },
    data() {
      return{

      }
    },
    mounted(){
      //this.estatusAction();

      /*let PostulantesData = {
        "idPerfil": "pito3",
        "nombres": {
          "nombres": "JUAN PEREZ",
          "apellidos": "GZZ GZZ"
        }
      };
      let idVacante = "604bb3239e90751e70e8fb29";
      let accion = "crear";

      this.accionesPostulantes(PostulantesData, accion, idVacante);*/
    }
  }
</script>

<style lang="css">
  /* **pendiente el acomodar
     un css para que las tarjetas werk que sean del
     mismo estilo y medidas y lo consuman de ahí
  */

  #werk-card-anuncio,
  #werk-card-perfil {
    font-size: 16px;
  }

  #werk-card-anuncio .card-body,
  #werk-card-perfil .card-body{
    padding: .88em!important;
  }

  /* Anuncio Card config */
  #werk-card-anuncio.objeto-werk-card,
  #werk-card-perfil.objeto-werk-card {
    border-radius: 11px !important;
    border:  none!important;
    min-width: 16em;
    width: 16em;
    height: 366px;
    background-color: #f5f5f5 !important;
    -webkit-box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                -.375em -.375em .75em 0 rgba(255, 255, 255, .69);
    -moz-box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                -.375em -.375em .75em 0 rgba(255, 255, 255, .69);
    box-shadow: .375em .375em .75em 0 rgba(16, 16, 15, 0.16),
                -.375em -.375em .75em 0 rgba(255, 255, 255, .69);/*.5em .5em .75em 0 rgba(16, 15, 15, 0.16);*/
  }

  #werk-card-anuncio.objeto-werk-card .object-images {
    width: 100%;
    height: 8em;
    border: 3px solid transparent;
    border-radius: 10px !important;
    object-fit:  cover;
  }

  #werk-card-anuncio.objeto-werk-card .card-icons,
  #werk-card-perfil.objeto-werk-card .card-icons {
    color: #dbdada;
    font-size: 1.3em;
  }

  #werk-card-anuncio.objeto-werk-card .card-title {
    font-size: 1.125em;
    font-weight: 800;
    height: 2em;
    text-transform: uppercase;
    line-height: 1em;
    margin: 0;
    padding-bottom: 2px;
  }

  #werk-card-anuncio.objeto-werk-card .card-text,
  #werk-card-perfil.objeto-werk-card .card-text {
    font-size: .812em; /*13px*/
    line-height: 1.08em;
    margin-top: 1.76em;
    margin-bottom: 1.23em;
    height: 4.2em;
    overflow: hidden;
    padding-bottom: 2px;
  }

  #werk-card-perfil.objeto-werk-card .card-text {
    margin-top: .76em;
    margin-bottom: .23em;
  }

  #werk-card-anuncio .objeto-werk-card-footer,
  #werk-card-perfil .objeto-werk-card-footer {
    margin: 0 auto;
  }

  #werk-card-anuncio .card-price,
  #werk-card-perfil .card-price {
    font-size: .88em; /*14px*/
    color: #05386B;
    position: relative;
    text-align: left;
    font-weight: 900;
    padding-bottom: 2px;
    line-height: .88em;
  }

  #werk-card-anuncio .card-price sup,
  #werk-card-perfil .card-price sup {
    position: absolute;
    top: .51em;
    font-size: 65%;
    margin-left: 2px;
  }

  #werk-card-anuncio .total-icon,
  #werk-card-perfil .total-icon {
    color: #dbdada;
    font-size: 1em; /*22px*/
  }

  #werk-card-anuncio .total-icon-span,
  #werk-card-perfil .total-icon-span {
      font-size: .70em; /*13px*/
      margin-left: .1em;
      margin-right: .5em;
  }

  #werk-card-anuncio .like-icon,
  #werk-card-perfil .like-icon {
    color: #dbdada;
    font-size: 1.37em; /*22px*/
  }

  #werk-card-anuncio .card-likes,
  #werk-card-perfil .card-likes {
    font-size: .7em;
    line-height: 1em;
    margin: 0 .3em;
    position: absolute;
    bottom: .25em;
    left: 1.5em;
  }

  #werk-card-anuncio .action-read,
  #werk-card-perfil .action-read {
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

  #werk-card-anuncio .action-read:hover,
  #werk-card-perfil .action-read:hover {
    background-color: #8EE4AF!important;
  }

  /* Hooper css */
  #werk-card-anuncio .hooper {
    min-height: 8em!important;
    height: 8em!important;
  }

  #werk-card-anuncio .hooper-slide {
    margin: 0;
    text-align: -webkit-center;
    width: 100%;
  }

  /* Botones Hooper imagen interna config */
  #werk-card-anuncio .hooper-indicator {
    background-color: #a7a7a7;
    margin: 0 5px 0 5px;
    border-radius: 5px;
    width: 9px;
    height: 9px;
  }

  #werk-card-anuncio .hooper-indicator:hover, #werk-card-anuncio .hooper-indicator.is-active {
    background-color: #7ed89a;
  }

  #werk-card-anuncio button.hooper-indicator:active, #werk-card-anuncio button.hooper-indicator:focus
  {
    outline: none;
  }

  /* Tarjeta de Perfil */
  #werk-card-perfil.objeto-werk-card .card-user-img {
    float: left;
  }

  #werk-card-perfil.objeto-werk-card .card-username  {
    text-align: left;
    width: inherit;
  }

  #werk-card-perfil.objeto-werk-card .card-username .card-title {
    font-size: 1.125em;
    font-weight: 800;
    height: 2em;
    text-transform: uppercase;
    line-height: 1em;
    margin: 0;
    padding-top: 7px;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
