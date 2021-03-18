import gql from 'graphql-tag';

const objetoWerkType = gql `

  union ObjetoWerkViewData = FreelanceResult | AnuncioResult | VacanteResult | BannedResult

  interface IObjetoWerk {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk
  }

  type Freelance implements IObjetoWerk {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    informacion_personal: _informacion_personal
    areas_de_especialidad: [String]
    costo: _costo
    negocio: _negocio
  }

  type FreelanceResult {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    informacion_personal: _informacion_personal
    areas_de_especialidad: [String]
    costo: _costo
    negocio: _negocio
  }

  type Anuncio implements IObjetoWerk {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    titulo: String
    areas_de_especialidad: [String]
    costo: _costo
  }

  type AnuncioResult {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    titulo: String
    areas_de_especialidad: [String]
    costo: _costo
  }

  type Vacante implements IObjetoWerk {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    titulo: String
    habilidades_req: [String]
    prestaciones_beneficios: [String]
    postulantes: _postulantes
  }

  type VacanteResult {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk

    costo: _costo
    titulo: String
    habilidades_req: [String]
    prestaciones_beneficios: [String]
    postulantes: _postulantes
  }

  type PortafolioResult {
    id: ID
    titulo: String
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    contacto: _contacto
    werker: _werker
    objeto_werk: _objeto_werk


  }

  type BannedResult {
    objeto_werk: _objeto_werk_hardbane
  }

  type Query {
    Prueba: String
    qObjetWerkView(params_query: paramsQueryInput!): ObjetoWerkViewData
    qObjectWerk(params_query: paramsQueryInput!): [IObjetoWerk]
  }

  input paramsQueryInput {
    id_list: [String],
    tipo_objeto: String
  }

  type Mutation {
    creandoObjetoWerk( params: ParamsObjetoWerkInput! ): IObjetoWerk
    actualizandoObjetoWerk( params: ParamsObjetoWerkInput! ): IObjetoWerk
    eliminandoObjetoWerk(id: String!): String
    activarDesactivarObjetoWerk(params: ParamsObjetoWerkInput!): String!
    accionesPostulantes( params: ParamsPostulantesInput!, accion: String!, idVacante: String! ): String!
    reportObjetoWerk(id: String!, razon: String!, descripcion: String ): String!
  }

  input ParamsObjetoWerkInput {
    id: String
    input: ObjWerkInput!
  }

  input ParamsPostulantesInput {
    id: String,
    nombres: input_nombre
  }

  input ObjWerkInput {
    descripcion: String
    categorizaciones: [input_categorizacion]
    tags: [input_tag]
    werker: input_werker
    objeto_werk: input_objeto_werk

    habilidades_req: [String]
    prestaciones_beneficios: [String]
    postulantes: input_postulantes
    titulo: String

    costo: input_costo
    negocio: input_negocio
    contacto: input_contacto

    informacion_personal: input_informacion_personal
    areas_de_especialidad: [String]

  }

`;

module.exports = objetoWerkType;
