const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./userRoutes.js");
const dotenv = require('dotenv')

dotenv.config()
const app = express();

app.use(cors());

app.use(bodyParser.json());



const port = 4000;
const mongoURI =process.env.MONGODB_URI

mongoose
  .connect(mongoURI)
  .then((x) => console.log("Connected to MongoDB"))
  .catch((error) => console.error("error connecting mongoDb : ", error));

app.get("/", (req, res) => {
  res.send("you are in server");
});
app.use("/users", userRoutes, (req, res) => {
  res.send("you are in user routes");
});

app.listen(port, () =>
  console.log(`Server is running on port ${port}. https://localhost:${port}`)
);
