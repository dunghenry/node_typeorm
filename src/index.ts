import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import userController from "./controller/userController";
AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to DB successfully");
  })
  .catch((error) => {
    console.log("Connected to DB failed");
    console.log(error);
  });
const app = express();
app.use(bodyParser.json());
app.get("/users", userController.getUsers);
app.post("/users", userController.createUser);
app.get("/users/:id", userController.getUser);
app.delete("/users/:id", userController.deleteUser);
app.put("/users/:id", userController.updateUser);
app.listen(3000);
