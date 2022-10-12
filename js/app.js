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


const setLocalCart = () =>{  localStorage.setItem("cart" , JSON.stringify(cart))}
                                    
const localCart = JSON.parse(localStorage.getItem("cart"))    



// CLASES

class Alerta{
  constructor(name , id){
    this.name = name;
    this.id = id;
  }
  buyConfirm(){
    let confirmButton = document.querySelector('#buy-button')
    confirmButton.addEventListener('click' , async () =>{
      if(cart.length > 0){
       await Swal.fire(
          'MUCHAS GRACIAS!',
          'Tu compra fue confirmada!',
          'success'
        )
        localStorage.clear()
        location.reload()
        
      }else{
        throw null
      }
      
      
    })
  }

}
const buyAlert = new Alerta('confirmar' , 1)

buyAlert.buyConfirm()


  









  


  
  
  
      
  





  
  




 


    


   







