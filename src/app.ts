import express, { Application } from "express";
import {
  default as loginRouter,
  default as registVocaRouter,
  default as signupRouter,
} from "../router/login";

const app: Application = express();

const port: number = 8080;

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/regist-voca", registVocaRouter);
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// error
app.use((req, res) => {
  res.status(500).json({ msg: "Something went wrong 🥲" });
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
