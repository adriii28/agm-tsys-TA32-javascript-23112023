var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let numerosDNI = prompt('Introduce los 8 digitos de un DNI');
let letra = prompt('Introduce la letra de el DNI');

let calcularLetra = (numerosDNI) => { return numerosDNI%23}

if (numerosDNI > 0  && numerosDNI < 99999999) {

    let letraCalculada = calcularLetra(numerosDNI);

    if (letras[letraCalculada]==letra) {
        console.log('DNI Correcto');
    } else {
        console.log('DNI Incorrecto');
    }
    
} else {
    alert('El numero proporcionado no es valido');
}


