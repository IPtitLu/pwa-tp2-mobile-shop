import User from "../models/User.js";
import Article from "../models/Article.js";

const Users = {
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send({ error: "Error fetching users from database" });
    }
  },
  getByUsername: async (req, res) => {
    const username = req.params.username;
    try {
      const user = await User.findOne({ pseudo: username } )
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: "Error fetching user from database" });
    }
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      res.send(user);
    } catch (error) {
      res.status(500).send({ error: "Error fetching user from database" });
    }
  },
  addToCart: async (req, res) => {
    const userId = req.params.userId;
    const articleId = req.params.articleId;

        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send({ error: "User not found" });
            }
            user.cart.push(articleId);
            await user.save();
            return res
                .status(200)
                .send({ message: "Article added to cart successfully" });
        } catch (error) {
            res.status(500).send({
                error: "Erreur adding article to database",
            });
        }
    },
    deleteFromCart: async (req, res) => {
      const userId = req.params.userId;
      const articleId = req.params.articleId;
  
          try {
              const user = await User.findById(userId);
              if (!user) {
                  return res.status(404).send({ error: "User not found" });
              }
              user.cart.remove(articleId);
              await user.save();
              return res
                  .status(200)
                  .send({ message: "Article delleted from cart successfully" });
          } catch (error) {
              res.status(500).send({
                  error: "Erreur delete article from database",
              });
          }
      }
};

export default Users;
