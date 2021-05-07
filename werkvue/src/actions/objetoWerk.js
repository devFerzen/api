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
      console.log("resultadoMutacion->AccionesPostulantes->",resultadoMutacion); //AFSS- Cambio: retornar todo el objeto??

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
          console.log("resultadoMutacion->OWLikeAction->",resultadoMutacion); //AFSS- Cambio: retornar todo el objeto??
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
        console.log("resultadoMutacion->OWFavoring->",resultadoMutacion); //AFSS- Cambio: retornar todo el objeto??
        return resultadoMutacion;
      } catch (e) {
        this.errorMutate = e.message;
        throw new Error(e.message);
      }
    },

    async objetoWerkNewUpdate(Params, action){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: action === '' ? OWMutations.WERKOBJECT_NEW : OWMutations.WERKOBJECT_UPDATE ,
          variables: {
            Params: Params
          }
        });
        console.log("resultadoMutacion->OWNewUpdate->",resultadoMutacion); //AFSS- Cambio: retornar todo el objeto??
        return resultadoMutacion;
      } catch (e) {
        throw new Error(e._message || e.message);
      }
    },

    async objetoWerkImagesNew(ImagesParams, objetoId){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: OWMutations.WERKOBJECT_IMAGES_NEW,
          variables: {
            ImagesParams: ImagesParams,
            id: objetoId
          }
        });
        //AFSS - Aqui se pondrá las funcion de emitir el error o éxito?
        console.log("ImageNew->resultadoMutacion: ",resultadoMutacion); //AFSS- Cambio: retornar todo el objeto??
        return resultadoMutacion;
      } catch (e) {
        console.log("Error: objetoWerkImagesNew");
        throw new Error(e._message || e.message);
      }
    },

    async objetoWerkImagenesPositionUpdate( id, origin, target ){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: OWMutations.WERKOBJECT_IMAGES_UPDATEPOSITION,
          variables: {
            id: id,
            origin: origin,
            target: target
          }
        });
        console.log("resultadoMutacion->ImagenPositionUpdate->",resultadoMutacion);
        return resultadoMutacion;
      } catch (e) {
        console.log("Error: objetoWerkImagenesPositionUpdate");
        throw new Error(e._message || e.message);
      }
    },

    async objetoWerkImagesDelete(ImagesParams, objetoId){
      try {
        const resultadoMutacion = await this.$apollo.mutate({
          mutation: OWMutations.WERKOBJECT_IMAGES_DELETE,
          variables: {
            ImagesParams: ImagesParams,
            id: objetoId
          }
        });
        console.log("obwImageDelete->resultadoMutacion:",resultadoMutacion);
        return resultadoMutacion;
      } catch (e) {
        console.log("obwImageDelete->error:");
        throw new Error(e._message || e.message);
      }
    }
  }
}
