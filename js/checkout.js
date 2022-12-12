const checkoutEl = document.querySelector("#checklistDisplay");
function displayChecklist() {
  products = JSON.parse(localStorage.getItem("checkout")) || [];
  for (let i = 0; i < products.length; i++) {
    checkoutEl.innerHTML += `
        <tr>
           <td><button>🚮</button></td>
           <td>${products[i].id}</td>
           <td><img src="${products[i].productImage}" alt=""></td>
           <td>${products[i].productName}</td>
           <td>${products[i].productPrice}</td>
           <td>${products[i].productQuantity}</td>
        </tr>
     `;
  }
}

displayChecklist();

function productTotal() {}

let total = document.querySelector(".priceTotal");

function displayTotal() {
  const amount = productTotal();
}

