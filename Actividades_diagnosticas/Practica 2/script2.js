document.getElementById("invertir").addEventListener("click", function() {
  let texto = document.getElementById("dato").value;
  let invertida ="";

  let cantidad = texto.length;
  
  for(let i=1; i<=cantidad; i++){
    invertida += texto[texto.length-i];
  }

  document.getElementById("resultado").textContent = "Cadena invertida: " + invertida;
});
