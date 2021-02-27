import { usuarioResolver } from './usuario-resolver'; //verificar esta linea error (node:15140 ExperimentalWarning)
import { objetoWerkResolver } from './objetoWerk-resolver';
import { portafolioResolver } from './portafolio-resolver';
import { contratanteResolver } from './portafolio-resolver';

export const rootResolver =  {
  ...usuarioResolver,
  ...objetoWerkResolver,
  ...portafolioResolver,
  ...contratanteResolver
};
