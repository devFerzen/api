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
    qObjectWerk:(_, args, { werkModels }) => {
      const ids = args.params_query.id_list;
      //const objectWerkType = args.params_query.tipo_objeto;
      const objectWerkList = werkModels.ObjetoWerk.find({'_id':{$in: ids}});
      //const objectWerkList = await werkModels.ObjetoWerk.find().where('_id').in(ids).exec();
      return objectWerkList;
    }//Change name to ViewList
  },
  Mutation: {
    async creandoObjetoWerk(_,{ input }, { werkModels }){
      //Global validation si werkUser

      const newObjetoWerk = new werkModels.ObjetoWerk(input);
      await newObjetoWerk.save();
      console.log(newObjetoWerk);
      return newObjetoWerk;
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
    async actualizandoObjetoWerk(_, { id, input }, { werkModels }){
      const actualizandoObjetoWerk = await werkModels.ObjetoWerk.findByIdAndUpdate(
        {_id: id},
          input,
            null,
              function(err, doc){
                if(err){
                  console.log("pendiente esquema de errors <<< ActualizandoPortafolioError");
                }else{
                  console.log("Update exitoso");
                }
              }
      );
      return actualizandoObjetoWerk;
    },
    async bloqDesbloqObjetoWerk(_, { id, input }, { werkModels }){
      //Verificar usuario

      let answer;
      let queryAplicado = { _id: id };
      let updateValues = input

      const actualizandoObjetoWerk = await werkModels.ObjetoWerk.findByIdAndUpdate(
        queryAplicado, updateValues, { omitUndefined: true }, function(err, modification){
                if(err){
                  //Hacer los logs
                  console.log("err>>>",err);
                  answer = "fallido";
                } else {
                  //Mandar asyncronicamente funcion a salvar a administración
                  console.log("actualizado exitoso");
                  answer = "éxito";
                }
              });
     return answer;
              //Pendiente el regreso de llamada en graphql
              //investigación de llamado de returno graphql
    },
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
