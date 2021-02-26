import bcrypt from 'bcryptjs';
import crearTokens from '../../utilities/auth';

module.exports = {
  Query: {
    userActivo: (_, args, { werkModels, activeUser }) => {
      console.log(">>> activeUser " + activeUser);
      if(activeUser){
        return werkModels.Usuario.findOne({_id: activeUser.id});
      }
      return null;
    },
  },
  Mutation: {
    async creandoUsuario(_, { input }, { werkModels }){

      input.password = await bcrypt.hash(input.password, 10);
       try {
         const nuevoUsuario = new werkModels.Usuario(input);
         await nuevoUsuario.save(function (err){
           //falta agregar la información del id del objeto freelance creado y pasarolo al guardado de un nuevoUsuario
           contsNuevoFreelance = new werkModels.ObjetoWerk();
         });
         return nuevoUsuario;
       } catch (e) {
         console.log(e);
       }

    },
    async loginUsuario(_, {correo, password}, { werkModels, res } ){
      //Validar información

      const userLogged = await werkModels.Usuario.findOne({correo: correo, estado:1});
      if(!userLogged){
        throw new Error('Usuario no existe!');
      }

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
     }

     const addRemoveFav = await werkModels.Usuario.findByIdAndUpdate(
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
