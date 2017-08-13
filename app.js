const express = require('express');
const app = express();
const favicon = require('serve-favicon'),
const handlebars = require('handlebars'),
const layouts = require('handlebars-layouts');

const JSONStream = require('JSONStream');
var engines = require('consolidate');
db = require('./model/db'),
app.engine('hbs',engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

handlebars.registerHelper(layouts(handlebars));
app.use(express.static(__dirname + '/public'));
app.use('/profilepics', express.static('images'))

app.use(require('./controllers'))

app.listen(3000,()=>{console.log("App running at port 3000");})