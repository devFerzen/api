import glob from 'glob';
import { makeExecutableSchema, mergeTypeDefs, mergeResolvers } from 'graphql-tools';
import { rootResolver } from './resolvers';

import usuarioQueries from './queries/usuario-queries';
import objetoWerkQueries from './queries/objetoWerk-queries';
import portafolioQueries from './queries/portafolio-queries';
import globalTypes from './queries/global-types';
import estatusCategoriesTypes from './queries/estatusCategories-types';

import usuarioResolvers from './resolvers/usuario-resolver';
import objetoWerkResolvers from './resolvers/objetoWerk-resolver';
import portafolioResolvers from './resolvers/portafolio-resolver';


const typeDefs = mergeTypeDefs([usuarioQueries,
                                objetoWerkQueries,
                                portafolioQueries,
                                globalTypes,
                                estatusCategoriesTypes
                              ]);
const resolver = mergeResolvers([usuarioResolvers,
                                objetoWerkResolvers,
                                portafolioResolvers
                              ]);

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolver
});
