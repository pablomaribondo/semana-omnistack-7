const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const app = express();

const URI = process.env.MONGO_ATLAS_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(routes);

const PORT = 3333;
app.listen(PORT);
