//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let num3 = Number(prompt("Ingrese el tercer número:"));

console.log(num1);
console.log(num2);
console.log(num3);

//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor

function compararNumeros(num1, num2, num3){
    const numerosOrdenados = [num1, num2, num3].sort((a, b) => a - b);
    const menor = numerosOrdenados[0];
    const centro = numerosOrdenados[1];
    const mayor = numerosOrdenados[2];

    console.log(`El numero ${mayor} es el mayor`);
    console.log(`El numero ${centro} es el centro`);
    console.log(`El numero ${menor} es el menor`);
}

compararNumeros(num1, num2, num3);


//Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.

const descendente = [num1, num2, num3].sort((a, b) => b - a);
console.log(`Orden de mayor a menor: ${descendente.join(", ")}`);
const ascendente = [...descendente].reverse();
console.log(`Orden de menor a mayor: ${ascendente.join(", ")}`);
    

//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales

if (num1 === num2 && num2 === num3) {
    console.log("Los números introducidos son iguales.");
} else if (num1 === num2) {
    console.log(`El numero ${num1} y ${num2} son iguales`);
} else if (num2 === num3) {
    console.log(`El numero ${num2} y ${num3} son iguales`);
} else if (num1 === num3) {
    console.log(`El numero ${num1} y ${num3} son iguales`);
}