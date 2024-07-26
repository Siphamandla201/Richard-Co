const checkoutEl = document.querySelector("#checklistDisplay");
let checkout = JSON.parse(localStorage.getItem("checkout")) || [];

const delivery = 250.00;
const sale = 50.00;




function displayChecklist() {
  checkoutEl.innerHTML = ""; 
  if (checkout.length === 0) {
  checkoutEl.innerHTML = `
  <h4 class="empty-checklist">
    There’s nothing in your bag yet. Sign in or create an account to unlock members-only rewards and personalised recommendations.
  </h4>
  <a class="shop-now" href="../index.html">Shop Now</a>
  `
};
  for (let i = 0; i < checkout.length; i++) {
    checkoutEl.innerHTML += `
      <div>
        <div class="disclaimer">
          <p>you may have to pay import duties</p>
          <hr>
        </div>
        <div class="item">
          <img src="${checkout[i].productImage}" alt="">

          <div class="item-info">
            <h4>${checkout[i].productBrand}</h4>
            <p style="margin-top:1px;">${checkout[i].productName}</p>
            <p style="margin-top:3px;">PRODUCT ID : ${checkout[i].id}</p>
          </div>

          <p class="price">${checkout[i].productPrice}</p>
          
          <div class="quantity">
            <div>  
              <p>Quantity 
              <br> ${checkout[i].productQuantity} 
              <span>change</span></p>
            </div>
            <button class="delete" data-id="${checkout[i].id}">🚮</button>
          </div>
        </div>
      </div>
    `;
  }
  attachDeleteEventListeners(); 
  displayTotal();
}

function attachDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeProduct(productId);
    });
  });
}

// Function to remove a product from the checkout list
function removeProduct(productId) {
  checkout = checkout.filter((product) => product.id != productId);
  localStorage.setItem("checkout", JSON.stringify(checkout));
  displayChecklist();

  displayTotal();
}

displayChecklist();



// Function to calculate the total price
function productTotal() {
  console.log(delivery)
  return checkout.reduce((total, product) => total + product.productPrice , 0) + delivery - sale;
}

function subTotal() {
  console.log(delivery)
  return checkout.reduce((total, product) => total + product.productPrice , 0);
}


function displayTotal() {
  const total = document.querySelector("#amount .amount");

  const tableData = document.querySelector(".checkout-total");
  tableData.innerHTML = `
   <div id="priceTotal">
      <div><p>Summary</p></div>
      <table>
          <thead>
              <tr>
                  <td>Sub Total</td>
                  <td>Delivery</td>
                  <td>Sale</td>
              </tr>
          </thead>
          <tbody class="tableData">
              <tr>
                <td>R${subTotal()}</td>
                <td>R${delivery}</td>
                <td>-R${sale}</td>
              </tr>
          </tbody>
      </table>
      <hr>
      <div id="amount">
          <p>TOTAL</p>
            <p class="amount">R ${productTotal()}</p>
      </div>
      <button class="checkout-btn">Checkout</button>
    </div> 
    
  `
}