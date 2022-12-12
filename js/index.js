let checkout = JSON.parse(localStorage.getItem('checkout')) ?  JSON.parse(localStorage.getItem('checkout')) : [] 

let feature = [
  {
    id: 1,
    productImage: "https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/02/ProductImages/59579916.jpg",
    productName: " NAVY/WHITE YARN DYE CHECK LINEN POORBOY HAT",
    productPrice: 350,
    productQuantity: 1,
  },
  {
    id: 2,
    productImage: "https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/02/ProductImages/59579928.jpg",
    productName: "CREAM 8 PANEL LINEN NEWBOY POORBOY HAT",
    productPrice: 350,
    productSize: "s",
    productQuantity: 1,
  },
  {
    id: 3,
    productImage: "https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/02/ProductImages/59603376.jpg",
    productName: "NATURAL FLATCAP STRIPED LINEN HAT",
    productPrice: 350,
    productQuantity: 1,
  },
  {
    id: 4,
    productImage: "https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/02/ProductImages/59575140.jpg",
    productName: "BLACK IVY FLATCAP WITH BACKSTRAP HAT",
    productPrice: 350,
    productQuantity: 1,
  },
];

let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify(feature));

let container = document.querySelector("#feature");
function productDisplay() {
  for (let i = 0; i < products.length; i++) {
    container.innerHTML += `
       
      <div class="featured-item">
         <img src="${products[i].productImage}" alt="">
            <div class="des">
              <h5>${products[i].productName}</h5>
              <h4>${products[i].productPrice}</h4>
          </div>
       <button class="check-out" onClick="addToCheck(${products[i].id})"><h6>Purchase</h6></button>
      </div>
    `;
  }
}
productDisplay();

const checkOutBtn = document.querySelector(".check-out");
function addToCheck(id) {
  let currentProduct = products[id - 1 ];
  checkout.push(currentProduct);
  localStorage.setItem("checkout", JSON.stringify(checkout));
  console.log();
}
