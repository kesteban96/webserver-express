/**
 * app es una variable de la función de express
 * 
 */
const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

//Obtener puerto de heroku
const port = process.env.PORT || 3000;

/**
 * Se ejecuta siempre:
 */
hbs.registerPartials(__dirname + '/views/parciales');

//Me muestra todo lo del boopstrap
app.use(express.static(__dirname + '/public'));
//Express HBS me permite mandar variables a el "HTML"
app.set('view engine', 'hbs');

//Solicitud get cuando el path sea un /
//si el path tiene / se ejecutara el callback

app.get('/', (req, res) => {
    //La misma función send identifica que es JSON
    res.render('home', {
        nombre: 'kevin eSTEBAN'
    });
});

app.get('/about', (req, res) => {
    //La misma función send identifica que es JSON
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});