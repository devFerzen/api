<template>
  <b-col class="p-0">

      <!--<ApolloQuery :query="require('../../graphql/anuncios.gql')">
       <template slot-scope="{ result: { loading, error, data } }">

         <div v-if="loading">
           Cargando...
         </div>

         <div v-else-if="data" id="werk-carousel">-->
         <div id="werk-carousel">
           <hooper :settings="hooperSettings" >
             <!--<slide v-for="anuncio in data.anuncios" :key="anuncio._id" >
               <cards v-bind:objetoWerk="anuncio"> </cards>
             </slide>-->
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <slide>
               <cards></cards>
             </slide>
             <hooper-navigation slot="hooper-addons"></hooper-navigation>
           </hooper>
         </div>

         <!--<div v-else-if="error">
           An error occured
         </div>

         <div v-else>
           Sin Resultado
         </div>

       </template>
     </ApolloQuery>-->

  </b-col>
</template>
<style>

  /* Hooper css basado en el font size del body */
  #werk-carousel{
    font-size: 16px;
  }

  #werk-carousel .hooper {
    min-height: 26.56em;
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
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css';

import cards from '@/components/Freelancer/AnuncioCard.vue';
import gql from "graphql-tag";

export default {
  components: {
    cards,
    Hooper,
    Slide,
    HooperNavigation
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
    }
  },
  created(){

  }
}
</script>
