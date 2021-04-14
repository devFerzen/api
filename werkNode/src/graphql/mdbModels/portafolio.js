import { Schema, model } from 'mongoose';

const portafolioSchema = new Schema({
  titulo: { type: String, maxlength:40, required: true },
  descripcion: { type: String },
  werker_id: { type: Schema.Types.ObjectId, ref: 'objetoWerk' },
  urls: [{ type: String }],
  favs: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  vistas: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const portafolio = model('portafolio', portafolioSchema);
export default portafolio;
