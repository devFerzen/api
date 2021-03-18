import glob from 'glob';
import { makeExecutableSchema, mergeTypeDefs, mergeResolvers } from 'graphql-tools';

import usuarioQueries from './queries/usuario-queries';
import objetoWerkQueries from './queries/objetoWerk-queries';
import portafolioQueries from './queries/portafolio-queries';
import contratanteQueries from './queries/contratante-queries';

import globalTypes from './queries/global-types';

import usuarioResolvers from './resolvers/usuario-resolver';
import objetoWerkResolvers from './resolvers/objetoWerk-resolver';
import portafolioResolvers from './resolvers/portafolio-resolver';
import contratanteResolvers from './resolvers/contratante-resolver';


const typeDefs = mergeTypeDefs([usuarioQueries,
                                objetoWerkQueries,
                                portafolioQueries,
                                contratanteQueries,
                                globalTypes,
                              ]);
const resolver = mergeResolvers([usuarioResolvers,
                                objetoWerkResolvers,
                                portafolioResolvers,
                                contratanteResolvers
                              ]);

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolver
});
