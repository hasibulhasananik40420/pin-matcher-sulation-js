  function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin
    }
    else{
        // console.log('get pin by', pin)
        return getPin()
    }
  }
 
 function genratePin(){
   const pin = getPin()
   document.getElementById('display-pin').value = pin 
  }

  document.getElementById('key-pad').addEventListener('click', function(event){
  const number =event.target.innerText
  const calcInput = document.getElementById('typed-number')
   if(isNaN(number)){
       if(number == 'C'){
           calcInput.value = ''
       }
   }
   else{
    const previousNumber = calcInput.value
    const newNumner = previousNumber + number
 
    calcInput.value = newNumner
   }
  
  })

   function verifyPin(){
     const pin = document.getElementById('display-pin').value
     const typedNumber = document.getElementById('typed-number').value
     const successMassage = document.getElementById('notify-success')
     const failMassage = document.getElementById('notify-fail')
     if(pin==typedNumber){
          successMassage.style.display = 'block'
          failMassage.style.display = 'none'


     }
     else{
        failMassage.style.display = 'block'
        successMassage.style.display = 'none'

     }

   }