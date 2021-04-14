<template>
  <b-col class="p-0">
    <div id="werk-carousel">
      <hooper :settings="hooperSettings">
        <slide v-if="werkUser">
          <router-link :to="{ name: newRouteView }">
            <button type="button" class="btn btn-outline-secondary">New {{paramsQuery.tipo_objeto}}</button>
          </router-link>
        </slide>
       <slide v-for="data in carruselData" :key="data._id">
         <werk-cards :werk-user="werkUser" :objeto-werk="data"></werk-cards>
       </slide>
       <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </b-col>
</template>

<style>
  /* Hooper css basado en el font size del body */
  #werk-carousel{
    font-size: 16px;
  }

  #werk-carousel .hooper {
    min-height: 25em;
    height: 25em;
  }

  #werk-carousel .hooper-slide {
    margin: 0;
    text-align: -webkit-center;
    width: 100%;
  }

  /* Hooper boton config */
  #werk-carousel .icon-arrowRight, #werk-carousel .icon-arrowLeft {
    min-width: 3em;
    min-height: 3em;
    border-radius: 7px;
    background-color: #ccc;
  }

  #werk-carousel button.hooper-prev:active, #werk-carousel button.hooper-prev:focus,
  #werk-carousel button.hooper-next:active, #werk-carousel button.hooper-next:focus,
  .hooper {
    outline: none;
  }

  #werk-carousel .hooper-next, #werk-carousel .hooper-prev {
    top: 46%;
  }

  #werk-carousel .hooper-next {
    right: -3%;
  }

  #werk-carousel .hooper-prev {
    left: -3%;
  }
</style>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
  import 'hooper/dist/hooper.css';

  import WerkCards from '@/components/Tools/WerkCards.vue';
  import { WERK_OBJECT_LIST_QUERY } from '../../graphql/queries/objetoWerkQueries.js';
  import { WERKOBJECT_NEW } from '../../graphql/mutations/objetoWerkMutations.js';

  export default {
    components: {
      WerkCards,
      Hooper,
      Slide,
      HooperNavigation
    },
    props: {
      werkUser: {
        type: Boolean,
        default: false
      },
      paramsQuery: Object
    },
    data() {
      return {
        hooperSettings: {
          pagination: "yes",
          initialSlide: 0,
          itemsToSlide: 1,
          trimWhiteSpace: true,
          wheelControl: false,
          mouseDrag: true,
          breakpoints: {
            0: {
              itemsToShow: 1
            },
            800: {
              itemsToShow: 2,
            },
            993: {
              itemsToShow: 3,
            },
            1200: {
              itemsToShow: 4,
            }
          }
        },
        gqlQueryResult: '',
        carruselData: [],
      }
    },
    computed: {
      newRouteView(){
        let ruta;
        switch (this.paramsQuery.tipo_objeto) {
          case 'Anuncio':
            ruta = 'anuncioWerk-new-route';
            break;
          case 'Vacante':
            ruta = 'vacanteWerk-new-route';
            break;
          case 'Portafolio':
            ruta = 'portafolioWerk-new-route';
            break;
          default:
            ruta = '';
        }
        return ruta;
      },
    },

    // AFSS - dependiendo del prop hacer la tarjeta (quizás una tarjeta universal)
    // AFSS - falta después ver la manera de como pasar los filtros de búsqueda
    async created () {
      let params_query = this.paramsQuery;
       this.gqlQueryResult = await this.$apollo.query({ query: WERK_OBJECT_LIST_QUERY,
           variables: {
             params_query
          }
        });
      console.log("gqlQueryResultCarruselList");
      console.dir(this.gqlQueryResult);
       this.carruselData = this.gqlQueryResult.data.qObjectWerkList;
    }
  }
</script>
