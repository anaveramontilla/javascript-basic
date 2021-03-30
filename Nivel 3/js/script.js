//Ejercicio Nivel 3   
function sumar() {
    var num1 = Number(document.getElementById("cajaTexto1").value);
    var num2 = Number(document.getElementById("cajaTexto2").value);

    var resultado = num1 + num2;
    document.getElementById("mostrarResultado").innerHTML = num1 + " + " + num2 + " = " + Math.round(resultado * 100) / 100;
}

function restar() {
    var num1 = Number(document.getElementById("cajaTexto1").value);
    var num2 = Number(document.getElementById("cajaTexto2").value);

    var resultado = num1 - num2;
    document.getElementById("mostrarResultado").innerHTML = num1 + " - " + num2 + " = " + Math.round(resultado * 100) / 100;
}

function multiplicar() {
    var num1 = Number(document.getElementById("cajaTexto1").value);
    var num2 = Number(document.getElementById("cajaTexto2").value);

    var resultado = num1 * num2;
    document.getElementById("mostrarResultado").innerHTML = num1 + " x " + num2 + " = " + Math.round(resultado * 100) / 100;
}

function dividir() {
    var num1 = Number(document.getElementById("cajaTexto1").value);
    var num2 = Number(document.getElementById("cajaTexto2").value);

    if (num2 == 0) {
        document.getElementById("mostrarResultado").innerHTML = "¡No se puede dividir entre cero!"
        return;
    }

    var resultado = num1 / num2;
    document.getElementById("mostrarResultado").innerHTML = num1 + " / " + num2 + " = " + Math.round(resultado * 100) / 100;
}