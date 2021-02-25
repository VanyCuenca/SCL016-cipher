import cipher from './cipher.js';

// cambio de cuadro de mensaje

let escribirMensaje = document.getElementById("mensaje1");
let númeroEscalones = document.getElementById("escalones");

document.getElementById("correr").addEventListener("click", function () {
   
      let mensaje = escribirMensaje.value;
      let escalones = númeroEscalones.value;
      
         let nuevoMensaje = mensaje.toUpperCase();
         try{
         document.getElementById("mensaje1").value = cipher.encode(escalones, nuevoMensaje);
      } catch(error){
            alert(error.mensaje);
         }

           
})

document.getElementById("caminar").addEventListener("click", function () {
   
   let mensaje = escribirMensaje.value;
   let escalones = númeroEscalones.value;
   

      let nuevoMensaje = mensaje.toUpperCase();
      try{
      document.getElementById("mensaje1").value = cipher.decode(escalones, nuevoMensaje);
   } catch(error){
      alert(error.mensaje);
   }

      
})


//console.log(cipher);
