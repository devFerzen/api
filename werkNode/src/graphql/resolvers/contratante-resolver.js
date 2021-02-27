//Falta el resolver de werkerviewdata
module.exports = {

  Query: {
    informacionPerfilContratante: (_, args, { werkModels }) => {

    }
  },
  Mutation: {
    async creandoPerfilContratante(_,{ input }, { werkModels }){
      //Validar el inicio de sesion

      //Creacion de Documento
      const nuevoPerfil = new werkModels.Contratante(input);
      await nuevoPerfil.save(function(err){
        if (err) return 'Fallido';
      });
      console.dir(nuevoPerfil);
      return 'Éxito';

    },
    async actualizandoPerfilContratante(_,{ id, input }, { werkModels }){
      //Error handler?? in graphql
      const contratanteActualizado = await werkModels.Contratante.findByIdAndUpdate(
        { _id: id },
          input,
            { new: true }
      );
      return contratanteActualizado;
    }
  }

}
