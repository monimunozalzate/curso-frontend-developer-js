const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarrito);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  // console.log('click en ham')
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bicicle",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Electric Bicicle",
  price: 220,
  image:
    "https://tse3.mm.bing.net/th?id=OIP.NXR_Omul1dL0XR1UsAUH5wHaFq&pid=Api&P=0",
});
productList.push({
  name: "Electric Scooter",
  price: 200,
  image:
    "https://tse4.mm.bing.net/th?id=OIP.7_B-e_I_pzjIMbAn652tuQHaHa&pid=Api&P=0",
});
productList.push({
  name: "Electric Bike",
  price: 400,
  image:
    "https://www.mundomotero.com/wp-content/uploads/2017/10/scooter-electrico-KTM-E-SPEED-1800x1200.jpg",
});
productList.push({
  name: "Bicicle",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Electric Bicicle",
  price: 220,
  image:
    "https://tse3.mm.bing.net/th?id=OIP.NXR_Omul1dL0XR1UsAUH5wHaFq&pid=Api&P=0",
});
productList.push({
  name: "Electric Scooter",
  price: 200,
  image:
    "https://tse4.mm.bing.net/th?id=OIP.7_B-e_I_pzjIMbAn652tuQHaHa&pid=Api&P=0",
});
productList.push({
  name: "Electric Bike",
  price: 400,
  image:
    "https://www.mundomotero.com/wp-content/uploads/2017/10/scooter-electrico-KTM-E-SPEED-1800x1200.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
    // console.log(product.name)
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const figureImg = document.createElement("img");
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figureImg.setAttribute("alt", product.name);

    productInfoFigure.appendChild(figureImg);

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
