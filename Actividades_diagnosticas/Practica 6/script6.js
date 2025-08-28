document.getElementById("Filtro").addEventListener("click", function() {
  let texto = document.getElementById("dato").value;

  let cad = [1,2,3,4,5,6,7,8,9];
  let resultado = "";
  for(let i=0;i<cad.length;i++){
    if(cad[i]>texto){
      resultado+=" "+cad[i];
    }
  }
  
  document.getElementById("resultado").textContent = "Los numeros mayores a " + texto + " : " + resultado;
});
