import gql from 'graphql-tag';

export const CONTRATANTE_UPDATE_MUTATE = gql `

  mutation actualizandoPerfilContratante($params: ParamsContratanteInput!){
    actualizandoPerfilContratante(params: $params){
      informacion_personal{
        nombre{
          nombres
          apellidos
          }
        nacimiento
        genero
      }
      werker{
        empresa_id
        ubicacion{
          pais
          estado
          ciudad
        }
      }
      tipo_perfil
      negocio{
        nombre
        descripcion
        anos_activos
        telefono
        direccion
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
      categorizaciones_interes{
        tipo
        nombre
      }
      tags_interes{
        nombre
        experiencia
      }
    }
  }

`;

export const CONTRATANTE_NEW_MUTATE = gql `

  mutation creandoPerfilContratante($params: ParamsContratanteInput!){
    creandoPerfilContratante(params: $params){
      id
      informacion_personal{
        nombre{
          nombres
          apellidos
          }
        nacimiento
        genero
      }
      werker{
        empresa_id
        ubicacion{
          pais
          estado
          ciudad
        }
      }
      tipo_perfil
      negocio{
        nombre
        descripcion
        anos_activos
        telefono
        direccion
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
      categorizaciones_interes{
        tipo
        nombre
      }
      tags_interes{
        nombre
        experiencia
      }
    }
  }

`;
