var express = require('express'); // importa possibilidade de trabalhar com a lib express
var consign = require('consign');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var app = express();//executa a função que o modulo express retorna
app.set('view engine', 'ejs');
app.set('views', './app/views')
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));//recupera as transições via método post

app.use(expressValidator());



consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
