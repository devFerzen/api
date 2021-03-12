import { Schema, model } from 'mongoose';

const redesSocialesArraySchema = new Schema({
  _id: false,
  red: { type: String, enum: ['faTwitter','faLinkedin','faWhatsapp','faInstagram','faFacebookSquare'] },
  url: { type: String },
});

const categoriasContratanteArraySchema = new Schema({
  _id: false,
  tipo: { type: String },
  nombre: { type: String },
});

const tagsContratanteArraySchema = new Schema({
  _id: false,
  nombre: { type: String },
  experiencia: { type: String },
});

let correoRegexp = /.+\@.+\..+/;

const reclutadorSchema = new Schema({
  informacion_personal: {
    nombre:{
      nombres: { type: String },
      apellidos: { type: String }
    },
    nacimiento: { type: Date },
    genero: { type: String, lowercase: true, enum: ['masculino', 'femenino'] }
  },
  werker: {
    empresa_id: { type: String, default: undefined },
    ubicacion: {
      pais: { type: String, default:'MEX' },
      estado: { type: String },
      ciudad: { type: String }
    }
  },
  // tipo_perfil { 1 => 'PERSONAL INDEPENDIENTE', 2 => 'DUEÑO DE NEGOCIO', 3 => 'RECLUTADOR / HEADHUNTER' }
  tipo_perfil: { type: Number, default: 1, lowercase: true, enum: [ 1, 2, 3] },
  negocio: {
    nombre: { type: String, default: undefined },
    descripcion: { type: String, default: undefined },
    // anos_activos { 1 => 'Por definir', 2 => 'Por definir', 3 => 'Por definir' }
    anos_activos: { type: Number, default: undefined, enum: [1, 2, 3] }, //el tipo de valor es correcto para esta propiedad???
    telefono: { type: String, default: undefined},
    direccion: { type: String, default: undefined},
  },
  contacto: {
    telefonos: {
      fijo: { type: String },
      celular: { type: String },
    },
    redes_sociales: { type: [redesSocialesArraySchema], default: undefined},
    url: { type: String },
    correo: { type: String, match: correoRegexp },
  },
  categorizaciones_interes: { type: [categoriasContratanteArraySchema], default: undefined },
  tags_interes: { type: [tagsContratanteArraySchema], default: undefined }
  },
  { timestamps: true }
);

const reclutador = new model('reclutador', reclutadorSchema);
export default reclutador;
