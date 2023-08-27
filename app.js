const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const path = require("path");
const productsRoutes = require("./routes/products.routes");

app.use(express.json());
app.use("/products", productsRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

// my playground
function getProducts() {
  return fetch("/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => {
      console.log(`Error in getting the data from the server: ${err}`);
    });
}

function createCard(product) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card-img-top");
  cardImage.setAttribute("src", product.thumbnail); // Use the correct property name
  cardImage.setAttribute("alt", product.title);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = product.title;

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.textContent = product.description;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;
}

onload = function () {
  let container = document.getElementById("products-container");

  getProducts().then((products) => {
    for (let product of products) {
      let card = createCard(product);

      container.appendChild(card);
    }
  });
};
console.log("JavaScript file loaded");

//end
app.listen(process.env.PORT, () =>
  console.log(`System is up and running on Port: ${process.env.PORT}`)
);
