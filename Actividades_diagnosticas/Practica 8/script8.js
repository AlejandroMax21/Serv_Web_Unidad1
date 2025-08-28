document.getElementById("Buscar").addEventListener("click", function() {
  let texto = document.getElementById("dato").value;
  let resultado = "El nombre que buscas no se encuentra en la cadena";

  let cad = ["Alejandro", "Elizabeth", "David", "Dennis","Juan","Jesus"];

  if(cad.includes(texto)) resultado = "El nombre que buscas se encuentra en la cadena"
  
  document.getElementById("resultado").textContent = resultado;
});
