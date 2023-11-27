const factorial = (numero) => {
    if (numero == 0) {
        return 1
    } else {
        return numero * factorial(numero-1)
    }
}

let numero = 6;
console.log('El factorial de '+ numero + ' es = ' +factorial(numero) );