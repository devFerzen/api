export const SEGURO_AUTH_TOKEN = "*_6&&hc?^(GJ87qoO[HWaA{D%p@nnL";
export const SEGURO_REFRESH_TOKEN = "*_6&&hc?^(GJ87qoO[HWaA{D%p@nnL";
export const UPLOAD_IMAGE_PATH = function(objetoTipo) {
  if(objetoTipo === 'Anuncio'){return '/imagenes/anuncio' };
  if(objetoTipo === 'PortafolioImagen'){return '/imagenes/portafolio/imagenes' };
  if(objetoTipo === 'PortafolioArchivo'){return '/imagenes/portafolio/archivos' };
  return '/imagenes/perfil';
};
