import { Schema, model } from 'mongoose';

const redesSocialesArraySchema = new Schema({
  _id: false,
  red: { type: String },
  url: { type: String },
});

const reclutadorSchema = new Schema({
  informacion_personal: {
    nombre:{
      nombres: { type: String },
      apellidos: { type: String }
    },
    nacimiento: { type: Date },
    genero: { type: String }
  },
  werker: {
    empresa_id: { type: String, default: undefined },
    factura: { type: Boolean, default: false },
    ubicacion: {
      pais: { type: String, default:'MEX' },
      estado: { type: String },
      ciudad: { type: String }
    }
  },
  tipo_perfil: { type: String, default: 1 },
  negocio: {
    nombre: { type: String, default: undefined },
    descripcion: { type: String, default: undefined },
    anos_activos: { type: String, default: undefined},
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
    correo: { type: String },
  }
  },
  { timestamps: true }
);

const reclutador = new model('reclutador', reclutadorSchema);
export default reclutador;
