const products = document.querySelectorAll(".product-item");
const searchInput = document.getElementById("search-input");

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

searchInput.addEventListener("keyup", searchHandler);
