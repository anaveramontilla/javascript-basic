//Ejercicio Nivel 2
function nivel2() {

    var valor1 = parseFloat(prompt("Introduce el primer valor:"));
    var valor2 = parseFloat(prompt("Introduce el segundo valor:"));
    var operador = prompt("Introduce qué deseas hacer: \n 1 = sumar, 2 = restar, 3 = multiplicar, 4 = dividir.");
      
    calculadora(operador, valor1, valor2);   

    function calculadora(operador, valor1, valor2) {

        var resultado;

        switch (operador) {
            case "1":
                resultado = valor1 + valor2;
                alert("El resultado de la suma es: " + resultado);
                break;

            case "2":
                resultado = valor1 - valor2;
                alert("El resultado de la resta es: " + resultado);
                break;

            case "3":
                resultado = valor1 * valor2;
                alert("El resultado de la multiplicación es: " + resultado);
                break;

            case "4":
                if (valor2 == 0) {
                    alert("No se puede dividir entre cero.");
                    break;
                } 
                resultado = valor1 / valor2;
                alert("El resultado de la división es: " + resultado);
                break;

            default:
                alert("Por favor, escribe un operador válido.");
        }        
    }   
}