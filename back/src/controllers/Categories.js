import Categorie from '../models/Categorie.js'

const Categories = {
  getAll: async (req, res) => {
    try {
      const categories = await Categorie.find();
      res.send(categories);
    } catch (error) {
      res.status(500).send({ error: "Error fetching categories from database" });
    }
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    try {
      const categorie = await Categorie.findById(id);
      if (!categorie) {
        return res.status(404).send({ error: "Categorie not found" });
      }
      res.send(categorie);
    } catch (error) {
      res.status(500).send({ error: "Error fetching categorie from database" });
    }
  }
}

export default Categories;