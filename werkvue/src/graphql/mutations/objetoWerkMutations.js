import gql from 'graphql-tag';

export const WERKOBJECT_NEW_MUTATE = gql  `
  mutation creandoObjetoWerk( $params: ParamsObjetoWerkInput! ){
    creandoObjetoWerk( params: $params ){
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

export const WERKOBJECT_UPDATE_MUTATE = gql `
  mutation actualizandoObjetoWerk( $params: ParamsObjetoWerkInput! ){
    actualizandoObjetoWerk( params: $params ){
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
  mutation activarDesactivarObjetoWerk( $params: ParamsObjetoWerkInput! ){
    activarDesactivarObjetoWerk( params: $params )
  }
`;

export const WERKOBJECT_POSTULANTES = gql `
  mutation accionesPostulantes( $params: ParamsPostulantesInput!, $accion: String!, $idVacante: String! ){
    accionesPostulantes( params: $params, accion: $accion, idVacante: $idVacante )
  }
`;
