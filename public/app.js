// my playground
function getProducts() {
  return fetch("/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => {
      console.log(`Error in getting the data from the server: ${err}`);
    });
}

// my-playground.js
function createCard(product) {
  let card = document.createElement("div");
  card.setAttribute("class", "card mb-3"); // Added Bootstrap classes
  card.style.maxWidth = "300px"; // Adjust this value as needed

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card-img-top");
  cardImage.setAttribute("src", product.thumbnail);
  cardImage.setAttribute("alt", product.title);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = product.title;

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.textContent = product.description;

  let cardPrice = document.createElement("p"); // Create a paragraph for the price
  cardPrice.setAttribute("class", "card-text");
  cardPrice.textContent = `Price: $${product.price}`; // Assuming the price property exists in the product object

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice); // Add the price to the card body

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;
}

window.onload = function () {
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
