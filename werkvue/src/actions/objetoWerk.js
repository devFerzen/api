//https://vueschool.io/articles/vuejs-tutorials/reusing-logic-in-vue-components/
//Agregar en el libro de notas

/*
  Dicha exportación es únicamente usada para Componentes con consumo de información
  de un << ObjetoWerk >>
*/
import { WERKOBJECT_POSTULANTES, WERKOBJECT_ESTATUS } from '../graphql/mutations/objetoWerkMutations.js';

//Add return, realUpdateEstatus
export default {
  methods: {
    async estatusAction(){

      let params = {
        id: this.objetoWerk.id,
      };
      params.input = {
        objeto_werk: {
          estatus:{
            tipo: !this.objetoWerk.objeto_werk.estatus.tipo
          }
        }
      }

      const resultadoMutacion = await this.$apollo.mutate({
          mutation: WERKOBJECT_ESTATUS,
          variables: {
            params
          }
      });

    },
    async reclutadorAction(userData, tipoAccion, id){
      let params = userData;
      let accion = tipoAccion;
      let idVacante = id;

      const resultadoMutacion = await this.$apollo.mutate({
        mutation: WERKOBJECT_POSTULANTES,
        variables: {
          params,
          accion,
          idVacante
        }
      });
      console.dir(resultadoMutacion);

    }
  }
}
