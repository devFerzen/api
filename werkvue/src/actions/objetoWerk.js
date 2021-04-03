/**
 * @file
 * Mutaciones Objetos Werk..
 *
 * Dicha exportación es únicamente usada para Componentes
 * con consumo de información de un << ObjetoWerk >>
*/
import * as OBMutations from '../graphql/mutations/objetoWerkMutations.js';

export default {
  methods: {
    async estatusAction(){

      let Params = {
        id: this.objetoWerk.id,
      };
      Params.input = {
        objeto_werk: {
          estatus:{
            tipo: !this.objetoWerk.objeto_werk.estatus.tipo
          }
        }
      }

      const resultadoMutacion = await this.$apollo.mutate({
          mutation: OBMutations.WERKOBJECT_ESTATUS,
          variables: {
            Params
          }
      });

    },

    async accionesPostulantes(Params, accion, idVacante){
      const resultadoMutacion = await this.$apollo.mutate({
        mutation: OBMutations.WERKOBJECT_POSTULANTES,
        variables: {
          Params: Params,
          accion: accion,
          idVacante: idVacante
        }
      });
      console.dir(resultadoMutacion); //AFSS- Cambio: retornar todo el objeto

      /*if(!resultadoMutacion.ok){
        this.$apollo.mutate({
            mutation: OBMutations.REPORT_ACTIONS,
            variables: {
              id,
              estado
            }
          });
        }*/
        return resultadoMutacion.ok;
      },

    async reclutadorAction(id, estadoData){

      const resultadoMutacion = await this.$apollo.mutate({
        mutation: OBMutations.REPORT_ACTIONS,
        variables: {
          id: id,
          estadoData: estadoData
        }
      });

      /*if(!resultadoMutacion.ok){
        this.$apollo.mutate({
            mutation: OBMutations.REPORT_ACTIONS,
            variables: {
              id,
              estado
            }
          });
        }*/

        return resultadoMutacion;
      },

    async objetoWerkLikeAction(Params, action){
      let resultadoMutacion;
      try {
          resultadoMutacion = await this.$apollo.mutate({
            mutation: OBMutations.WERKOBJECT_LIKING_MUTATE,
            variables: {
              Params: Params,
              action: action
            }
          });
          return resultadoMutacion.data.likingObjetoWerk
      } catch (e) {
        this.errorMutate = e.message;
        throw new Error(e.message);
      }
    },

    async objetoWerkFavoring(Params, action){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: OBMutations.WERKOBJECT_FAVORING_MUTATE,
          variables: {
            Params: Params,
            action: action
          }
        });
        return resultadoMutacion;
      } catch (e) {
        this.errorMutate = e.message;
        throw new Error(e.message);
      }
    }

  }
}
