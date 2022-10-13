// PRODUCTS Y DATABASE-------
const url = "../db/products.json";
let cart = [];
let products = [];

// DOM PRODUCTS
const productCard = document.querySelector("#product-card");
const cartTable = document.querySelector("#cart-table");
let card = "";



// CARGA DESDE DATABASE Y MOSTRAR PRODUCTOS

const loadDB = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    products = data;
    products.forEach( element => (card += displayProducts(element)));
  } catch (e) {
    console.log(e);
  } finally {
    productCard.innerHTML = card;
  }
};






const displayProducts = (array) => {
  const { id, img, name, price } = array;

  return `<div class="col-lg-3 text-center">
                <div class="card border-0 bg-light mb-2">
                <div class="card-body">
                <img src= ${img} class="img-fluid" alt="Imagen jack-daniels">
                </div>
                </div>
                <h6>${name}</h6>
                <p>$${price}</p>
                <button type="submit" class="btn-carrito" id=${id}>Agregar al carrito</button>
          </div>`;
};

// CARRITO FUNCTIONS------------------------------------

const setCartButtons = () => {
  let cartButton = document.querySelectorAll(".btn-carrito");
  cartButton.forEach((button) =>
    button.addEventListener("click", (e) => addToChart(e))
  );
};

// MOSTRAR CARRITO
const displayCart = (array) => {
  let cartCard = "";
  

  array.forEach((product) => {
    cartCard += `
    
    <tr>
    
      <td>${product.name}</td>
      <td><img src=${product.img} class="cart-img" alt=""></td>
      <td>$${product.price}</td>
      <td>${product.quantity}</td>
      <td><button type="submit" class="btn-delete-cart" id="${product.id}"  ><i class="fa-solid fa-trash"></i></button></td>
      
      
    </tr> 
    
  
  </table>`;

    cartTable.innerHTML = cartCard;
    setDeleteButtons()
    
  });
};
// AÑADIR AL CARRITO

const addToChart = (event) => {
  
  let prod = cart.find((item) => item.id == parseInt(event.target.id));
  if (prod) {
    
    prod.quantity++;
    displayCart(cart)

  } else {
    let prod = products.find((item) => item.id === parseInt(event.target.id));
    if (prod) {
      let newProduct = {
        ...prod,
        quantity: 1,
      };
      cart.push(newProduct);
      displayCart(cart)
      
      
      
      
    }
  }
  setLocalCart();
  cartTotal()
  
  
};
// BORRAR ITEMS DEL CARRITO / SETEAR LOCALSTORAGE / CALCULAR TOTAL

const setDeleteButtons = () =>{
  
  let deleteButton = document.querySelectorAll('.btn-delete-cart')
  deleteButton.forEach(button =>{
    button.addEventListener( 'click' , () =>{
      let itemToRemove = cart.findIndex(item => item.id == button.id)
     
      if(itemToRemove !== -1){
        cart.splice (itemToRemove , 1)
        
       
        displayCart(cart)
        setLocalCart()
        cartTotal()
        if(cart.length == 0){
          location.reload()
        }
          
        
        

      }else{
        displayCart(cart)
      }
    } )
  })
}

// IR ARRIBA
const backTop = document.querySelector('.back-top')

backTop.addEventListener('click' , () =>{
  document.documentElement.scrollTop = 0
})

window.addEventListener('scroll' , () =>{
  if(window.scrollY < 600){
    backTop.style.right = -100 + 'px'
  }else{
    backTop.style.right = 5 + 'px'
  }
})