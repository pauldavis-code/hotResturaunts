const express = require('express');
const path = require('path');

var guests = require('../data/guests')

var app = express();
var PORT = 8000

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
  })

  app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'))
  })

  app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'))
  })

  app.listen(PORT, function() {
    console.log('app listening on PORT ' + PORT)
  })
}