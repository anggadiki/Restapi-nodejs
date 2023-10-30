require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");

require("./utils/db");

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());

app.use("/api", productRoutes);

//route default
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server runing in port ${port}`);
});
