import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  prix: { type: Number, required: true },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie" },
  nom: { type: String, required: true },
  image: { type: String, required: true }
});

export default mongoose.model("Article", ArticleSchema);