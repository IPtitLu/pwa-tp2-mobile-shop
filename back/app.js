import express from 'express';
const app = express();
import mongoose from 'mongoose';
import Articles from './src/controllers/Articles.js'
import Categories from './src/controllers/Categories.js';
import Users from './src/controllers/Users.js';
import {Login} from './src/controllers/Login.js';
import bodyParser from "body-parser";
import auth from './src/auth/auth.js'
import esm from "esm"

app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://devuser:YNOV1234@cluster0.mlauqjx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/articles", auth , Articles.getAll);
app.get("/articles/:id", auth, Articles.getOne);
app.get("/users", Users.getAll);
app.get("/users/:id", Users.getOne);
app.get("/categories", Categories.getAll);
app.get("/categories/:id", Categories.getOne);
app.post('/api/login', Login.login);



app.listen(3000, () => {
    console.log("Server started on port 3000");
});
