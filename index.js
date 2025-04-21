// Product Data
const productsData = [
    {
      id: 1,
      title: "Hp ProBook 11 X360- TOUCH- 256GB SSD/4GB RAM-Intel CELER",
      description: "HP Probook 11 X360 Laptop256GB SSD1TB OF OneDrive Cloud Storage 4GB RAM, Thinner, Lighten Design, Fast, Durable And Mobile, TOUCHSCREEN WINDOWS 10 PROFESSIONAL UPGRADEABLE TO WINDOWS 11 WITH ONE CLICK",
      price: 80.99,
      image: "hpProbook.jpg"
    },
    {
      id: 2,
      title: "Kingnote 2.09''inch Smartwatch Native Storm Waterproof T900U Black",
      description: "True Value, Truly SmartWater-proof AI VoiceBT CallingWide Vision, The World inUltra-large 2.09 HD DisplayExquisite DesignIP68 Rated Water and Dust Resistance Hands-free Phone Calls AnytimeAdvanced BT CallingAnswer calls with ease and convenience on our smartwatch, whether you're carrying stuff, multitasking or away from your phone.   It redefines the way you stay connected throughout your day.",
      price: 149.99,
      image: "kingnote-watch.jpg"
    },
    {
      id: 3,
      title: "Men's Italian Loafer Oxford Bright Plaid Fringed Leather Corporate Shoes Black",
      description: "The comfortable round head design makes it easy to wear and fits your feet. The anti-collision toe cap releases a comfortable experience. The upper is made of breathable, comfortable and soft fabric, which has a light and shock-absorbing effect. The high-quality rubber sole adopts a non-slip texture design, which is wear-resistant and not easy to slip",
      price: 79.99,
      image: "mens-italian-shoe.jpg"
    },
    {
      id: 4,
      title: "Century 50 Inches VIDA Smart 4K UHD TV (CTV-50) + 1 YEAR WARRANTY",
      description: "Immerse yourself in a world of entertainment with the Century 50 inch 4K UHD Smart TV (CTV -50). Instantly access thousands of Apps, movie titles and games with our VIDA smart tv  for your complete and total entertainment.",
      price: 79.99,
      image: "vidaa-smart-tv.jpg"
    },
    {
      id: 5,
      title: "Sony Computer Entertainment Play Station 5+ One Extra Pad",
      description: "Model: Sony PlayStation5PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in North America, Australia, New Zealand, Japan, Singapore, and South Korea, and is set to launch on November 19, 2020 for the rest of the world.",
      price: 79.99,
      image: "ps5.jpg"
    },
    {
      id: 7,
      title: "Iphone 14pro",
      description: "The Refrigerator model  Ref 200DR 154L, No Frost , Low Noise, Environment-Friendly Tech , Silver.",
      price: 449.99,
      image: "iphone-14-pro.webp"
    },
    {
      id: 8,
      title: "Hisense Double Door Fridge Ref 200DR - 154Litres",
      description: "The Refrigerator model  Ref 200DR 154L, No Frost , Low Noise, Environment-Friendly Tech , Silver.",
      price: 99.99,
      image: "hisense-double-door-fridge.jpg"
    },
    {
      id: 9,
      title: "Lenovol-Ideapad",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 69.99,
      image: "lenovol-ideapad.webp"
    },
    {
      id: 10,
      title: "Nokia-310",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 39.99,
      image: "nok1.webp"
    },
    {
      id: 11,
      title: "Ladies High Wear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 19.99,
      image: "ladies-high-wear.webp"
    },
    {
      id: 12,
      title: "Pop 7",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 69.99,
      image: "pop7.webp"
    },
    {
      id: 12,
      title: "Samsung Galaxy A 14 black",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 59.99,
      image: "samsung-galaxy-a-14-black.webp"
    },
    {
      id: 13,
      title: "Samsung Galaxy A 14 white",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 59.99,
      image: "samsung-galaxy-a-14-white.webp"
    },
    {
      id: 14,
      title: "Samsung Galaxy S 20 white",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 159.99,
      image: "samsung-galaxy-s20.webp"
    },
    {
      id: 15,
      title: "Lenovol",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 359.99,
      image: "lenovol.webp"
    },
    {
      id: 16,
      title: "Hp Pavilion Fold",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 659.99,
      image: "hp-pavilion-fold.webp"
    },
    {
      id: 17,
      title: "Hp Pavilion",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 659.99,
      image: "hp-pavilion.webp"
    },
    {
      id: 18,
      title: "Infinix Hot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 59.99,
      image: "infinix-hot.webp"
    },
    {
      id: 19,
      title: "Solitec Standing Fan 18 inches",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 59.99,
      image: "fan1.jpg"
    },
    {
      id: 20,
      title: "Coporate Yellow Gown",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 29.99,
      image: "Coporate Yellow Gown.webp"
    },
    {
      id: 21,
      title: "3 in 1 Women Seamless Strapless",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 39.99,
      image: "3-in-1-women-seamless-strapless.webp"
    },
    {
      id: 22,
      title: "Women Floral Sleeve",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 29.99,
      image: "women-floral-sleeve.webp"
    },
    {
      id: 23,
      title: "Women Long Gown",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 29.99,
      image: "women-long-gown.webp"
    },
    {
      id: 24,
      title: "Women Office Long Gown",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 19.99,
      image: "women-office-long-gown.webp"
    },
    {
      id: 25,
      title: "Women Gown",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 29.99,
      image: "style-addiction-cape-detail-belted-swing-dress.webp"
    },
    {
      id: 26,
      title: "Men Shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 59.99,
      image: "shirt-3.webp"
    },
    {
      id: 27,
      title: "Boys wear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit laboriosam quas, asperiores fugiat ducimus expedita delectus quo saepe, necessitatibus nobis culpa, provident natus neque alias tenetur molestias nesciunt enim?",
      price: 29.99,
      image: "complete-wear.webp"
    },
  ];
  
  // DOM Elements
  const productsContainer = document.getElementById('products');
  const productDetails = document.querySelector('.product-details');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const cartSidebar = document.getElementById('cart-sidebar');
  const loader = document.getElementById('loader');
  const searchBar = document.getElementById('search');
  const mainContent = document.getElementById('main-content');
  const faX = document.querySelector('.fa-xmark');
  const cancels = document.querySelector('.cancels');
  const search = document.querySelector('.search-content');
  const searchIcon = document.querySelector('.fa-magnifying-glass');
  const searchItems = document.querySelector('.search-items');
  const cancel = document.querySelector('.s-cancel');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Render Products
  function renderProducts() {
    productsContainer.innerHTML = productsData.map((product, index )=> `
      <div class="product-card" key='${product.title}' onclick='showMoreProduct(${index})'>
        <img src="${product.image}" alt="${product.title}" />
        <h3 style="font-size: 12px">${product.title}</h3>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `).join('');
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
  
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
  
    updateCart();
  }
  
  // Remove from Cart
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
  }
  
  // Quantity Buttons
  function increaseQty(id) {
    const item = cart.find(i => i.id === id);
    if (item) item.qty += 1;
    updateCart();
  }
  function decreaseQty(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty -= 1;
      if (item.qty <= 0) removeFromCart(id);
    }
    updateCart();
  }
  
  // Update Cart UI
  function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;
     
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<img src='hippo-empty-cart.png' alt='Empty Cart' style='width: 100%; height: auto;'><p style='text-align: center;'>Your cart is empty</p>`;
        cartTotal.textContent = '0.00'; 
        cartCount.textContent = '0';
        return;
        }

        
    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;
  
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div style="flex:1;">
          <strong>${item.title}</strong><br>
          <small>$${(item.price * item.qty).toFixed(2)}</small>
        </div>
        <div>
          <button class="qty-btn" onclick="decreaseQty(${item.id})">−</button>
          ${item.qty}
          <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
          <button onclick="removeFromCart(${item.id})" style="color:red; background:none; border:none; cursor:pointer;">🗑</button>
        </div>
      `;
      cartItemsList.appendChild(li);
    });
  
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Toggle cart sidebar
  function toggleCart() {
    cartSidebar.classList.toggle('show');
  }
  document.querySelector('.cart-icon').addEventListener('click', toggleCart);
  
  // Checkout Modal
  function openCheckout() {
    const modal = document.getElementById('checkout-modal');
    const summary = document.getElementById('checkout-summary');
    let total = 0;
  
    summary.innerHTML = cart.map(item => {
      total += item.price * item.qty;
      return `<p>${item.title} x${item.qty} = $${(item.price * item.qty).toFixed(2)}</p>`;
    }).join('') + `<hr><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
  
    modal.classList.add('show');
  }
  
  function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('show');
  }
  
  // Init
  renderProducts();
  updateCart();
  
  function closeSide() {
    cartSidebar.classList.toggle('show');
  }

 
  function showMoreProduct(index){
    let product = productsData;
      console.log(product[index].title)
      let productPreview = `
          <div class='flexxx'>
            <div class='first-side'>
               <img src='${product[index].image}' alt='${product[index].title}' class='preview-photo'>
            </div>
            <div class='second-sides'>
               <h2 class='p-h'>${product[index].title}</h2>
               <p class='p'>${product[index].description}</p>
               <p class='price'>$${product[index].price}</p>
               <button class='preview-btn' onclick="addToCart(${product[index].id})">Add to cart</button>
            </div>
          </div>
      `
     productDetails.innerHTML = productPreview;
     productDetails.style.display = 'block';

     const span = document.createElement('span');
     span.textContent = 'X';
     span.classList.add('close-btn');
    //  span.style.backgroundColor = 'red';
    //  span.style.color = 'white';
    //  span.style.borderRadius = '50%';
    //  span.style.padding = '10px';
    //  span.style.cursor = 'pointer';
    //  span.style.marginTop= '30px';
     span.addEventListener('click', () => {
      productDetails.style.display = 'none';
     })
      productDetails.appendChild(span);
  }


  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 3000);
  });


  searchIcon.addEventListener('click', () => {
    search.style.display = 'block';
  });

  faX.addEventListener('click', () => {
    search.style.display = 'none';
  } );  

  searchBar.addEventListener('input', () => {
     const searchValue = searchBar.value;
     console.log(searchValue);
      const filteredProducts = productsData.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
      console.log(filteredProducts);
      searchItems.innerHTML = filteredProducts.map((product, id) => `
        <div class="product-card" key='${product.title}' onclick='showMorePro(${product.id})'>
          <img src="${product.image}" alt="${product.title}" />
          <h3 style="font-size: 12px">${product.title}</h3>
          <p><strong>$${product.price.toFixed(2)}</strong></p>
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `).join('');
      if (searchValue === '') {
        searchItems.innerHTML = '';
      } else if(searchValue !== '' && filteredProducts.length === 0) {
        searchItems.innerHTML = `<h1 style='text-align: center; font-size: 20px; margin-top:10px; color: blue;'>No result found</h1>`;
      }
  });


 function showMorePro(id){
  const product = productsData.find(prod => prod.id === id);
    let productPreview = `
        <div class='flexxx'> 
          <div class='first-side'>
             <img src='${product.image}' alt='${product.title}' class='preview-photo'>
          </div>
          <div class='second-sides'>
              <span class='fa-x' onclick="productDetails.style.display = 'none'">X</span>
             <h2 class='p-h'>${product.title}</h2>
             <p class='p'>${product.description}</p>
             <p class='price'>$${product.price}</p>
             <button class='preview-btn' onclick="addToCart(${product.id})">Add to cart</button>
          </div>
        </div>  
    `
   productDetails.innerHTML = productPreview; 
    productDetails.style.display = 'block'; 
 }

      