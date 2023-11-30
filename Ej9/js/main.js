const mayusMinus = (cadena) => {
    if(cadena===cadena.toUpperCase()){
        console.log('Solo mayusculas');
    } else if (cadena===cadena.toLowerCase()) {
        console.log('Solo minusculas');
    } else {
        console.log('Mayusculas y minusculas');
    }
}
let test = 'hola que tal';
mayusMinus(test);