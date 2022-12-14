// navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 180) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});

const createNavbar = () => {
  let navbar = document.querySelector(".navbar");

  navbar.innerHTML += `
  <ul class="links-container">
  <li class="link-item"><a href="/" class="link active">Home</a></li>
  <li class="link-item"><a href="/all-products" class="link">Products</a></li>
  <li class="link-item"><a href="/dashboard" class="link">Seller</a></li>
  <li class="link-item"><a href="/about" class="link">About</a></li>
  <li class="link-item"><a href="/contact" class="link">Contact</a></li>
</ul>
<div class="user-interactions">
  <div class="search-box">
    <input type="text" class="search" placeholder="Search Item" />
    <button class="search-btn">
      <img src="../img/search.png" alt="" />
    </button>
  </div>
  <div class="cart" onclick="location.href = '/cart'">
    <img src="../img/cart.png" class="cart-icon" alt="" />
    <span class="cart-item-count">00</span>
  </div>
  <div class="user">
    <img src="../img/user.png" class="user-icon" alt="" />
    <div class="user-icon-popup">
      <p>Login to your account</p>
      <a>Login</a>
    </div>
  </div>
</div>
`;
};

createNavbar();

// user icon popup

let userIcon = document.querySelector(".user-icon");
let userPopupIcon = document.querySelector(".user-icon-popup");

userIcon.addEventListener("click", () =>
  userPopupIcon.classList.toggle("active")
);

let text = userPopupIcon.querySelector("p");
let actionBtn = userPopupIcon.querySelector("a");
let user = JSON.parse(sessionStorage.user || null);

if (user != null) {
  // user is logged in
  text.innerHTML = `Login as, ${user.name}`;
  actionBtn.innerHTML = "Logout";
  actionBtn.addEventListener("click", () => logout());
} else {
  text.innerHTML = "Login to your Account";
  actionBtn.innerHTML = "Login";
  actionBtn.addEventListener("click", () => (location.href = "/login"));
}

const logout = () => {
  sessionStorage.clear();
  location.reload();
};

//search box

let searchBtn = document.querySelector(".search-btn");
let searchBox = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  if (searchBox.value.length) {
    location.href = `/search/${searchBox.value}`;
  }
});

//navbar cart item counter

const updateNavCartCounter = () => {
  let cartCounter = document.querySelector(".cart-item-count");

  let cartItem = JSON.parse(localStorage.getItem("cart"));

  if (cartItem == null) {
    cartCounter.innerHTML = "00";
  } else {
    if (cartItem.length > 9) {
      cartCounter.innerHTML = "9+";
    } else if (cartItem.length <= 9) {
      cartCounter.innerHTML = `0${cartItem.length}`;
    }
  }
};

updateNavCartCounter();
