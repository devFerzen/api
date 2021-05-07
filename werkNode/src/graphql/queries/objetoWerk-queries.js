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
    imagenes: [_imagenes]
  }

  type Freelance implements IObjetoWerk {
    id: ID
    descripcion: String
    categorizaciones: [_categorizacion]
    tags: [_tag]
    werker: _werker
    contacto: _contacto
    objeto_werk: _objeto_werk
    imagenes: [_imagenes]

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
    imagenes: [_imagenes]

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
    imagenes: [_imagenes]

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
    imagenes: [_imagenes]

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
    imagenes: [_imagenes]

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
    imagenes: [_imagenes]

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
    qObjetWerkView(params_query: paramsInput!): ObjetoWerkViewData
    qObjectWerkList(params_query: paramsInput!): [IObjetoWerk]
  }

  type Mutation {
    creandoObjetoWerk( Params: ParamsObjetoWerkInput! ): IObjetoWerk
    actualizandoObjetoWerk( Params: ParamsObjetoWerkInput! ): IObjetoWerk
    eliminandoObjetoWerk(id: String!): String
    activarDesactivarObjetoWerk(Params: ParamsObjetoWerkInput!): String!
    accionesPostulantes( Params: ParamsPostulantesInput!, accion: String!, idVacante: String ): String!
    reportObjetoWerk( Params: paramsInput!, Estado: EstadoInput! ): String!
    likingObjetoWerk( Params: paramsInput!, action: String! ): String!
    favoringObjetoWerk( Params: paramsInput!, action: String! ): String!
    newImageObjetoWerk( ImagesParams: input_imagenes!, id: String! ): String!
    updatePositionImagesObjetoWerk( id: String!, origin: Int!, target: Int!): String!
    deletePositionImagesObjetoWerk( ImagesParams: input_imagenes!, id: String! ): String!
  }

  input paramsInput {
    id_list: [String],
    tipo_objeto: String
  }

  input EstadoInput {
    tipo: Boolean,
    razon: String,
    descripcion: String,
    hardBane: Boolean
  }

  input ParamsObjetoWerkInput {
    id: String
    input: ObjWerkInput!
  }

  input ParamsPostulantesInput {
    idPerfil: String,
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
