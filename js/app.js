// CONEXION DOM

const productCard = document.querySelector("#product-card");
const filtred = document.querySelector("#buscador");




// EVENTOS

// PRODUCTOS

const products = [
  {
    id: 1,
    name: "WHISKEY JOHNNIE WALKER BLACK",
    price: 8000,
    stock: 20,
    category: "whiskey",
    img: "/images/whiskey/johnnie-black-png.png",
    cant: 1
  },
  {
    id: 2,
    name: "WHISKEY JOHNNIE WALKER RED",
    price: 6000,
    stock: 40,
    category: "whiskey",
    img: "/images/whiskey/jonnie-red-png.png",
    cant: 1
  },
  {
    id: 3,
    name: "WHISKEY JOHNNIE DOUBLE BLACK",
    price: 15000,
    stock: 10,
    category: "whiskey",
    img: "/images/whiskey/johnnie-doble-black.png",
    cant: 1
  },
  {
    id: 4,
    name: "WHISKEY JOHNNIE WALKER SWING",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/johnnie-swing.png",
    cant: 1
  },
  {
    id: 5,
    name: "WHISKEY JACK DANIELS N°7",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/jack-daniels.png",
    cant: 1
  },
  {
    id: 6,
    name: "WHISKEY THE SINGLETON 18",
    price: 8000,
    stock: 15,
    category: "whiskey",
    img: "/images/whiskey/the-singleton-18.png",
    cant: 1
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

const buttonCart = document.querySelectorAll(".btn-carrito")

const cartButton = () =>{
    for (const button of buttonCart) {
        button.addEventListener("click", () =>{
         const prod = products.find(product => product.id == button.id)
        
        if(prod){
            for(let i = 0 ; i < carrito.length ; i++){
                if(carrito[i].name === prod.name){
                    carrito[i].cant++
                    return null
                }
            }
            carrito.push(prod)
        }
        
        
        })
        let strCarrito = localStorage.setItem("carrito" , JSON.stringify(carrito))
           
        
    }}

cartButton()






