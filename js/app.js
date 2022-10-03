// CONEXION DOM

const productCard = document.querySelector("#product-card");
const filtred = document.querySelector("#buscador");
const cartCard = document.querySelector("#cart-card");
const cartTable = document.querySelector("#cart-table");


// EVENTOS



// PRODUCTOS

const products = [
  {
    id: 1,
    name: "JOHNNIE WALKER BLACK",
    price: 8000,
    stock: 20,
    category: "whiskey",
    img: "/images/whiskey/johnnie-black-png.png",
  },
  {
    id: 2,
    name: "JOHNNIE WALKER RED",
    price: 6000,
    stock: 40,
    category: "whiskey",
    img: "/images/whiskey/jonnie-red-png.png",
  },
  {
    id: 3,
    name: "JOHNNIE DOUBLE BLACK",
    price: 15000,
    stock: 10,
    category: "whiskey",
    img: "/images/whiskey/johnnie-doble-black.png",
  },
  {
    id: 4,
    name: "JOHNNIE WALKER SWING",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/johnnie-swing.png",
  },
  {
    id: 5,
    name: "JACK DANIELS N°7",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/jack-daniels.png",
  },
  {
    id: 6,
    name: "THE SINGLETON 18",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/the-singleton-18.png",
  },
];

// CARRITO DE COMPRAS

const carrito = [];

// MOSTRAR PRODUCTOS

const displayProducts = (array) => {
  let card = "";
  productCard.innerHTML = "";

  array.forEach((product) => {
    card += `<div class="col-lg-3 text-center">
    <div class="card border-0 bg-light mb-2">
        <div class="card-body">
            <img src= ${product.img} class="img-fluid" alt="Imagen jack-daniels">
        </div>
    </div>
    <h6>${product.name}</h6>
    <p>$${product.price}</p>
    <button type="submit" class="btn-carrito" id=${product.id}>Agregar al carrito</button>
    

</div>`;
    productCard.innerHTML = card;
  });
};
displayProducts(products);

// FILTRAR PRODUCTOS

const filterProducts = () => {
  filtred.value = filtred.value.trim().toUpperCase();
  if (filtred.value !== "") {
    const result = products.filter((product) =>
      product.name.includes(filtred.value)
    );
    if (result.length === 0) {
      displayWhiskey(products);
    } else {
      let card = "";
      result.forEach((element) => {
        card += `<div class="col-lg-3 text-center">
    <div class="card border-0 bg-light mb-2">
        <div class="card-body">
            <img src= ${element.img} class="img-fluid" alt="Imagen jack-daniels">
        </div>
    </div>
    <h6>${element.name}</h6>
    <p>${element.price}</p>
    <button type="submit" class="btn-carrito" id=btn-${element.id}>Agregar al carrito</button>

    </div>`;
        productCard.innerHTML = card;
      });
    }
  } else {
    displayProducts(products);
  }
};

filtred.addEventListener("#buscador", filterProducts());
filtred.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    filterProducts();
  }
});

// CARRITO FUNCTIONS

const removeCartItem = () =>{
  const deleteButton = document.querySelectorAll(".btn-eliminar-carrito")
  for (const button of deleteButton) {
    button.addEventListener('click' , () =>{
      let itemToRemove = carrito.findIndex(item =>
        item.id == button.id
      ) 
     if(itemToRemove !== -1){
      deleteConfirm()
      carrito.splice( itemToRemove , 1)
      setLocalCarrito()
      displayCarrito(carrito)
     }else{
      displayCarrito(carrito)
     }
        
      
    
      })
    }
}



const displayCarrito = (array) => {
  
  let card = "";
  cartTable.innerHTML = "";

  array.forEach((product) => {
 
  card = `
  
  <tr>
  
    <td>${product.name}</td>
    <td><img src=${product.img} class="cart-img" alt=""></td>
    <td>$${product.price}</td>
    <td>${product.quantity}</td>
    <td><button type="submit" class="btn-eliminar-carrito" id="${product.id}" product-data="${product.id}" ><i class="fa-solid fa-trash"></i></button></td>
    
    
  </tr>  
  

</table>`



    cartTable.innerHTML += card;
    cartTotal()
    removeCartItem()
     
  });
  
};

const cartButton = () => {
  let buttonCart = document.querySelectorAll(".btn-carrito");
  for (  const button of buttonCart) {
    button.addEventListener("click", () => {
      let prod = carrito.find((product) => product.id == button.id);
      if (prod) {
        prod.quantity++;
      } else {
        let prod = products.find((product) => product.id == button.id);
        if (prod) {
          let newProduct = {
            
            ...prod,
            quantity: 1,
          };
          cartTotal()
          carrito.push(newProduct);
          
        }
      }
      
      displayCarrito(carrito);
      removeCartItem()
      
      setLocalCarrito()
      cartTotal()
      
      
      
    });
  }
};

cartButton();

const cartTotal =() =>{
  
  let total = 0
  
  const displayCartTotal = document.querySelector(".total-value")
  if(carrito.length > 0){
  carrito.forEach(item =>{
    const cartPrice = Number(item.price)
    total = total + cartPrice*item.quantity
    displayCartTotal.innerHTML = ` TOTAL = ${total}`
    
  })}
}    

const deleteConfirm = () =>{
  Swal.fire({
    icon: 'success',
    title: 'Eliminado',})

    }
      
    
  

  







  


  
  
  
      
  





  
  




                                    //STORAGE FUNCTIONS


const setLocalCarrito = () =>{  localStorage.setItem("carrito" , JSON.stringify(carrito))}
    
const localCarrito = JSON.parse(localStorage.getItem("carrito"))
window.onload = function(){
    
    localCarrito && localCarrito.forEach(item =>{carrito.push(item)})
    displayCarrito(carrito)
}
    


   







