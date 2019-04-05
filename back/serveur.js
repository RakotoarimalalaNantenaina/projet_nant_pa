
var monroute = require('./Route/route');    
var cors = require('cors')
var express = require('express');
var app = express();
app.use(cors())
app.listen(8080);
app.use('/', monroute)

console.log('Server demarer');