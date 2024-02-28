const express = require("express");
const app = express();
// const cors = require("cros");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to allow the host to acces multi cors
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "www.localhost:3000",
//       "localhost:3000",
//       "http://192.168.43.59:3000",
//       "192.168.43.59:3000",
//       "www.192.168.43.59:3000",
//     ],
//     credentials: true,
//     exposedHeaders: ["Set-Cookie"],
//   })
// );

app.use(express.static("public"));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "test" });
});

//exporting app
module.exports = app;
