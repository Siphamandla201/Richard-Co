const checkoutEl = document.querySelector("#checklistDisplay");
let checkout = JSON.parse(localStorage.getItem("checkout")) || [];

// Function to display the checkout list
function displayChecklist() {
  checkoutEl.innerHTML = ""; // Clear the current content
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
  attachDeleteEventListeners(); // Attach event listeners to the delete buttons
}

// Function to attach event listeners to delete buttons
function attachDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeProduct(productId); // Remove the product when the button is clicked
    });
  });
}

// Function to remove a product from the checkout list
function removeProduct(productId) {
  // Update the checkout array in memory
  checkout = checkout.filter((product) => product.id != productId);
  // Update localStorage with the new checkout array
  localStorage.setItem("checkout", JSON.stringify(checkout));
  // Re-display the checklist with updated data
  displayChecklist();
  // Update the total price display
  displayTotal();
}

// Initial display of the checkout list
displayChecklist();

// Function to calculate the total price
function productTotal() {
  return checkout.reduce((total, product) => total + product.productPrice, 0);
}

// Function to display the total price
function displayTotal() {
  const total = document.querySelector("#amount p");
  if (total) {
    total.textContent = `R ${productTotal()}`;
  }
}

// Initial display of the total price
displayTotal();
