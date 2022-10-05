


//DOM CONTENT LOADED----------------

document.addEventListener("DOMContentLoaded", async ()=> {
  const wait = await loadDB()
                     setCartButtons() 
        
})






// CONEXION CON DOM---------






// cart FUNCTIONS

// const removeCartItem = () =>{
//   const deleteButton = document.querySelectorAll(".btn-eliminar-cart")
//   for (const button of deleteButton) {
//     button.addEventListener('click' , () =>{
//       let itemToRemove = cart.findIndex(item =>
//         item.id == button.id
//       ) 
//      if(itemToRemove !== -1){
//       deleteConfirm()
//       cart.splice( itemToRemove , 1)
//       setLocalcart()
//       displaycart(cart)
//      }else{
//       displaycart(cart)
//      }
        
      
    
//       })
//     }
// }



// const displayCart = (array) => {
  
//   let card = "";
//   cartTable.innerHTML = "";

//   array.forEach((product) => {
 
//   card = `
  
//   <tr>
  
//     <td>${product.name}</td>
//     <td><img src=${product.img} class="cart-img" alt=""></td>
//     <td>$${product.price}</td>
//     <td>${product.quantity}</td>
//     <td><button type="submit" class="btn-eliminar-carrito" id="${product.id}" product-data="${product.id}" ><i class="fa-solid fa-trash"></i></button></td>
    
    
//   </tr>  
  

// </table>`



//     cartTable.innerHTML += card;
//     cartTotal()
//     removeCartItem()
     
//   });
  
// };

// const cartButton = () => {
//   let buttonCart = document.querySelectorAll(".btn-carrito");
//   for (  const button of buttonCart) {
//     button.addEventListener("click", () => {
//       let prod = carrito.find((product) => product.id == button.id);
//       if (prod) {
//         prod.quantity++;
//       } else {
//         let prod = products.find((product) => product.id == button.id);
//         if (prod) {
//           let newProduct = {
            
//             ...prod,
//             quantity: 1,
//           };
//           cartTotal()
//           carrito.push(newProduct);
          
//         }
//       }
      
//       displayCarrito(carrito);
//       removeCartItem()
      
//       setLocalCarrito()
//       cartTotal()
      
      
      
//     });
//   }
// };

// cartButton();

const cartTotal =() =>{
  
  let total = 0
  
  const displayCartTotal = document.querySelector("#total-value")
  if(cart.length > 0){
  cart.forEach(item =>{
    const cartPrice = Number(item.price)
    total = total + cartPrice*item.quantity
    displayCartTotal.innerHTML = ` TOTAL = ${total}`
    
  })}
}    


      
    
  // STORAGE FUNCTIONS


const setLocalCart = () =>{  localStorage.setItem("cart" , JSON.stringify(cart))}
const localCart = JSON.parse(localStorage.getItem("cart"))    



  







  


  
  
  
      
  





  
  




                                    //STORAGE FUNCTIONS


    


   







