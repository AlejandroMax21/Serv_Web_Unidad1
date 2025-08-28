document.getElementById("Palindromo").addEventListener("click", function() {
  let texto = document.getElementById("dato").value;
  let resultado="Es palindromo";
  texto=texto.replace(/\s+/g, "");

  let medio = Math.floor(texto.length/2);
  
  for (let i = 0; i < medio; i++) {
    if (texto[i] !== texto[texto.length-1-i]) {
      resultado = "No es palíndromo";
      break; 
    }
  }
  
  document.getElementById("resultado").textContent = "¿Es Palindromo?: " + resultado;
});
