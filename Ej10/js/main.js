const palindromo = (frase) => {
    
    let fraseReverse =  frase.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
    let fraseComparar = frase.toLowerCase().replace(/\s/g, '');

    if (fraseReverse===fraseComparar) {
        console.log(true);
    }
}

let frase = 'La ruta nos aporto otro paso natural';
palindromo(frase);