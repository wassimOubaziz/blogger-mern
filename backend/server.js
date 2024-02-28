import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000\n" + "http://localhost:5000/api");
});
