//helpers

const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

//HBS que me ponga la primera palabra en mayuscula y las demas en minuscula

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});