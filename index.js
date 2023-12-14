const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./userRoutes.js");

const app = express();
const router = express.Router();

// const corsOptions = {
//   origin: "https://localhost:3000",
//   optionSucessStatus: 200,
// };

app.use(cors());
// app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

app.use(bodyParser.json());

const port = 4000;

mongoose
  // .connect("mongodb://127.0.0.1:27017/technix")
  .connect("mongodb+srv://abhishekshivade:Abhi%400037@hrms.xgr7jhd.mongodb.net/technix")
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
