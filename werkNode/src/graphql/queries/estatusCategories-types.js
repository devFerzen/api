import gql from 'graphql-tag';

const estatusCategoriesTypes = gql `
  enum ObjetoWerkEstatusType {
    Activo
    Inactivo
  }

  enum ObjetoWerkTipoType {
    Anuncio
    Freelance
    Vacante
  }

  enum accionSocialType {
    Favorito
    Like
  }


`;


module.exports = estatusCategoriesTypes;

/*
enum EsquemasType {
  Por proyecto -Única ocasión-
  Por proyecto -Recurrente o ampliado-
  Contrato Indefindo -Honorarios-
}

enum CapacidadType {
  En oficinas de forma presencial
  Home Office -100% Virtual-
  Flex -Home Office y Oficina-
}
*/
