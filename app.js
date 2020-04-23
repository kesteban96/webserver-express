/**
 * usando http paa crear un webserver
 */

const http = require('http');


/**
 * para poder escuchar peticiones http
 * 1. creamos el servidor
 */

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
            nombre: 'Kevin',
            edad: 24,
            url: req.url
        }
        //res.write('Hola Mundo');
    res.write(JSON.stringify(salida));
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');