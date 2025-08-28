document.getElementById("contar").addEventListener("click", function() {

  let texto = document.getElementById("dato").value;
  
  let cantidad = texto.length;

  document.getElementById("resultado").textContent = "Número de caracteres: " + cantidad;
});
