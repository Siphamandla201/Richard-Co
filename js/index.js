let checkout = JSON.parse(localStorage.getItem("checkout")) || [];

const feature = [
  {
    id: 1,
    productImage: "../assets/images/NAVY WHITE YARN DYE CHECK LINEN HAT.png",
    productBrand: "Richard Collection",
    productName: "NAVY/WHITE YARN DYE CHECK LINEN HAT",
    productPrice: 350,
    productSize: "s",
    productQuantity: 1,
  },
  {
    id: 2,
    productImage: "../assets/images/CREAM 8 PANEL LINEN HAT.png",
    productBrand: "Richard Collection",
    productName: "CREAM 8 PANEL LINEN HAT",
    productPrice: 350.00,
    productSize: "s",
    productQuantity: 1,
  },
  {
    id: 3,
    productImage: "../assets/images/NATURAL FLATCAP STRIPED LINEN HAT.png",
    productBrand: "Richard Collection",
    productName: "NATURAL FLATCAP STRIPED LINEN HAT",
    productPrice: 350.00,
    productSize: "s",
    productQuantity: 1,
  },
  {
    id: 4,
    productImage: "../assets/images/BLACK IVY FLATCAP WITH BACKSTRAP HAT.png",
    productBrand: "Richard Collection",
    productName: "BLACK IVY FLATCAP WITH BACKSTRAP HAT",
    productPrice: 350.00,
    productSize: "s",
    productQuantity: 1,
  },
];

let products = JSON.parse(localStorage.getItem("products")) || feature;

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(feature));
}

const container = document.querySelector(".featured-items");
if (container) {
  function productDisplay() {
    for (let i = 0; i < products.length; i++) {
      container.innerHTML += `
        <div class="featured-item">
          <button class="check-out" onClick="addToCheck(${products[i].id})"><i class="fa-regular fa-heart"></i></button>
          <img src="${products[i].productImage}" alt="">
          <div class="des">
            <h5>${products[i].productBrand}</h5>
            <p>${products[i].productName}</p>
          </div>
          <p>R${products[i].productPrice}</p>
        </div>
      `;
    }
  }
  productDisplay();
}

function addToCheck(id) {
  const currentProduct = products.find(product => product.id === id);
  if (currentProduct) {
    checkout.push(currentProduct);
    localStorage.setItem("checkout", JSON.stringify(checkout));
  }
}
