import Article from '../models/Article.js'

const Articles = {
  getAll: async (req, res) => {
    try {
      const articles = await Article.find();
      res.send(articles);
    } catch (error) {
      res.status(500).send({ error: "Error fetching articles from database" });
    }
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    try {
      const article = await Article.findById(id);
      if (!article) {
        return res.status(404).send({ error: "Article not found" });
      }
      res.send(article);
    } catch (error) {
      res.status(500).send({ error: "Error fetching article from database" });
    }
  }
}

export default Articles;