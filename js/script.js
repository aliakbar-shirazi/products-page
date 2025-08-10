const products = document.querySelectorAll(".product-item");
const searchInput = document.getElementById("search-input");
const filterBTN = document.querySelectorAll(".filter");

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

searchInput.addEventListener("keyup", searchHandler);
filterBTN.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
