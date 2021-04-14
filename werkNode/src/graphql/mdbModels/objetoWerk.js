import { Schema, model } from 'mongoose';

const categoriasArraySchema = new Schema({
  _id: false,
  tipo: { type: String },
  nombre: { type: String },
});

const tagsArraySchema = new Schema({
  _id: false,
  nombre: { type: String },
  // anos_activos { 1 => 'Menor a 1 año', 2 => 'Entre 1 y 3 años', 3 => 'Entre 3 a 5 años', 4 => 'Mayor a 5 años', 5 => 'Especialista Certificado' }
  experiencia: { type: Number, enum: [1,2,3,4,5] },
});

const redesSocialesArraySchema = new Schema({
  _id: false,
  red: { type: String, enum: ['faTwitter','faLinkedin','faWhatsapp','faInstagram','faFacebookSquare'] },
  url: { type: String },
});

const objetosWerkArraySchema = new Schema({
  _id: false,
  tipo: { type: String, enum:['Anuncio'] },
  id: { type: String }
});

const postulanteArraySchema = new Schema({
  _id: false,
  idPerfil: { type: String },
  nombres: {
    nombres: { type: String },
    apellidos: { type: String }
  }
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
    // anos_activos { 1 => 'Menor a 1 año', 2 => 'Entre 1 y 3 años', 3 => 'Entre 3 a 5 años', 4 => 'Mayor a 5 años' }
    anos_activos: { type: Number, default: undefined, enum: [1, 2, 3, 4] } //el tipo de valor es correcto para esta propiedad???
  },
  categorizaciones: { type: [categoriasArraySchema], default: undefined},
  tags: { type: [tagsArraySchema], default: undefined},
  areas_de_especialidad: { type: [String], default: undefined },
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
    tipo: { type: String, required: true, enum: ['Vacante', 'Freelance', 'Anuncio'] },
    // esquemas { 1 => 'Por proyecto (Única ocasión)', 2 => 'Por proyecto (Recurrente o ampliado)', 3 => 'Contrato Indefinido. - Honorarios' }
    esquemas: [{ type: Number, enum: [1, 2, 3] }],
    // capacidad { 1 => 'En oficinas de forma presencial ', 2 => 'Home Office - 100% Virtual', 3 => 'Flex (Home Office y Oficina)' }
    capacidad: [{ type: Number, enum: [1, 2, 3] }],
    estatus: {
      tipo: {
        type: Boolean,
        default: false
      },
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
  postulantes: { type: [postulanteArraySchema] },
  schema_version: { type: Number }
},
  { timestamps: true }
);

objetoWerkSchema.index({ 'categorizaciones.nombre': 1 });
const objetoWerk = model('objetoWerk', objetoWerkSchema);
export default objetoWerk;
