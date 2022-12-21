const checkoutEl = document.querySelector("#checklistDisplay");
console.log(products);
function displayChecklist() {
  for (let i = 0; i < products.length; i++) {
    let products = JSON.parse(localStorage.getItem("checkout")) || [];
    checkoutEl.innerHTML += `
        <tr>
           <td><button class="delete">🚮</button></td>
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



// let deleteBtn = [...document.querySelectorAll(".delete")];
// let productName = document.querySelector('')
// Object.keys(deleteBtn).forEach((item) => {
// deleteBtn[item].addEventListener('click', (e) => {
//   let index = item;
//   products = products.splice(...index, 1)
//   location.reload()
// })

// })

let sum = products.reduce((a, b) => {
  return a.productPrice + b.productPrice;
}, 0);
let totalPrice = document.querySelector("#amount");
totalPrice.append(sum);



















// //Checkout button
// let checkoutButton = document.querySelector('.checkout-btn');
// checkoutButton.addEventListener('click', (e)=>{
//   alert(`-R ${sum}`)
//   alert('Thank you for your Purchase')
//   checkoutItems = [];
//   localStorage.setItem('checkout', JSON.stringify(checkoutItems))
//   location.reload();
// })
