import gql from 'graphql-tag';

export const WERK_OBJECT_MUTATE = gql  `
mutation creandoObjetoWerk($input: ObjWerkInput!){
  creandoObjetoWerk(input: $input){
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
      areasDeEspecialidad
      costo{
        min
        max
      }
    },
    ... on Anuncio {
      titulo
      areasDeEspecialidad
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
