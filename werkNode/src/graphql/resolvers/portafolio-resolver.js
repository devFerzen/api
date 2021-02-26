import mongoose from 'mongoose';

module.exports = {
  Query: {
    misPortafolios: (_, args, { werkModels, userId }) => {
      //Validar que este conectado

      //Buscar por Id del usuario activo
      const portafolios = werkModels.Portafolio.find({werker_id: args.werker_id});
      return portafolios;
    },
    verPortafolio: (_, args, { werkModels, userId }) => {
      //Buscar por id del portafolio
      const portafolio = werkModels.Portafolio.findById(args.id);
      return portafolio;
    }
  },
  Mutation: {
    async creandoPortafolio(_,{ input }, { werkModels }){
      //const nuevoPortafolio = await werkModels.Portafolio.create(input);
      const nuevoPortafolio = new werkModels.Portafolio(input);
      console.log(nuevoPortafolio);
      await nuevoPortafolio.save();
      return nuevoPortafolio;
    },
    async actualizandoPortafolio(_, { id, input }, { werkModels, userId }){
      //Validacion de user
      //id = mongoose.Types.ObjectId(id);
      const actualizandoPortafolio = await werkModels.Portafolio.findByIdAndUpdate(
        {_id:id},
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

          return actualizandoPortafolio
    },
    async eliminarPortafolio(_, { id }, { werkModels, userId }){
      //Validacion de user
      const deletePortafolio = await werkModels.Portafolio.findByIdAndDelete(id);
      return deletePortafolio;
    },
  }
}
