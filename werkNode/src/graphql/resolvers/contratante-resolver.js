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
    /**
   * Crea un perfil Tipo: Contratante.
   *
   * @param {Object} input Objeto completo de información del perfil.
   * @return {Object} union PerfilContratante.
   Descripcion*/
    async creandoPerfilContratante(_,{ input }, { werkModels }){
      //Validar el inicio de sesion

      //Falta data validation
      try {
        const result = await new werkModels.Contratante(input).save();
        return result;
      } catch (e) {
        throw new Error('Error al crear el perfil');
      }
    },
    /**
   * Actualiza un perfil Tipo: Contratante.
   *
   * @param {number} id El id del documento.
   * @param {Object} input Objeto completo de información del perfil.
   * @return {Object} union PerfilContratante.
   Descripción*/
    async actualizandoPerfilContratante(_,{ id, input }, { werkModels }){
      //Actualiza todos los embedded objects dentro de un documento, si una propiedad
      //de un objeto embedded este lo pasará a nulo... pero si no se pasa todo el objeto
      //en si, no pasa nada,,, no lo borra
      try {
        let contratanteActualizado = await werkModels.Contratante.findByIdAndUpdate(
          { _id: id },
            input,
              { new: true }
        );
        return contratanteActualizado;
      } catch (err) {
        //console.dir(err);
        //Mandar a loggear este error - Pendiente
        throw new Error('Error al actualizar el perfil');
      }
    }

  }
}
