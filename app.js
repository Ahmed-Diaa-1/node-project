const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const path = require("path");
const productsRoutes = require("./routes/products.routes");

app.use(express.json());
app.use("/node-project/products", productsRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.listen(process.env.PORT, () =>
  console.log(`System is up and running on Port: ${process.env.PORT}`)
);
