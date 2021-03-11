import { Schema, model } from 'mongoose';

const categoriasArraySchema = new Schema({
  _id: false,
  tipo: { type: String },
  nombre: { type: String },
});

const tagsArraySchema = new Schema({
  _id: false,
  nombre: { type: String },
  experiencia: { type: String },
});

const redesSocialesArraySchema = new Schema({
  _id: false,
  red: { type: String },
  url: { type: String },
});

const objetosWerkArraySchema = new Schema({
  _id: false,
  tipo: { type: String },
  id: { type: String }
});

let correoRegexp = /.+\@.+\..+/;

const objetoWerkSchema = new Schema({
  titulo: { type: String, maxlength:40 },
  descripcion: { type: String },
  informacion_personal: {
    nombre:{
      nombres: { type: String },
      apellidos: { type: String }
    },
    nacimiento: { type: Date },
    genero: { type: String, lowercase: true, enum: ['masculino', 'femenino'] }
  },
  habilidades_req: { type: [String], default: undefined },
  prestaciones_beneficios: { type: [String], default: undefined },
  costo: {
    min: { type: Number },
    max: { type: Number }
  },
  negocio: {
    nombre: { type: String, default: undefined },
    descripcion: { type: String, default: undefined },
    anos_activos: { type: String, default: undefined } //el tipo de valor es correcto para esta propiedad???
  },
  categorizaciones: { type: [categoriasArraySchema], default: undefined},
  tags: { type: [tagsArraySchema], default: undefined},
  areasDeEspecialidad: { type: [String], default: undefined },
  portafolios: { type: [Schema.Types.ObjectId], ref: 'portafolio', default: undefined},
  contacto: {
    telefonos: {
      fijo: { type: String },
      celular: { type: String },
    },
    redes_sociales: { type: [redesSocialesArraySchema], default: undefined},
    url: { type: String },
    correo: { type: String, match: correoRegexp },
  },
  werker: {
    id: { type: String, default: undefined },
    nombre:{
      nombres: { type: String, default: undefined },
      apellidos: { type: String, default: undefined }
    },
    factura: { type: Boolean, default: false },
    ubicacion: {
      pais: { type: String },
      estado: { type: String },
      ciudad: { type: String },
    },
    objetos_werk: { type: [objetosWerkArraySchema], default: undefined}
  },
  objeto_werk: {
    tipo: { type: String, required: true, enum: ['vacante', 'freelance', 'anuncio'] },
    // esquemas { 1 => 'Por proyecto (Única ocasión)', 2 => 'Por proyecto (Recurrente o ampliado)', 3 => 'Contrato Indefinido. - Honorarios' }
    esquemas: [{ type: Number, enum: [1, 2, 3] }],
    // capacidad { 1 => 'En oficinas de forma presencial ', 2 => 'Home Office - 100% Virtual', 3 => 'Flex (Home Office y Oficina)' }
    capacidad: [{ type: Number, enum: [1, 2, 3] }],
    estatus: {
      tipo: { type: Boolean, default: false },
      razon: String,
      descripcion: String,
      hardBane: Boolean
    },
    smart: {
      estatus: { type: Number },
      fecha: { type: Date },
      vencimiento: { type: Date },
    },
    destacado: {
      estatus: { type: Number },
      fecha: { type: Date },
      vencimiento: { type: Date },
    },
    favs: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    vistas: { type: Number, default: 0 }
  },
  schema_version: { type: Number }
},
  { timestamps: true }
);

objetoWerkSchema.index({ 'categorizaciones.nombre': 1 });
const objetoWerk = model('objetoWerk', objetoWerkSchema);
export default objetoWerk;
