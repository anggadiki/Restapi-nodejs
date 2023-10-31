const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);
