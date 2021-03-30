//Ejercicio 1
function ejercicio1() {
    console.log("Hola mundo");
}


//Ejercicio 2
function ejercicio2() {
    alert("¡Me llamo Ana!");
}

//Ejercicio 3
function ejercicio3() {
    var nombre = "Ana";
    var apellido = "Vera";
    console.log(nombre + " " + apellido);
}

//Ejercicio 4
function ejercicio4() {
    var num1, num2;
    num1 = parseFloat(prompt("Introduce el primer número:"));
    num2 = parseFloat(prompt("Introduce el segundo número:"));
    console.log("La suma de los números es: " + (num1 + num2));
    alert("La suma de los números es: " + (num1 + num2));
}

//Ejercicio 5
function ejercicio5() {
    var nota_examen;
    nota_examen = parseFloat(prompt("Introduce la nota del examen:"));

    if (nota_examen >= 5 && nota_examen <= 10) {
        alert("¡Enhorabuena! Has aprobado el examen con un " + nota_examen);
    } else if (nota_examen < 5 && nota_examen >= 0) {
        alert("Ohh has suspendido el examen con un " + nota_examen);
    } else {
        alert("Por favor, introduce una nota entre 0 y 10.");
    }
}

//Ejercicio 6
function ejercicio6() {
    //Reemplazo de la palabra
    var frase = "Tengo un coche de color azul";
    frase2 = frase.replace("azul", "verde");
    console.log(frase2);

    //Reemplazo de cada letra "o" por "u"
    for (let i = 0; i < frase.length; i++) {
        frase = frase.replace("o", "u");
    }
    console.log(frase);
}

//Ejercicio 7
function ejercicio7() {
    var listado = ["mesa", "silla", "ordenador", "libreta"];

    for (let i = 0; i < listado.length; i++) {
        console.log("El objeto " + listado[i] + " está en la posición " + i + ".");
    }
}

//Ejercicio 8
function ejercicio8() {

    function calculadora(operador, valor1, valor2) {

        var resultado;

        switch (operador) {
            case "sumar":
                resultado = valor1 + valor2;
                return resultado;

            case "restar":
                resultado = valor1 - valor2;
                return resultado;

            case "multiplicar":
                resultado = valor1 * valor2;
                return resultado;

            default:
                alert("Por favor, escribe un operador válido.");
        }        
    }

    var valor1 = parseFloat(prompt("Introduce el primer valor:"));
    var valor2 = parseFloat(prompt("Introduce el segundo valor:"));
    var operador = prompt("Escribe qué deseas hacer: sumar, restar o multiplicar.");    

    var resultado = calculadora(operador, valor1, valor2);
    console.log("El resultado de la operación es: " + resultado);
    alert("El resultado de la operación es: " + resultado);
}
