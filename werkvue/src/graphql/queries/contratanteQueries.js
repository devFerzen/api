import gql from 'graphql-tag';

export const CONTRATANTE_INFO_QUERY = gql `
  query informacionPerfilContratante($params: paramsPerfilViewInput!){
    informacionPerfilContratante(paramsPerfil: $params){
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
