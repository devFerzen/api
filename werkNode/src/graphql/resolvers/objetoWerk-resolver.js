import bcrypt from 'bcryptjs';
import crearTokens from '../../utilities/auth';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

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

      console.log("args");
      console.log(args.params_query.id_list[0]);

      const objectWerk = werkModels.ObjetoWerk.findById(args.params_query.id_list[0]);
      return objectWerk;
    },
    qObjectWerk: (_, args, { werkModels }) => {
      const ids = args.params_query.id_list;
      //const objectWerkType = args.params_query.tipo_objeto;
      const objectWerkList = werkModels.ObjetoWerk.find({'_id':{$in: ids}});
      //const objectWerkList = await werkModels.ObjetoWerk.find().where('_id').in(ids).exec();
      return objectWerkList;
    }
  },
  Mutation: {
    async creandoObjetoWerk(_,{ params }, { werkModels }){
      try {
        const result = await new werkModels.ObjetoWerk(params.input).save();

        if(params.input.objeto_werk.tipo === 'anuncio'){
            await werkModels.ObjetoWerk.update(
              {_id: "600f9a07144b8d7534e6629b"},
              {
                "$push": {
                  "werker.objetos_werk": {
                    "tipo": result.__typename,
                    "id": result.id
                  }
                }
              }
            );
        } else if(params.input.objeto_werk.tipo === 'freelance'){
          await werkModels.Usuario.update(
              { _id: "6002706a8343ff508c0316d3" },
                { "$set": { "werker.id": result.id } });
        } else if(params.input.objeto_werk.tipo === 'vacante'){
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
    async actualizandoObjetoWerk(_, { params }, { werkModels }){

      //Validacion deque si es el creador, o un agente de werk.

      try {
        const actualizandoObjetoWerk = await werkModels.ObjetoWerk.findByIdAndUpdate(
          {_id: params.id},
          params.input,
          null
        );

        return actualizandoObjetoWerk;
      } catch (e) {
        console.dir(e);
        throw new Error('Error en al creación');
      }
    },
    async activarDesactivarObjetoWerk(_, { params }, { werkModels }){
        //Validacion deque si es el creador, o un agente de werk.

        try {
          const actualizandoObjetoWerk = await werkModels.ObjetoWerk.update(
            {_id: params.id},
            {
              "$set": {
                "objeto_werk.estatus.tipo": params.input.objeto_werk.estatus.tipo
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
          werkModels.ReporteActivaciones.update(
            {_id: params.id},
            {
              "$set": {
                "objeto_werk.estatus.tipo": params.id
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
    async accionesPostulantes(_, { params, accion, idVacante }, { werkModels }){

      let dataToUpdate;
      let queryAplicado = { _id: idVacante };

      switch (accion) {
        case 'crear':
          dataToUpdate = {
            $addToSet: {
              postulantes: params
            }
          };
          break;
        case 'actualizar':
          queryAplicado.postulantes = {
            "$elemMatch": {
              "id": params.id
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
              postulantes: { id: params.id }
            }
          };
          break;
        default:
          throw new Error('Accion no especificada');
      }

      try {
        const actualizandoObjetoWerk = await werkModels.ObjetoWerk.update(
          queryAplicado, dataToUpdate
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
    // AFSS - Funcion de reportar un objeto werk, hay que transformarla en algo global
    async reportObjetoWerk(_, { id, razon, descripcion }, { werkModels }){
      let answer;
      let queryAplicado = { _id: userLogged };

      //Funcion para saber los estados críticos o no.
      if(razonesCriticas.indexOf(razon) != -1){
        const applyhardBane = werkModels.ObjetoWerk.findByIdAndUpdate(
          queryAplicado,
            { estatus: {
                tipo: false,
                razon: razon,
                descripcion: descripcion || undefined,
                hardBane: true
              }
            },
              function(err, modification){
                if (err) {
                  answer = "fallo";
                } else {
                  answer = "exito";
                  // send notification
                }
              });
      } else {
        const applySoftBane = werkModels.ObjetoWerk.findByIdAndUpdate(
          queryAplicado,
            { estatus: {
                razon: razon,
                descripcion: descripcion || undefined
              }
            },
              function(err, modification){
                if (err) {
                  answer = "fallo";
                } else {
                  answer = "exito";
                }
              });

        //async admin, schema Reports metods if succeed
        return answer;
      }
    }
  }
}
