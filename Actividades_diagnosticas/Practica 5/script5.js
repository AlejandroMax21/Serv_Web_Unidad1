document.getElementById("sumar").addEventListener("click", function () {
    let numeros = [13, 7, 16, 23, 73, 75, 3];
    let suma = numeros.reduce((acc, val) => acc + val, 0);

    document.getElementById("resultado").textContent = "Suma del arreglo: " + suma;
});