function getProducts() {
  fetch("/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`Error in getting the data from server ${err}`);
    });
}
function createCard(product) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card-img-top");
  cardImage.setAttribute("src", product.image);
  cardImage.setAttribute("alt", product.name);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = product.name;

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.textContent = product.description;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;
}

window.onload = function () {
  let container = document.getElementById("products-container");

  getProducts().then((data) => {
    for (let product of data.products) {
      let card = createCard(product);

      container.appendChild(card);
    }
  });
};
