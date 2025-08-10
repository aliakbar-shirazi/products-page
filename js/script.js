const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const filterBTN = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const searchHandler = (event) => {
  const search = event.target.value.trim().toLowerCase();

  products.forEach((product) => {
    const name = product.children[1].innerText.trim().toLowerCase();

    if (name.includes(search)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  buttonStyle(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else if (category === filter) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const buttonStyle = (name) => {
  filterBTN.forEach((button) => {
    if (button.dataset.filter === name) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = +event.target.parentNode.children[0].value;
  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const price = +productPrice.split(" ")[1];
    if (searchPrice <= 0) {
      product.style.display = "block";
    } else if (price === searchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

searchInput.addEventListener("keyup", searchHandler);
filterBTN.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
priceButton.addEventListener("click", searchPriceHandler);
