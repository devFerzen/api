//Falta el resolver de werkerviewdata
module.exports = {

  Query: {
    informacionPerfilContratante: (_, { paramsPerfil }, { werkModels }) => {
      try {
          const contratante = werkModels.Contratante.findById(paramsPerfil.id);
          return contratante;
      } catch (e) {
        throw new Error('Error al buscar el perfil');
      }
    }
  },
  Mutation: {

    async creandoPerfilContratante(_,{ params }, { werkModels }){
      //Validar el inicio de sesion

      //Falta data validation
      try {
        const result = await new werkModels.Contratante(params.input).save();
        /*await werkModels.Usuario.update(
            { _id: "6002706a8343ff508c0316d3" },
              { "$set": { "werker.id": result.id } });*/
        return result;
      } catch (e) {
        throw new Error('Error al crear el perfil');
      }
    },

    async actualizandoPerfilContratante(_,{ params }, { werkModels }){
      // AFSS Actualiza todos los embedded objects dentro de un documento, si una propiedad
      //de un objeto embedded este lo pasará a nulo... pero si no se pasa todo el objeto
      //en si, no pasa nada,,, no lo borra
      try {
        let contratanteActualizado = await werkModels.Contratante.findByIdAndUpdate(
          { _id: params.id },
            params.input,
              { new: true }
        );
        return contratanteActualizado;
      } catch (err) {
        console.dir(err);
        //Mandar a loggear este error - Pendiente
        throw new Error('Error al actualizar el perfil');
      }
    }

  }
}
