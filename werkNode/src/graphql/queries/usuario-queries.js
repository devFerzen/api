import gql from 'graphql-tag';
/*Pendiente poner sobrenombre en user, el rol estará en el field werker*/

const usuarioType = gql `

  type _obj_werk_fav_like {
    id: String
    tipo: String
  }

  type User {
    _id: ID
    sobreNombre: String!
    correo: String!
    password: String!
    werker: _werker
    obj_werk_fav: [_obj_werk_fav_like]
    obj_werk_like: [_obj_werk_fav_like]
    smart: _smart
    datos_facturacion: [_datos_facturacion]
    categorizaciones_contratante: [_categorizacion]
    tags_contratante: [_tag]
    ip: String
    estado: Int
  }

  type Query {
    userActivo: User
  }

  type Mutation {
    creandoUsuario(input: UsuarioInput): User
    loginUsuario(correo: String!, password: String!): User
    removeFavLike(id: String!, tipo: ObjetoWerkTipoType!, accion: accionSocialType!): String!
    addFavLike(id: String!, tipo: ObjetoWerkTipoType!, accion: accionSocialType!): String!
  }

  input UsuarioInput {
    sobreNombre: String!
    correo: String!
    password: String!
    codigo_promocional: String
    werker: input_werker
  }

`;


module.exports = usuarioType;
