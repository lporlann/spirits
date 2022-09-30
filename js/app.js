// CONEXION DOM

const productCard = document.querySelector("#product-card");
const filtred = document.querySelector("#buscador");
const cartCard = document.querySelector("#cart-card");


// PRODUCTOS

const products = [
  {
    id: 1,
    name: "WHISKEY JOHNNIE WALKER BLACK",
    price: 8000,
    stock: 20,
    category: "whiskey",
    img: "/images/whiskey/johnnie-black-png.png",
  },
  {
    id: 2,
    name: "WHISKEY JOHNNIE WALKER RED",
    price: 6000,
    stock: 40,
    category: "whiskey",
    img: "/images/whiskey/jonnie-red-png.png",
  },
  {
    id: 3,
    name: "WHISKEY JOHNNIE DOUBLE BLACK",
    price: 15000,
    stock: 10,
    category: "whiskey",
    img: "/images/whiskey/johnnie-doble-black.png",
  },
  {
    id: 4,
    name: "WHISKEY JOHNNIE WALKER SWING",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/johnnie-swing.png",
  },
  {
    id: 5,
    name: "WHISKEY JACK DANIELS N°7",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/jack-daniels.png",
  },
  {
    id: 6,
    name: "WHISKEY THE SINGLETON 18",
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
    <p>${product.price}</p>
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

const displayCarrito = (array) => {
  let card = "";
  cartCard.innerHTML = "";

  array.forEach((product) => {
    card = `<div class="col-lg-3 text-center">
      <div class="card border-0 bg-light mb-2">
          <div class="card-body">
              <img src= ${product.img} class="img-fluid" alt="Imagen jack-daniels">
          </div>
      </div>
      <h6>${product.name}</h6>
      <p>$${product.price}</p>
      <button type="submit" class="btn-carrito" id=${product.id}>Cantidad: ${product.quantity}</button>
      
  
  </div>`;
    cartCard.innerHTML += card;
  });
};

const cartButton = () => {
  let buttonCart = document.querySelectorAll(".btn-carrito");
  for (const button of buttonCart) {
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
          carrito.push(newProduct);
        }
      }
      setLocalCarrito()
      displayCarrito(carrito);
    });
  }
};

cartButton();

                                    //STORAGE FUNCTIONS


const setLocalCarrito = () =>{  localStorage.setItem("carrito" , JSON.stringify(carrito))}
    
const localCarrito = JSON.parse(localStorage.getItem("carrito"))
window.onload = function(){
    
    localCarrito && localCarrito.forEach(item =>{carrito.push(item)})
    displayCarrito(carrito)
}
    


   







