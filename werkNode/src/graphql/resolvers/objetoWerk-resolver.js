/**
 * @module resolvers/ObjetoWerk
 */
import bcrypt from 'bcryptjs';
import crearTokens from '../../utilities/auth';
import { UPLOAD_IMAGE_PATH } from '../../utilities/constants';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import path from 'path';
import fs from 'fs';

//List updateValues
const razonesCriticas = ["Fotos sexuales"];

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
  ObjetoWerkViewData: {
     __resolveType(obj, context, info){
       if(obj.informacion_personal.nombre.nombres){ return 'FreelanceResult';}
       if(obj.habilidades_req){ return 'VacanteResult';}
       if(obj.objeto_werk.estatus.hardBane){ return 'BannedResult';}
       return 'AnuncioResult';
     }
  },
  IObjetoWerk: {
    __resolveType(obj, context, info){
      if(obj.informacion_personal.nombre.nombres  != null){ return 'Freelance';}
      if(obj.habilidades_req != null){ return 'Vacante';}
      return 'Anuncio';
    }
  },

  Query: {
    Prueba: (_, args, { werkModels, activeUser }) => {
      console.log("el usuario esta loggeado con " + activeUser);
      if(!activeUser){ return null; }
      return 'Prueba'
    },
    qObjetWerkView: (_, args, { werkModels }) => {

      console.log("args qObjetWerkView", args);
      const objectWerk = werkModels.ObjetoWerk.findById(args.params_query.id_list[0]);
      return objectWerk;

    },
    qObjectWerkList: (_, args, { werkModels }) => {
      const ids = args.params_query.id_list;
      //const objectWerkType = args.params_query.tipo_objeto;
      const objectWerkList = werkModels.ObjetoWerk.find({'_id':{$in: ids}});
      //const objectWerkList = await werkModels.ObjetoWerk.find().where('_id').in(ids).exec();
      return objectWerkList;
    }
  },
  Mutation: {
    /**
     * @typedef {Params} Object
     * @property {String} id El identificador del objeto werk.
     * @property {Object}  Objeto con información de un objeto werk.
     */

    /**
     * @function creandoObjetoWerk
     * @param {Object} _ Informacion de la llamada.
     * @param {Params} Params Informacion de los inputs posibles.
     * @param {Object} werkModels Todos los schemas de mongoose.
     * @return {Object} ObjetoWerk Información de cualquier Objeto Werk.
     */
    async creandoObjetoWerk(_,{ Params }, { werkModels }){
      try {
        let result = await new werkModels.ObjetoWerk(Params.input).save();

        if(Params.input.objeto_werk.tipo === 'anuncio'){
          await werkModels.ObjetoWerk.update(
              {_id: "600f9a07144b8d7534e6629b"},
              {
                "$push": {
                  "werker.objetos_werk": {
                    "tipo": 'anuncio',
                    "id": result.id
                  }
                }
              }
            );
        } else if(Params.input.objeto_werk.tipo === 'freelance'){
          await werkModels.Usuario.update(
              { _id: "6002706a8343ff508c0316d3" },
                { "$set": { "werker.id": result.id } });
        } else if(Params.input.objeto_werk.tipo === 'vacante'){
          await werkModels.Usuario.update(
              { _id: "6002706a8343ff508c0316d3" },
                { "$push": { "vacantes": result.id } });
        }

        //console.dir(result);
        return result;
      } catch (e) {
        throw new Error(e);
      }
    },

    /**
     * @function eliminandoObjetoWerk
     * @param {String} Id Informacion de la llamada.
     */
    async eliminandoObjetoWerk(_, { id }, { werkModels }){
      let answer;
      //Validación de usuario
      try {
        const deleteObjetoWerk = await werkModels.ObjetoWerk.findByIdAndDelete(id);
        answer = "Exito";
      } catch (e) {
        console.log(e);
        answer = "fallido";
      }
      return answer;
    },

    /**
     * @function actualizandoObjetoWerk
     * @param {Params} Params Informacion de la llamada.
     */
    async actualizandoObjetoWerk(_, { Params }, { werkModels }){

      //Validacion deque si es el creador, o un agente de werk.

      try {
        const actualizandoObjetoWerk = await werkModels.ObjetoWerk.findByIdAndUpdate(
          {_id: Params.id},
          Params.input,
          null
        );

        return actualizandoObjetoWerk;
      } catch (e) {
        console.dir(e);
        throw new Error('Error en al creación');
      }
    },

    /**
     * @function activarDesactivarObjetoWerk
     * @params {Object}
     */
    async activarDesactivarObjetoWerk(_, { Params }, { werkModels }){
        //Validacion deque si es el creador, o un agente de werk.

        try {
          const actualizandoObjetoWerk = await werkModels.ObjetoWerk.update(
            {_id: Params.id},
            {
              "$set": {
                "objeto_werk.estatus.tipo": Params.input.objeto_werk.estatus.tipo
              }
            },
          );

          /*Nota para Test
            AFSS - Se hizo pruebas y la función de abajo no tronará el servidor si
            llegasé a fallar, como quiera se le integrá un callback errOnly para
            registrar el error, Pendiente hacerlo y borrar esta nora
            Funcion: De registro administrativo de acciones activacion de objetos werk
            Pendiente: Su tabla según yo será con el pattron Bucket, hacer las modificaciones
            necesarias para que guarde la informacion a como la necesita
          werkModels.ReporteObjetosWerk.update(
            {_id: Params.id},
            {
              "$set": {
                "objeto_werk.estatus.tipo": Params.id
              }
            },
            null,
            (err) => {
              if(err){
                console.log(err);
                // AFSS - validacion de error Pendiente***
              }
            }
          );
          */

          return actualizandoObjetoWerk.ok;
        } catch (e) {
          console.dir(e);
          /*  AFSS- Pendiete pasar errores bien definidos hacia el cliente dependiendo
          del tipo de error y este estará directamente en la creación del schema
          */
          throw new Error('Error en al creación');
        }

    },

    /**
     * @function accionesPostulantes
     * @param {Params} Params Objeto del freelancer
     * @param {String} accion Tipo de accion (crear - actualizar - eliminar)
     * @param {String} idVacante Id de la vacante a postularse
     * @return {String} 1 - 0
     */
    async accionesPostulantes(_, { Params, accion, idVacante }, { werkModels }){

      let dataToUpdate;
      let queryAplicado = { _id: idVacante };

      switch (accion) {
        case 'crear':
          dataToUpdate = {
            "$addToSet": {
              "postulantes": Params //No esta guardando
            }
          };
          console.log(dataToUpdate, idVacante);
          break;
        case 'actualizar':
          queryAplicado.postulantes = {
            "$elemMatch": {
              "id": Params.id
            }
          };
          dataToUpdate = {
            "$set": {

            }
          };
          break;
        case 'eliminar':
          dataToUpdate = {
            $pull: {
              "postulantes" : {
                idPerfil: Params.idPerfil
              }
            }
          };
          break;
        default:
          throw new Error('Accion no especificada');
      }

      try {
        const actualizandoObjetoWerk = await werkModels.ObjetoWerk.update(
          queryAplicado,
            dataToUpdate,
        );

        return actualizandoObjetoWerk.ok;
      } catch (e) {
        console.dir(e);
        /*  AFSS- Pendiete pasar errores bien definidos hacia el cliente dependiendo
        del tipo de error y este estará directamente en la creación del schema
        */
        throw new Error('Error en al creación');
      }
    },

    /**
     * @function creandoObjetoWerk Explicacion de lo que hace
     * @param {Params} Params Id y tipo del ObjetoWerk
     * @param {Object} Estado Estado de respuesta completo
     * @return {String} Respuesta del resolver Boolean
     */
    async reportObjetoWerk(_, { Params, Estado }, { werkModels }){
      let estadoData = Estado;
      let queryAplicado = { _id: id };

      estadoData = {
        tipo: Estado.tipo || true,
        razon: Estado.razon || undefined,
        descripcion: Estado.descripcion || undefined,
        hardBane: Estado.hardBane || undefined,
      };

      if(razonesCriticas.indexOf(Estado.razon) != -1){
        estadoData   = {
          tipo: false,
          razon: Estado.razon,
          descripcion: Estado.descripcion || undefined,
          hardBane: true,
        };
      }

      try {

        const answer = await werkModels.ObjetoWerk.update (
          queryAplicado,
          {
            "$set": {
              "objeto_werk.estatus": estadoData
            }
          },
          {omitUndefined:true}
        );

        //Save into reportes Report

      } catch (e) {
        throw new Error(e);
      }

      return answer.ok;
    },

    /**
     * @function likingObjetoWerk Agrega y quita un Likes dentro de un objetoWerk
     *
     */
    async likingObjetoWerk(_, { Params, action }, { werkModels } ){
      let queryAplicado = { _id: Params.id_list[0] };
      let dataToUpdate;

      switch (action) {
        case 'like':
          dataToUpdate = {
            "$inc": {
              "objeto_werk.likes": 1
            }
          };
          break;
        case 'deslike':
            dataToUpdate = {
              "$inc": {
                "objeto_werk.likes": -1
              }
            };
            break;
        default:
        throw new Error('Acción sin especificar');
      }

      //Test activeUser passed by context
      let idTest = "6002706a8343ff508c0316d3";

      //Falta el quitarlo con el dislike
      const updateUser = await werkModels.Usuario.updateOne(
        { _id: idTest},
        { "$addToSet": {
          "obj_werk_like": {
            "id": Params.id_list[0],
            "tipo": Params.tipo_objeto
          }
        }}
      );

      if(updateUser.ok == 1){
        await werkModels.ObjetoWerk.updateOne(
          queryAplicado,
            dataToUpdate
        );
      }
      return updateUser.ok;
    },

    /**
     * @function favoringObjetoWerk Agrega y quita un Favoritos dentro de un objetoWerk
     * @param {Object} Params Contiene el id del Objeto y su tipo
     * @param {Strgin} action La accion de agregarFavorito, quitarFavorito
     */
    async favoringObjetoWerk(_, { Params, action }, { werkModels } ){
      let queryAplicado = { _id: Params.id_list[0] };
      let dataToUpdate;

      switch (action) {
        case "agregarFavorito":
          dataToUpdate = {
            "$inc": {
              "objeto_werk.favs": 1
            }
          };
          break;
        case "quitarFavorito":
          dataToUpdate = {
            "$inc": {
              "objeto_werk.favs": -1
            }
          };
          break;
        default:

      }

      let idDelUsuario = "6002706a8343ff508c0316d3";

      const updateUser = await werkModels.Usuario.update(
        { _id: idDelUsuario},
        { "$addToSet": {
          "obj_werk_fav": {
            "id":Params.id_list[0],
            "tipo":Params.tipo_objeto
          }
        }}
      );

      if(updateUser.ok == 1){
        await werkModels.ObjetoWerk.updateOne(
          queryAplicado,
            dataToUpdate
        );
      }
      return updateUser.ok;
    },

    /**
     * @function newImageObjetoWerk Una nueva imagen dentro del objetoWerk
     */
     async newImageObjetoWerk(_, { ImagesParams, id }, { werkModels }){

       try {
         const updateUser = await werkModels.ObjetoWerk.update(
           { _id: id },
           { "$addToSet": {
              "imagenes": {
                "nombre_original": ImagesParams.nombre_original,
                "nombre_werk": ImagesParams.nombre_werk,
                "tamano": ImagesParams.tamano,
                "extension": ImagesParams.extension,
                "posicion": ImagesParams.posicion*1,
                "path": 'uploads' + UPLOAD_IMAGE_PATH(ImagesParams.path)
              }
             }}
         );
         console.log("newImageObjetoWerk->updateUser:",updateUser);
         return updateUser.ok;
       } catch (e) {
         console.dir(e);
         throw new Error('Error al intentar guardar la imagen');
       }

     },

     /**
      * @function updatePositionImagesObjetoWerk Una nueva imagen dentro del objetoWerk
      */
     async updatePositionImagesObjetoWerk (_, { id, origin, target }, { werkModels }){
        // extraer el arreglo de imagenes
        const ObjetoImages = await werkModels.ObjetoWerk.findById(id);
        let imagesArray = ObjetoImages.imagenes;
        let baseDeComparacion = [origin, true];
        if(target < origin){
          baseDeComparacion = [target, false];
        }

        if(!ObjetoImages ) {
          throw new Error ('Objeto no encontrado');
        }

        for (let i = 0; i < imagesArray.length; i++) {
          if(origin == imagesArray[i].posicion){
            imagesArray[i].posicion = target;
            continue;
          }
          if(baseDeComparacion[0] <= imagesArray[i].posicion){
            imagesArray[i].posicion = baseDeComparacion[1] ? imagesArray[i].posicion - 1 : imagesArray[i].posicion + 1;
          }
        }

        console.log("nuevoArray", imagesArray);
        //hacer el cambio en carga global porque extrajimos todas las images
        //const resultadoMutacion = await werkModels.ObjetoWerk.update({});
        return "yes";

     },

     /**
      * @function deletePositionImagesObjetoWerk Eliminar imagen dentro del objetoWerk
      */
      async deletePositionImagesObjetoWerk (_, { ImagesParams, id }, { werkModels }){
        console.log("deletePositionImagesObjetoWerk->ImagesParams:",ImagesParams);
        console.log("deletePositionImagesObjetoWerk->id:",id);

        let pathImagen = UPLOAD_IMAGE_PATH(ImagesParams.path);
        console.log("deletePositionImagesObjetoWerk->pathImagen:",pathImagen);

        const ObjetoImages = await werkModels.ObjetoWerk.findById(id); //No encuentra el objeto
        console.log("deletePositionImagesObjetoWerk->ObjetoImages.images:");
        console.dir( ObjetoImages.images);

        const imagenes = ObjetoImages.images;
        console.log("deletePositionImagesObjetoWerk->images:",images);

        //Quitar de BD
        const resultadoEliminacion = await werkModels.ObjetoWerk.update(
          { _id: id },
          { "$pull": {
             "imagenes": {
               "nombre_original": ImagesParams.nombre_original,
             }
            }}
        )
        console.log("deletePositionImagesObjetoWerk->resultadoEliminacion:",resultadoEliminacion);
        //Confirmar el eliminado
        if(resultadoEliminacion.ok === 1){

          for (var i = 0; i < imagenes.length; i++) {
            console.log("deletePositionImagesObjetoWerk->nombre_werk:",imagenes[i].nombre_werk);
            console.log("deletePositionImagesObjetoWerk->nombre_original:",imagenes[i].nombre_original);
            console.log("deletePositionImagesObjetoWerk->nombre_original[images]:",imagenes[i].nombre_original);
          }
          let reqPath = path.join(__dirname, '..', '..',pathImagen,imagenes[0].nombre_original);
          console.log("deletePositionImagesObjetoWerk->reqPath:",reqPath);
          fs.unlinkSync(reqPath);

        }
        return resultadoEliminacion.ok;
      }


  }
}
