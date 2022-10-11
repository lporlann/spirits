//DOM CONTENT LOADED----------------

document.addEventListener("DOMContentLoaded", async ()=> {
  const wait = await loadDB()
                     setCartButtons() 
                     
                     

        
})
document.body.onload = () =>{
  if(localCart.length > 0){
    localCart.forEach(item => cart.push(item))
    displayCart(cart)
    cartTotal()
  }
 }










const cartTotal =() =>{
  
  let total = 0
  
  const displayCartTotal = document.querySelector("#total-value")
  if(cart.length > 0){
  cart.forEach(item =>{
    const cartPrice = Number(item.price)
    total = total + cartPrice*item.quantity
    displayCartTotal.innerHTML = ` TOTAL = ${total}`
    
  })
  
  }
}    



      
    
  // STORAGE FUNCTIONS


const setLocalCart = () =>{  localStorage.setItem("cart" , JSON.stringify(cart))
                                    }
const localCart = JSON.parse(localStorage.getItem("cart"))    



  









  


  
  
  
      
  





  
  




 


    


   







