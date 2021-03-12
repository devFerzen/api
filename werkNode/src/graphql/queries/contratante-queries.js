import gql from 'graphql-tag';

const contratanteType = gql `

  type PerfilContratante {
    id: ID
    informacion_personal: _informacion_personal
    werker: _werker
    tipo_perfil: Int
    negocio: _negocio
    contacto: _contacto
    categorizaciones_interes: [_categorizacion]
    tags_interes: [_tag]
  }

  type Query {
    informacionPerfilContratante( paramsPerfil: paramsPerfilViewInput! ): PerfilContratante
  }

  input paramsPerfilViewInput {
    id: String
  }

  type Mutation {
    creandoPerfilContratante( params: ParamsContratanteInput! ): PerfilContratante!
    actualizandoPerfilContratante( params: ParamsContratanteInput! ): PerfilContratante!
  }

  input ParamsContratanteInput {
    id: String,
    input: ParamsPerfilInput!
  }

  input ParamsPerfilInput {
    informacion_personal: input_informacion_personal
    werker: input_werker
    tipo_perfil: Int
    negocio: input_negocio
    contacto: input_contacto
    categorizaciones_interes: [input_categorizacion]
    tags_interes: [input_tag]
  }
`;

module.exports = contratanteType;
