let a = 7;
let b = 5;
let operacion = "";


function realizarOperacion(a, b, operacion){
    if (operacion === "suma"){
        return a + b;
    } else if (operacion === "resta"){
        return a - b;
    } else if (operacion === "multiplicacion"){
        return a * b;
    } else if (operacion === "division"){
        if (b === 0){
            return "ERROR: No se puede dividir por cero."
        }
        return a / b;
    } else{
        return "ERROR: Operación no válida."
    }

}

let continuar = true;

while (continuar) {

    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("ingrese operación (suma, resta, multiplicacion, division o salir):");

    if (operacion === "salir") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        continuar = false;
        break;
    }

    let resultado = realizarOperacion(a, b, operacion);
    alert("Resultado = " + resultado);

    let respuesta = prompt("¿Desea realizar otra operación? (si / no)");

    if (respuesta.toLowerCase() !== "si"){
        alert("Programa finalizado. 👋");
        continuar = false;
    }
}
