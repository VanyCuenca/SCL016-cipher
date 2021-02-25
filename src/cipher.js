const cipher = {
  // ...
 
encode (escalones, nuevoMensaje){

  let correr = "";

  if (nuevoMensaje == "" || nuevoMensaje == 0 ||nuevoMensaje == null || nuevoMensaje == [] ) {
    throw new TypeError("caracter no permitido");

 }
  
  
  for (let i = 0; i < nuevoMensaje.length; i++) {
    
      let ascii = nuevoMensaje.charCodeAt(i);
      escalones = parseInt(escalones);
      let escalones1 = (ascii - 65 + escalones) % 26 + 65;
      correr += String.fromCharCode(escalones1);

 }
  return correr;
},

decode (escalones, nuevoMensaje){

  let caminar = "";

  if (nuevoMensaje == "" || nuevoMensaje == 0 ||nuevoMensaje == null || nuevoMensaje == [] ) {
    throw new TypeError("caracter no permitido");

  }
  
  for (let i = 0; i < nuevoMensaje.length; i++) {
      
    let ascii = nuevoMensaje.charCodeAt(i);
    escalones = parseInt(escalones);
    let escalones1 = (ascii + 65 - escalones) % 26 + 65;
    caminar += String.fromCharCode(escalones1);


 }
  return caminar;
}


};

export default cipher;
