import bodyParser from "body-parser";
import express, { Application } from "express";

import {
  default as loginRouter,
  default as registVocaRouter,
} from "../router/login";
import signupRouter from "../router/signup";

const app: Application = express();

app.use(bodyParser.json());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

const port: number = 8080;

// signup
app.use("/signup", signupRouter);

// login
app.use("/login", loginRouter);

// regist voca
app.use("/regist-voca", registVocaRouter);

// home (later, it'll be changed)
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
