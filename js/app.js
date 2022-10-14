//DOM CONTENT LOADED------ CARGA DE BASE DE DATOS

document.addEventListener("DOMContentLoaded", async ()=> {
  const wait = await loadDB()
                     setCartButtons() 
                     if(older !== 1){askAge()}
                                                                   
})
// CARGA DE CARRITO RECUPERADO DE LOCALSTORAGE

document.body.onload = () =>{
  if(localCart.length > 0){
    localCart.forEach(item => cart.push(item))
    displayCart(cart)
    cartTotal()
  }
 }

// CALCULAR TOTAL 

 const cartTotal =() =>{
  
  let total = 0
  
  const displayCartTotal = document.querySelector("#total-value")
  if(cart.length > 0){
  cart.forEach(item =>{
    const cartPrice = Number(item.price)
    total = total + cartPrice*item.quantity
    displayCartTotal.innerHTML = ` TOTAL = $${total}`
    
  })
  
  }
}    
  
  // STORAGE FUNCTIONS


const setLocalCart = () =>{  localStorage.setItem("cart" , JSON.stringify(cart))}
                                    
const localCart = JSON.parse(localStorage.getItem("cart")) 
const older = JSON.parse(sessionStorage.getItem('age-ok'))


   



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

const askAge = async () =>{
  const { value: accept } = await Swal.fire({
    icon:'warning',
    title: 'Sos mayor de edad?',
    input: 'checkbox',
    inputValue: 0,
    inputPlaceholder:
      'Confirmo que soy mayor de 18 años',
    confirmButtonText:
      'Entrar <i class="fa fa-arrow-right"></i>',
      allowEscapeKey: false,
      allowOutsideClick: false,
      customClass: {popup: 'age-alert-popup'},
    inputValidator: (result) => {
      return !result && 'Necesitamos que confirmes para dejarte pasar'
    }
  })
  if(accept){
    sessionStorage.setItem("age-ok" , JSON.stringify(accept))
  }
}  
  
         
          
  



  









  


  
  
  
      
  





  
  




 


    


   







