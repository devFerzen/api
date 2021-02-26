<template>
  <b-container fluid="md" align="left" class="portafolio" style="margin-top:60px;">
    <b-row cols="2">
      <b-col cols="8" md="12">
      </b-col>

      <b-col cols="4" md="3" offset-md="3" order-md="3" align-self="baseline" class="mt-0 mt-md-5" style="display: flex; justify-content: flex-end;">
        <like-star-share></like-star-share>
      </b-col>

      <b-col cols="12" md="6" class="mt-5">
        <h1 class="portafolio-title">LOGO MINIMALISTAS</h1>
      </b-col>
    </b-row> <!--title-and-like-component-->

      <div class="portafolio-desc float-lg-left mt-2">
        <p class="mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida luctus massa sit amet efficitur. Pellentesque accumsan dolor id mollis rhoncus. Vivamus ac rutrum lectus, ut venenatis arcu. In imperdiet purus nec ipsum
          fermentum ornare lobortis consequat nisl. Ut pharetra venenatis lectus eget pretium. fermentum ornare lobortis consequat nisl. Ut pharetra venenatis lectus eget pretium. fermentum ornare lobortis consequat nisl. Ut pharetra venenatis lectus eget pretium. </p>
      </div>

      <div id="portafolio-images" class="float-lg-right mt-2 werk-shadow-card">
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
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>

      <div class="portafolio-docs mt-4">
        <h5>DOCUMENTOS COMPLEMENTARIOS</h5>
        <documentoCard></documentoCard>
        <documentoCard></documentoCard>
      </div>

  </b-container>
</template>

<style>

  .portafolio .object-images {
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 10px !important;
    object-fit:  cover;
  }

  .portafolio-desc {
    padding-right: 2%;
    padding-left: 2%;
  }

  @media only screen and (min-width:992px){
    .portafolio-desc{
      width: 60%;
      padding-right: 0%;
      padding-left: 0;
    }
  }

  #portafolio-images {
    height:350px;
    width: 70%;
    background-color: white;
    padding: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width:992px){
    #portafolio-images{
      width: 40%;
    }
  }

  #portafolio-images .hooper {
    height: 280px;
  }

  #portafolio-images .hooper-slide {
    margin: 0;
    text-align: -webkit-center;
    width: 100%!important;
  }

  /* Hooper navigation config */
  #portafolio-images .icon-arrowRight,
  #portafolio-images .icon-arrowLeft {
    min-width: 3em;
    min-height: 3em;
    border-radius: 7px!important;
    background-color: #cccccc9e;
  }

    #portafolio-images button.hooper-prev:active,
    #portafolio-images button.hooper-prev:focus,
    #portafolio-images button.hooper-next:active,
    #portafolio-images button.hooper-next:focus,
    .hooper {
      outline: none;
    }

    #portafolio-images .hooper-next {
      right: -35px;
    }

    #portafolio-images .hooper-prev {
      left: -35px;
    }

    /* Hooper pagination config */
    #portafolio-images .hooper-indicator {
      background-color: #a7a7a7;
      margin: 0 5px 0 5px;
      border-radius: 5px;
      width: 9px;
      height: 9px;
    }

    #portafolio-images .hooper-indicator:hover,
    #portafolio-images .hooper-indicator.is-active {
      background-color: #4285f4;
    }

    #portafolio-images button.hooper-indicator:active,
    #portafolio-images button.hooper-indicator:focus
    {
      outline: none;
    }

    .portafolio .btn-volver {
      margin-bottom: 0;
      font-size: 14px;
      color: gray;
    }
</style>


<script>
  import documentoCard from '@/components/Freelancer/DocumentoSmallCard.vue';
  import likeStarShare from '@/components/Tools/likeStarShare.vue';

  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
  import 'hooper/dist/hooper.css';

  import { WERK_OBJECT_QUERY } from '../../graphql/queries/objetoWerkQueries.js';

  export default {
    name: 'portafolioWerk-route',
    components: {
      likeStarShare,
      documentoCard,
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination
    },
    props:{
      id:String
    },
    data() {
      return{
        portafolioId: {
          id_list: [this.id]
        },
        objetoWerkData: '',
        insideHooperSettings: {
          pagination: 'yes',
          initialSlide: 0,
          itemsToSlide: 1,
          trimWhiteSpace: true,
          wheelControl: false,
          mouseDrag: false,
        },

      }
    },
    async created() {
      const params_query = this.portafolioId;
      console.log(params_query);
      const objetoWerkDataResult = await this.$apollo.query(
        {
          query: WERK_OBJECT_QUERY,
          variables: {
            params_query
          }
        }
      );
      this.objetoWerkData = objetoWerkDataResult.data.qObjetWerkView;
    }
  }
</script>
