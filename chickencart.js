document.addEventListener('DOMContentLoaded', function () {
 const products = [
                   { id: "2000",
               name: "Full Chicken", 
               image: "img/chkn/chkn.jpeg", 
               price: "R100" },

               {id:"2001",
               name:" Chicken Thighs 2kg",
               image:"img/chkn/chcknthighs.jpeg",
               price:"R95",
               },
               {id:"2002",
               name:" Diced Chicken 2kg",
               image:"img/chkn/dicedchkn.jpeg",
               price:"R110",
               },
               {id:"2003",
               name:" Chicken Wings 2kg",
               image:"img/chkn/chickwngs.jpeg",
               price:"R99",
               },
               {id:"2004",
               name:" Mixed Chicken Portions 2kg",
               image:"img/chkn/mxdchck2kg.jpeg",
               price:"R100",
               },
               {id:"2005",
               name:" Chicken Thighs 1kg",
               image:"img/chkn/chknmixpor.jpeg",
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