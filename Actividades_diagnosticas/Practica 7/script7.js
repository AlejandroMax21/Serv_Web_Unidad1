document.getElementById("concatenar").addEventListener("click", function () {
    let arreglo1 = ["Hola", "Mundo"];
    let arreglo2 = ["Examen", "Diagnostico"];
    let concatenado = arreglo1.concat(arreglo2);

    document.getElementById("resultado").textContent = "Arreglos concatenados: " + concatenado;
    console.log("Arreglos concatenados: " + concatenado);
});