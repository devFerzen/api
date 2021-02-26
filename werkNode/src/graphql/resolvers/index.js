import { usuarioResolver } from './usuario-resolver'; //verificar esta linea error (node:15140 ExperimentalWarning)
import { objetoWerkResolver } from './objetoWerk-resolver';
import { portafolioResolver } from './portafolio-resolver';

//Desarrollo futuro: en los resolvers añadir comportamiento de loginUsuario
//usuarios bloqueados o semi-bloqueados

export const rootResolver =  {
  ...usuarioResolver,
  ...objetoWerkResolver,
  ...portafolioResolver
};
