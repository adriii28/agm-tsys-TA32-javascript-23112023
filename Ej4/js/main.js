var valores = [true, 5, false, "hola", "adios", 2];

//Determinar cual de los textos es mayor
let palabra1 = valores[3] 
let palabra2 = valores[4]

if (palabra1.length > palabra2.length) {
    console.log(palabra1 +' es mayor');
} else {
    console.log(palabra2 +' es mayor');
}

//Determinar operadores necesarios
let bool1 = valores[0]
let bool2 = valores[2]

console.log(bool1 || bool2)
console.log(bool1 && bool2)

//Resultado de 5 operaciones
let valor1 = valores[1];
let valor2 = valores[5];

let suma = valor1 + valor2;
console.log('Suma-> '+suma);

let resta = valor1 - valor2;
console.log('Resta-> '+resta);

let multi = valor1 * valor2;
console.log('Multiplicacion-> '+multi);

let division = valor1 / valor2;
console.log('Division-> '+division);

let modulo = valor1 % valor2;
console.log('Modulo-> '+modulo);
