import gql from 'graphql-tag';

export const WERKOBJECT_NEW = gql  `
  mutation creandoObjetoWerk( $Params: ParamsObjetoWerkInput! ){
    creandoObjetoWerk( Params: $Params ){
      __typename
      id,
      descripcion,
      categorizaciones{
          tipo
          nombre
        }
        tags{
          nombre
          experiencia
        }
        contacto{
          telefonos{
            fijo
            celular
          }
          redes_sociales{
            red
            url
          }
          url
          correo
        }
        werker{
          id
          nombre {
            nombres
            apellidos
          }
          factura
          ubicacion{
            pais
            estado
            ciudad
          }
          objetos_werk{
            tipo
            id
          }
        }
        objeto_werk{
          tipo
          esquemas
          capacidad
          estatus{
            tipo
          }
        }
      ... on Freelance{
        informacion_personal{
          nombre{
            nombres
            apellidos
          }
          nacimiento
          genero
        }
        negocio{
          nombre
          descripcion
          anos_activos
        }
        areas_de_especialidad
        costo{
          min
          max
        }
      },
      ... on Anuncio {
        titulo
        areas_de_especialidad
        costo{
          min
          max
        }

      },
      ... on Vacante {
        titulo
        habilidades_req
        prestaciones_beneficios
      }
    }
  }

`;

export const WERKOBJECT_UPDATE = gql `
  mutation actualizandoObjetoWerk( $Params: ParamsObjetoWerkInput! ){
    actualizandoObjetoWerk( Params: $Params ){
      __typename
      descripcion,
      categorizaciones{
          tipo
          nombre
        }
        tags{
          nombre
          experiencia
        }
        contacto{
          telefonos{
            fijo
            celular
          }
          redes_sociales{
            red
            url
          }
          url
          correo
        }
        werker{
          id
          nombre {
            nombres
            apellidos
          }
          factura
          ubicacion{
            pais
            estado
            ciudad
          }
          objetos_werk{
            tipo
            id
          }
        }
        objeto_werk{
          tipo
          esquemas
          capacidad
          estatus{
            tipo
          }
        }
      ... on Freelance{
        informacion_personal{
          nombre{
            nombres
            apellidos
          }
          nacimiento
          genero
        }
        negocio{
          nombre
          descripcion
          anos_activos
        }
        areas_de_especialidad
        costo{
          min
          max
        }
      },
      ... on Anuncio {
        titulo
        areas_de_especialidad
        costo{
          min
          max
        }

      },
      ... on Vacante {
        titulo
        habilidades_req
        prestaciones_beneficios
      }
    }
  }
`;

export const WERKOBJECT_ESTATUS = gql `
  mutation activarDesactivarObjetoWerk( $Params: ParamsObjetoWerkInput! ){
    activarDesactivarObjetoWerk( Params: $Params )
  }
`;

export const WERKOBJECT_POSTULANTES = gql `
  mutation accionesPostulantes( $Params: ParamsPostulantesInput!, $accion: String!, $idVacante: String ){
    accionesPostulantes( Params: $Params, accion: $accion, idVacante: $idVacante )
  }
`;

export const REPORT_ACTIONS = gql `
  mutation reportObjetoWerk($Params: paramsInput!, $EstadoInput: EstadoInput!){
    reportObjetoWerk( Params: $Params, Estado: $EstadoInput)
  }
`;

export const WERKOBJECT_LIKING = gql `
  mutation likingObjetoWerk( $Params: paramsInput!, $action: String! ){
    likingObjetoWerk( Params: $Params, action: $action )
  }
`;

export const WERKOBJECT_FAVORING = gql `
  mutation favoringObjetoWerk( $Params: paramsInput!, $action: String! ){
    favoringObjetoWerk( Params: $Params, action: $action )
  }
`;

export const WERKOBJECT_IMAGES_NEW = gql `
  mutation newImageObjetoWerk( $ImagesParams: input_imagenes!, $id: String! ){
    newImageObjetoWerk( ImagesParams: $ImagesParams, id: $id )
  }
`;

export const WERKOBJECT_IMAGES_DELETE = gql `
  mutation deletePositionImagesObjetoWerk( $ImagesParams: input_imagenes!, $id: String! ){
    deletePositionImagesObjetoWerk( ImagesParams: $ImagesParams, id: $id )
  }
`;

export const WERKOBJECT_IMAGES_UPDATEPOSITION = gql `
  mutation updatePositionImagesObjetoWerk( $id: String!, $orign: Int!, $target: Int! ){
    updatePositionImagesObjetoWerk( id: $id, origin: $origin, target: $target )
  }
`;
