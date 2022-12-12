user = JSON.parse(sessionStorage.user);

const createProduct = (data) => {
  let productContainer = document.querySelector(".product-container");
  productContainer.innerHTML += `<div class="product-card">
  <img src="${data.image}" onclick="location.href = '/products/${data.id}'" class="product-img" alt="" />
  <p class="product-name">${data.name}</p>
  </div>`;
};

// loader
let loader = document.querySelector(".loader");
let noProductImg = document.querySelector(".no-product");

loader.style.display = "block";
noProductImg.style.display = "none";

const allProducts = () => {
  fetch("/all-products", {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ email: user.email }),
  })
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";
      noProductImg.style.display = "none";
      if (data == "no products") {
        loader.style.display = "none";
        noProductImg.style.display = "block";
      } else {
        data.forEach((product) => createProduct(product));
      }
    });
};

allProducts();
