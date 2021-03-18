import bcrypt from 'bcryptjs';
import crearTokens from '../../utilities/auth';

module.exports = {
  Query: {
    userActivo: async (_, args, { werkModels, activeUser }) => {
      if(activeUser){
        try {
          const user = await werkModels.Usuario.findOne({_id: activeUser.id});
          if(!user){
            throw new Error('Usuario no existe!');
          }
          return user;
        } catch (e) {
          throw new Error('Error interno');
        }
      }
      return null;
    },
  },
  Mutation: {
    async creandoUsuario(_, { input }, { werkModels }){

      input.password = await bcrypt.hash(input.password, 10);
       try {
         const nuevoUsuario = new werkModels.Usuario(input);
         await nuevoUsuario.save();
         return nuevoUsuario;
       } catch (e) {
         console.log(e);
       }

    },
    async loginUsuario(_, {correo, password}, { werkModels, res } ){
      //Validar información

      //Login con trasferencia de datos de los dos tipos - pendiente
      const userLogged = await werkModels.Usuario.findOne({correo: correo, estado: true});
      if(!userLogged){
        throw new Error('Usuario no existe!');
      }
      console.dir(userLogged);

      let passwordMatch = await bcrypt.compare(password, userLogged.password);
      if(!passwordMatch){
        throw new Error('Contraseña incorrecta');
      }

      //Read httpOnly properti para segurarla más
     const { authToken, refreshToken } = crearTokens(userLogged);

     res.cookie('auth-token', authToken, {
       expire: 15 + Date.now(),
       httpOnly:true
     });
     res.cookie('refresh-token', refreshToken, {
       expire: 420000 + Date.now(),
       httpOnly:true
     });

     return userLogged;
   },
    async removeFavLike(_, { id, tipo, accion }, { werkModels }){
     let answer, updateValues;
     let userLogged = "5f83b94d7bae7855a4f16cc3";
     let queryAplicado = { _id: userLogged };

     switch (accion) {
       case 'Favorito':
         updateValues = {
           $pull: {
             obj_werk_fav: {
               id: id
             }
           }
         };
         break;
       case 'Like':
         updateValues = {
           $pull: {
             obj_werk_fav: {
               id: id
             }
           }
         };
         break;
       default:
        //pendiente agregar error de poner la accion
     }

     try {
       const actualizandoUsuario = await werkModels.Usuario.update(
         queryAplicado, updateValues
         );
         return actualizandoUsuario.ok;
     } catch (e) {
       console.dir(e);
       /*  AFSS- Pendiete pasar errores bien definidos hacia el cliente dependiendo
       del tipo de error y este estará directamente en la creación del schema
       */
       throw new Error('Error en al creación');
     }
   },
    async addFavLike(_, { id, tipo, accion }, { werkModels }){

     let answer, updateValues;
     let new_obj_werk_fav = {
       id: id,
       tipo: tipo
     };
     let userLogged = "5f83b94d7bae7855a4f16cc3";
     let queryAplicado = { _id: userLogged };

     switch (accion) {
       case 'Favorito':
         updateValues = {
           $push: {
             obj_werk_fav: new_obj_werk_fav
           }
         };
         break;
       case 'Like':
         updateValues = {
           $push: {
             obj_werk_like: new_obj_werk_fav
           }
         };
         break;
       default:
     }

     const addFavLike = await werkModels.Usuario.findByIdAndUpdate(
       queryAplicado, updateValues, function(err, modification){
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
     },
  }
}
