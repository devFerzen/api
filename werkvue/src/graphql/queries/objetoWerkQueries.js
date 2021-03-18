import gql from "graphql-tag";

export const WERK_OBJECT_QUERY = gql `
  query qObjetWerkView($params_query: paramsQueryInput!){
    qObjetWerkView(params_query: $params_query){

      ... on FreelanceResult{
        id
        descripcion
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
        werker {
          factura
          ubicacion{
            pais
            estado
            ciudad
          }
          objetos_werk {
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
            razon
            descripcion
          }
          likes
          vistas
        }


        informacion_personal{
          nombre{
            nombres
            apellidos
          }
          nacimiento
          genero
        }
        areas_de_especialidad
        negocio{
          nombre
          descripcion
          anos_activos
        }
        costo{
          min
          max
        }
      },

      ... on AnuncioResult {
        id
        descripcion
        categorizaciones{
          tipo,
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
        werker {
          id
          nombre{
            nombres
            apellidos
          }
          factura
          ubicacion{
            pais
            estado
            ciudad
          }
        }
        objeto_werk{
          tipo
          esquemas
          capacidad
          estatus{
            tipo
            razon
            descripcion
          }
          likes
          vistas
        }


        titulo
        costo{
          min
          max
        }
        areas_de_especialidad
      },

      ... on VacanteResult {
        id
        descripcion
        categorizaciones{
          tipo,
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
        werker {
          nombre{
            nombres
            apellidos
          }
          ubicacion{
            pais
            estado
            ciudad
          }
        }
        objeto_werk{
          tipo
          esquemas
          capacidad
          estatus{
            tipo
            razon
            descripcion
          }
          likes
          vistas
        }

        titulo
        costo{
          min
          max
        }
        habilidades_req
        prestaciones_beneficios
      },

      ... on BannedResult {
        objeto_werk {
          tipo
          esquemas
          capacidad
          estatus {
            tipo
            razon
            descripcion
            hardBane
          }
          likes
          vistas
        }
      }

    }
  }
`;

export const WERK_OBJECT_LIST_QUERY = gql `
  query qObjectWerk($params_query: paramsQueryInput!){
    qObjectWerk(params_query: $params_query){
      __typename
      id
      descripcion
      objeto_werk{
        tipo
        esquemas
        capacidad
        estatus{
          tipo
        }
        likes
        vistas
      }
      ... on Freelance{
        informacion_personal{
          nombre{
            nombres
            apellidos
          }
        }
        costo{
          min
          max
        }
      },
      ... on Anuncio {
        titulo
        costo{
          min
          max
        }
      },
      ... on Vacante {
        titulo
      }
    }
  }

`
