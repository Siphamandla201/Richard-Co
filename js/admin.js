// let products;
let products = JSON.parse(localStorage.getItem("products"));
function display() {
  console.log(products);

  for (let i = 0; i < products.length; i++) { 
    document.querySelector(".table-body").innerHTML += `
            <tr>
              <td><button>delete</button></td>
              <td><button>edit</button></td>
              <td>${products[i].id}</td>
              <td>${products[i].productName}</td>
              <td>${products[i].productPrice}</td>
              <td>${products[i].productQuantity}</td>
           </tr>
           `;
  }
}

display();



let AddBtn = document.querySelector(".btn-add");
let id = document.getElementById("id").value;
let ProductImage = document.getElementById("image").value;
let productName = document.getElementById("name").value;
let productPrice = document.getElementById("price").value;
let productQuantity = document.getElementById("quantity").value;
function addProduct() {
  document.querySelector(".table-body").innerHTML += ""

  products.push({
    id: id,
    ProductImage: ProductImage,
    productName: productName,
    productPrice: productPrice,
    productQuantity: productQuantity,
  });
  localStorage.setItem("products", JSON.stringify(products));
  alert("product has been added")
  display();
  productDisplay();
}

