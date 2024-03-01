const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const signUp = require("./Routes/sign-up");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to allow the host to acces multi cors
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "www.localhost:5173",
      "localhost:5173",
      "http://192.168.43.59:5173",
      "192.168.43.59:5173",
      "www.192.168.43.59:5173",
    ],
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use(express.static("public"));
app.use(express.json());

app.use("/api/sign-up", signUp);

app.get("/api", (req, res) => {
  res.json({ message: "test" });
});

//exporting app
module.exports = app;
