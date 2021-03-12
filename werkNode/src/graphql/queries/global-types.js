import gql from 'graphql-tag';

const globalTypes = gql `
  scalar Date

  type _categorizacion {
    tipo: String
    nombre: String
  }

  input input_categorizacion {
    tipo: String
    nombre: String
  }

  type _tag {
    nombre: String
    experiencia: Int
  }

  input input_tag {
    nombre: String
    experiencia: Int
  }

  type _ubicacion{
    pais: String
    estado: String
    ciudad: String
  }

  input input_ubicacion{
    pais: String
    estado: String
    ciudad: String
  }

  type _telefono {
    fijo: String
    celular: String
  }

  input input_telefono {
    fijo: String
    celular: String
  }

  type _werker {
    id: String
    tipo: String
    empresa_id: String
    nombre: _nombre
    factura: Boolean
    ubicacion: _ubicacion
    objetos_werk: [_objetos_werk]
  }

  input input_werker {
    id: String
    tipo: String
    empresa_id: String
    nombre: input_nombre
    factura: Boolean
    ubicacion: input_ubicacion
    objetos_werk: [input_objetos_werk]
  }

  type _objetos_werk {
    tipo: String
    id: String
  }

  input input_objetos_werk {
    tipo: String
    id: String
  }

  type _objeto_werk {
    tipo: String
    esquemas: [Int]
    capacidad: [Int]
    estatus: _estatus
    smart: _smart
    destacado: _destacado
    favs: Int
    likes: Int
    vistas: Int
  }

  input input_objeto_werk {
    tipo: String
    esquemas: [Int]
    capacidad: [Int]
    estatus: input_estatus
    smart: input_smart
    destacado: input_destacado
    favs: Int
    likes: Int
    vistas: Int
  }

  type _objeto_werk_hardbane {
    tipo: String
    esquemas: [Int]
    capacidad: [Int]
    estatus: _estatus_hardbane
    smart: _smart
    destacado: _destacado
    favs: Int
    likes: Int
    vistas: Int
  }

  type _estatus_hardbane {
    tipo: Boolean!
    razon: String
    descripcion: String
    hardBane: Boolean
  }

  input BloqDesbloqInput {
    objeto_werk: input_objeto_werk_hardbane
  }

  input input_objeto_werk_hardbane {
    estatus: input_estatus_hardbane
  }

  input input_estatus_hardbane {
    tipo: Boolean!
    razon: String
    descripcion: String
    hardBane: Boolean
  }

  type _estatus {
    tipo: Boolean!
    razon: String
    descripcion: String
  }

  input input_estatus {
    tipo: Boolean!
    razon: String
    descripcion: String
  }

  type _smart {
    estatus: Int
    fecha: Date
    vencimiento: Date
  }

  input input_smart {
    estatus: Int
    fecha: Date
    vencimiento: Date
  }

  type _destacado {
    estatus: Int
    fecha: Date
    vencimiento: Date
  }

  input input_destacado {
    estatus: Int
    fecha: Date
    vencimiento: Date
  }

  type _datos_facturacion {
    nombre: String
    rfc: String
    calle: String
    no_interior: String
    no_exterior: String
    colonia: String
    municipio: String
    estado: String
    codigo_postal: String
    correo: String
    telefono: String
  }

  type _informacion_personal {
    nombre: _nombre
    nacimiento: Date
    genero: String
  }

  input input_informacion_personal {
    nombre: input_nombre
    nacimiento: Date
    genero: String
  }

  type _nombre {
    nombres: String
    apellidos: String
  }

  input input_nombre {
    nombres: String
    apellidos: String
  }

  type _contacto {
    telefonos: _telefono
    redes_sociales: [_red_social]
    url: String
    correo: String
  }

  input input_contacto {
    telefonos: input_telefono
    redes_sociales: [input_red_social]
    url: String
    correo: String
  }

  type _red_social {
    red: String
    url: String
  }

  input input_red_social {
    red: String
    url: String
  }

  type _costo {
    min: Int
    max: Int
  }

  input input_costo {
    min: Int
    max: Int
  }

  type _negocio {
    nombre: String
    descripcion: String
    anos_activos: Int
    telefono: String
    direccion: String
  }

  input input_negocio {
    nombre: String
    descripcion: String
    anos_activos: Int
    telefono: String
    direccion: String
  }

  enum objetoWerkEnumTypes {
    anuncio
    freelance
    vacante
  }

  enum accionSocialEnumTypes {
    favorito
    like
  }

`;


module.exports = globalTypes;
