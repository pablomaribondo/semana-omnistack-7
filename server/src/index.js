const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const URI = process.env.MONGO_ATLAS_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = 3333;
app.listen(PORT);
