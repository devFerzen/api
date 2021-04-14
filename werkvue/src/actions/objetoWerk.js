/**
 * @file
 * Mutaciones Objetos Werk..
 *
 * Dicha exportación es únicamente usada para Componentes
 * con consumo de información de un << ObjetoWerk >>
*/
import * as OWMutations from '../graphql/mutations/objetoWerkMutations.js';

//Quizás aquí estarán funciones privadas para rechazar likes, invitar a sub
//cribir validaciones, etc...

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
          mutation: OWMutations.WERKOBJECT_ESTATUS,
          variables: {
            Params
          }
      });

    },

    async accionesPostulantes(Params, accion, idVacante){
      const resultadoMutacion = await this.$apollo.mutate({
        mutation: OWMutations.WERKOBJECT_POSTULANTES,
        variables: {
          Params: Params,
          accion: accion,
          idVacante: idVacante
        }
      });
      console.dir(resultadoMutacion); //AFSS- Cambio: retornar todo el objeto

      /*if(!resultadoMutacion.ok){
        this.$apollo.mutate({
            mutation: OWMutations.REPORT_ACTIONS,
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
        mutation: OWMutations.REPORT_ACTIONS,
        variables: {
          id: id,
          estadoData: estadoData
        }
      });

      /*if(!resultadoMutacion.ok){
        this.$apollo.mutate({
            mutation: OWMutations.REPORT_ACTIONS,
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
            mutation: OWMutations.WERKOBJECT_LIKING,
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
          mutation: OWMutations.WERKOBJECT_FAVORING,
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
    },

    async objetoWerkNewUpdate(Params, action){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: action === '' ? OWMutations.WERKOBJECT_NEW : OWMutations.WERKOBJECT_NEW ,
          variables: {
            Params: Params
          }
        });
        return creandoObjetoWerk;
      } catch (e) {
        throw new Error(e._message || e.message);
      }
    }

  }
}
