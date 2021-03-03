import { Schema, model } from 'mongoose';

const facturacionArraySchema = new Schema({
  nombre: { type: String },
  rfc: { type: String },
  calle: { type: String },
  no_interior: { type: String },
  no_exterior: { type: String },
  colonia: { type: String },
  municipio: { type: String },
  estado: { type: String },
  codigo_postal: { type: String },
  correo: { type: String },
  telefono: { type: String },
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

const usuarioSchema = new Schema({
  sobreNombre: { type: String, maxlength:30, unique: true, required: true },
  correo: { type: String, maxlength:50, unique:true, required:true },
  password: { type: String, maxlength:1024, required:true },
  werker: {
    tipo: { type: String, required: true },
    id: { type: Schema.Types.ObjectId, ref: 'objetoWerk'},
  },
  obj_werk_fav: [{
    id: { type: String },
    tipo: { type: String },
  }],
  obj_werk_like: [{
    id: { type: String },
    tipo: { type: String },
  }],
  smart:{
    estatus: { type: Number },
    fecha: { type: Date },
    vencimiento: { type: Date }
  },
  ip: { type:String },
  estado: { type: Boolean, default: true },
  token_count: { type:Number, default: 0 },
  schema_version: { type: Number },



  datos_facturacion: { type: [facturacionArraySchema], default: undefined},
  categorizaciones_contratante: { type: [categoriasContratanteArraySchema], default: undefined},
  tags_contratante: { type: [tagsContratanteArraySchema], default: undefined},
  vacantes: { type: [String], default: undefined },
},
  { timestamps: true }
);

const usuario = model('usuario', usuarioSchema);
export default usuario;
