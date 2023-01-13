import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const CategorieSchema = new Schema({
  label: {
    type: String,
    default: 0,
  },
  articles:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Article'}
  ]
});

export default mongoose.model("Categorie", CategorieSchema);