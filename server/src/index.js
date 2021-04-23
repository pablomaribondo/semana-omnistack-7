const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes");

const app = express();

const URI = process.env.MONGO_ATLAS_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

const PORT = 3333;
app.listen(PORT);
