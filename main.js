
document.addEventListener('DOMContentLoaded', function () {
    const products = [
               { id: "1111",
               name: "Beef Grade A 2kg", 
               image: "img/bf/bf.jpeg", 
               price: "R170" },

               {id:"1111",
               name:" Beef Grade A 1kg",
               image:"img/bf/beef-5.jpeg",
               price:"R99",
               },
               {id:"1111",
               name:" Beef Steak Grade A 2kg",
               image:"img/bf/img-1.jpeg",
               price:"R180",
               },
               {id:"1111",
               name:" Beef Economy 2kg",
               image:"img/bf/img-2.jpeg",
               price:"R125",
               },
               {id:"1111",
               name:" Beef Bones 2kg",
               image:"img/bf/bones.jpeg",
               price:"R90",
               },
               {id:"1111",
               name:" Beef Trotters 2kg",
               image:"img/bf/trotters-3.jpeg",
               price:"R70",
               }
               ,
               {id:"1111",
               name:" Beef Kidney",
               image:"img/bf/kidney.jpeg",
               price:"R80",
               },
               {id:"1111",
               name:" Beef Offals 2kg",
               image:"img/bf/beef-offal-3.jpeg",
               price:"R80",
               },
               {id:"1111",
               name:" Beef T-Bone 1kg",
               image:"img/bf/anbg4.jpeg",
               price:"R110",
               }
    
  ];

  const pork = [
                   { id: "1000",
               name: "Pork Grade A 2kg", 
               image: "img/pork-1.jpeg", 
               price: "R140" },

               {id:"1000",
               name:" Pork Grade A 1kg",
               image:"img/pork-5.jpeg",
               price:"R101",
               },
               {id:"1000",
               name:" Pork Economy 2kg",
               image:"img/pork-2.jpeg",
               price:"R110",
               },
               {id:"1000",
               name:" Pork Ribs 2kg",
               image:"img/pork-3.jpeg",
               price:"R170",
               },
               {id:"1000",
               name:" Pork Steak 2kg",
               image:"img/pork-4.jpeg",
               price:"R150",
               },
               {id:"1000",
               name:" Pork Steak 1kg",
               image:"img/pork-4.jpeg",
               price:"R110",
               }
               ,
               {id:"1000",
               name:" Pork Ribs Bones 2kg",
               image:"img/pork-2.jpeg",
               price:"R100",
               },
               {id:"1000",
               name:" Pork Meat Bones 2kg",
               image:"img/porkbns.jpeg",
               price:"R70",
               },
               {id:"1000",
               name:" Pork Trotters 2kg",
               image:"img/trotters-1.jpeg",
               price:"R90",
               }
    
  ];

   const chicken = [
                   { id: "2000",
               name: "Full Chicken", 
               image: "img/chkn/chkn.jpeg", 
               price: "R100" },

               {id:"2000",
               name:" Chicken Thighs 2kg",
               image:"img/chkn/chcknthighs.jpeg",
               price:"R95",
               },
               {id:"2000",
               name:" Diced Chicken 2kg",
               image:"img/chkn/dicedchkn.jpeg",
               price:"R110",
               },
               {id:"2000",
               name:" Chicken Wings 2kg",
               image:"img/chkn/chickwngs.jpeg",
               price:"R99",
               },
               {id:"2000",
               name:" Mixed Chicken Portions 2kg",
               image:"img/chkn/mxdchck2kg.jpeg",
               price:"R100",
               },
               {id:"2000",
               name:" Chicken Thighs 1kg",
               image:"img/chkn/chknmixpor.jpeg",
               price:"R110",
               }
               
    
  ];

  
  // Select the containers for product display
const beefContainer = document.getElementById('beefContainer');
const porkContainer = document.getElementById('porkContainer');
const chickenContainer = document.getElementById('chickenContainer');

// Add click event listeners to each container separately
beefContainer.addEventListener('click', handleAddToCartClick);
porkContainer.addEventListener('click', handleAddToCartClick);
chickenContainer.addEventListener('click', handleAddToCartClick);

function handleAddToCartClick(event) {
  if (event.target.classList.contains('add-to-cart')) {
    // Get the product ID from the data-product-id attribute
    const productId = event.target.dataset.productId;

    // Determine the category and redirect to the appropriate cart page
    switch (productId) {
      case '1111':
        window.location.href = 'beefCart.html';
        break;
      case '1000':
        window.location.href = 'porkCart.html';
        break;
      case '2000':
        window.location.href = 'chickenCart.html';
        break;
      default:
        // Redirect to a default cart page or handle other cases as needed
        window.location.href = 'defaultCart.html';
        break;
    }
  }
}






    function createProductHTML(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('box');

        const imgBox = document.createElement('div');
        imgBox.classList.add('img-box');

        const img = document.createElement('img');
        img.classList.add('images');
        img.src = product.image;

        // Add a hover event listener to show the "Add to Cart" button
       productDiv.addEventListener('mouseenter', () => {
            addToCartButton.style.display = 'block';
        });

        productDiv.addEventListener('mouseleave', () => {
            addToCartButton.style.display = 'none';
        });

        imgBox.appendChild(img);

        const bottomDiv = document.createElement('div');
        bottomDiv.classList.add('bottom');

        const productName = document.createElement('p');
        productName.textContent = product.name;

        const productPrice = document.createElement('h5');
        productPrice.textContent = `${product.price}.00`;

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.dataset.productId = product.id;
        addToCartButton.textContent = 'Add To Cart';

        bottomDiv.appendChild(productName);
        bottomDiv.appendChild(productPrice);
        bottomDiv.appendChild(addToCartButton);

        productDiv.appendChild(imgBox);
        productDiv.appendChild(bottomDiv);

        return productDiv;
    }

    function displayProducts(products, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        products.forEach((product) => {
            const productHTML = createProductHTML(product);
            container.appendChild(productHTML);
        });
    }

    // Display the products
   // Display the products
displayProducts(products, 'beefContainer');
displayProducts(pork, 'porkContainer');
displayProducts(chicken, 'chickenContainer');


    // ... (your existing event listeners and functions) ...
});

 












// document.addEventListener('DOMContentLoaded', function () {
//   // Your product data here...

//   // Select the root container for product display
//   const rootElement = document.getElementById('root');

//   // Add a click event listener to the "Add to Cart" button
//   rootElement.addEventListener('click', (event) => {
//     if (event.target.classList.contains('add-to-cart')) {
//       // Get the product ID from the data-product-id attribute
//       const productId = event.target.dataset.productId;
      
//       // Find the product by ID to determine its category
//       const product = products.find((product) => product.id === productId);

//       if (product) {
//         // Determine the category and redirect to the appropriate cart page
//         switch (product.category) {
//           case 'beef':
//             window.location.href = 'beefCart.html';
//             break;
//           case 'chicken':
//             window.location.href = 'chickenCart.html';
//             break;
//           case 'pork':
//             window.location.href = 'porkCart.html';
//             break;
//           default:
//             // Redirect to a default cart page or handle other cases as needed
//             window.location.href = 'defaultCart.html';
//             break;
//         }
//       }
//     }
//   });

//   // Display your products...
// });
