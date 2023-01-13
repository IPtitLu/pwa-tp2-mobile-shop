import express from "express";
const app = express();
import mongoose from "mongoose";
import Articles from "./src/controllers/Articles.js";
import Categories from "./src/controllers/Categories.js";
import Users from "./src/controllers/Users.js";
import { Login } from "./src/controllers/Login.js";
import bodyParser from "body-parser";
import auth from "./src/auth/auth.js";
import esm from "esm";
import cors from "cors";

app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://devuser:YNOV1234@cluster0.mlauqjx.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.get("/articles", auth, Articles.getAll);
app.get("/articles/:id", auth, Articles.getOne);
app.get("/users", auth , Users.getAll);
app.get("/users/:id",auth , Users.getOne);
app.get("/categories", auth , Categories.getAll);
app.get("/categories/:id", auth , Categories.getOne);
app.post('/api/login', Login.login);
app.put('/add-article/:userId/:articleId', Users.addToCart);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
