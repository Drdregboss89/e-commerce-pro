document.addEventListener('DOMContentLoaded', function () {
 const products = [
                   {id: "1111",
               name: "Beef Grade A 2kg", 
               image: "img/bf/bf.jpeg", 
               price: "R170" },

               {id:"1112",
               name:" Beef Grade A 1kg",
               image:"img/bf/beef-5.jpeg",
               price:"R99",
               },
               {id:"1113",
               name:" Beef Steak Grade A 2kg",
               image:"img/bf/img-1.jpeg",
               price:"R180",
               },
               {id:"1114",
               name:" Beef Economy 2kg",
               image:"img/bf/img-2.jpeg",
               price:"R125",
               },
               {id:"1115",
               name:" Beef Bones 2kg",
               image:"img/bf/bones.jpeg",
               price:"R90",
               },
               {id:"1116",
               name:" Beef Trotters 2kg",
               image:"img/bf/trotters-3.jpeg",
               price:"R70",
               }
               ,
               {id:"1117",
               name:" Beef Kidney",
               image:"img/bf/kidney.jpeg",
               price:"R80",
               },
               {id:"1118",
               name:" Beef Offals 2kg",
               image:"img/bf/beef-offal-3.jpeg",
               price:"R80",
               },
               {id:"1119",
               name:" Beef T-Bone 1kg",
               image:"img/bf/anbg4.jpeg",
               price:"R110",
               }
    
  ];


  const categories = [...new Set(products.map((item) => item.id))];

  document.getElementById('root').innerHTML = categories.map((id) => {
    const { image, name, price } = products.find((product) => product.id === id);
    return `
      <div class="box">
        <div class="img-box">
          <img class="images" src="${image}" />
        </div>
        <div class="bottom">
          <p>${name}</p>
          <h5>${price}.00</h5>
          <button class="add-to-cart" data-product-id='${id}'>Add To Cart</button>
        </div>
      </div>
    `;
  }).join('');


  


   const cart = [];
   const cartButtons = document.querySelectorAll('.add-to-cart');
  
  
  document.getElementById('root').addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
      const productId = event.target.dataset.productId;
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        cart.push({ ...productToAdd });
        displayCart();
        updateCartCount()
        updateCartTotal(); // Calculate and update the cart total
      }
    }
  });
//display items to cart
  function displayCart() {
    if (cart.length === 0) {
      document.getElementById('cartItem').innerHTML = 'Your Cart is Empty';
    } else {
      document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
        const { image, name, price } = item;
        return `
          <div class="cart-item">
            <div class="row-img">
              <img class="rowimg" src="${image}" />
            </div>
            <p style='font-size:12px;'>${name}</p>
            <h5 style='font-size:15px;'>${price}.00</h5>
            <i class='las la-trash'></i>
          </div>
        `;
      }).join('');
//deleting items from cart
      const trashElements = document.querySelectorAll('.las.la-trash');

      trashElements.forEach((item, index) => {
        item.addEventListener('click', () => {
          cart.splice(index, 1);
          displayCart();
          updateCartCount()
          updateCartTotal(); // Recalculate and update the cart total when an item is removed
        });
      });
    }
  }
//updating cart count
  function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cart.length; // Set the cart count to the length of the cart array
  }
//cart total amount
 function updateCartTotal() {
  const totalElement = document.getElementById('total');
  const total = cart.reduce((acc, item) => {
    // Extract the numeric part of the price (remove "R" and convert to float)
    const numericPrice = parseFloat(item.price.replace("R", "").trim());
    return acc + numericPrice;
  }, 0);

  totalElement.textContent = `R ${total.toFixed(2)}`;
}

 
//payment
    const placeOrderButton = document.querySelector('.order');
    placeOrderButton.addEventListener('click', function () {
      // Display the payment form
      const paymentForm = document.querySelector('.payment-form');
      paymentForm.style.display = 'block';
    });

    // Handle payment form submission
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Here, you can handle the payment processing logic
      // You can access payment information from the form fields
      // For example, you can use the card details for card payments
      // or bank details for EFT transfers.
      // After processing the payment, you can show a confirmation message.

      // For now, let's just hide the payment form:
      const paymentForm = document.querySelector('.payment-form');
      paymentForm.style.display = 'none';
      alert('Payment successful!'); // Replace with actual payment logic
    });
});














  




