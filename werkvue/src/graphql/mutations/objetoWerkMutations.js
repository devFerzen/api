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
  mutation reportObjetoWerk($Params: paramsQueryInput!, $EstadoInput: EstadoInput!){
    reportObjetoWerk( Params: $Params, Estado: $EstadoInput)
  }
`;

export const WERKOBJECT_LIKING = gql `
  mutation likingObjetoWerk( $Params: paramsQueryInput!, $action: String! ){
    likingObjetoWerk( Params: $Params, action: $action )
  }
`;

export const WERKOBJECT_FAVORING = gql `
  mutation favoringObjetoWerk( $Params: paramsQueryInput!, $action: String! ){
    favoringObjetoWerk( Params: $Params, action: $action )
  }
`;
