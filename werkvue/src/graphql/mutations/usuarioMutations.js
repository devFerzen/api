import gql from 'graphql-tag';

export const USUARIO_NEW = gql  `
  mutation creandoUsuario($input: UsuarioInput!){
    creandoUsuario(input: $input){
      sobreNombre
      correo
      werker{
        id
        tipo
      }
      obj_werk_fav{
        id
        tipo
      }
      obj_werk_like{
        id
        tipo
      }
      smart{
        estatus
        fecha
        vencimiento
      }
      estado
    }
  }
`;

export const USUARIO_LOGIN = gql  `
  mutation LOGIN_USUARIO( $correo: String!, $password: String! ){
    loginUsuario( correo: $correo, password: $password ){
      sobreNombre
      correo
      werker{
        id
        tipo
      }
      obj_werk_fav{
        id
        tipo
      }
      obj_werk_like{
        id
        tipo
      }
      smart{
        estatus
        fecha
        vencimiento
      }
      estado
    }
  }
`;
