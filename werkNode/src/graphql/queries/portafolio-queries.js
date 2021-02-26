import gql from 'graphql-tag';

const portafolioType = gql `

  type Portafolio {
    titulo: String!
    descripcion: String!
    urls: [String]
    werker_id: String!
    favs: Int
    likes: Int
    vistas: Int
  }

  type Query {
    misPortafolios(werker_id: ID!): [Portafolio]
    verPortafolio(id: ID!): Portafolio
  }

  type Mutation {
    creandoPortafolio(input: PortafolioInput): Portafolio
    actualizandoPortafolio(id: String!, input: PortafolioInput): Portafolio
    eliminarPortafolio(id: String!): Portafolio
  }

  input PortafolioInput {
    titulo: String!
    descripcion: String!
    werker_id: String!
    urls: [String]
  }



`;

module.exports = portafolioType;
