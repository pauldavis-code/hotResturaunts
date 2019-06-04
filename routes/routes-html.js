const express = require('express');

var app = express();
var PORT = 8000

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'home.html'));
  })

  app.get('/tables', function(req, res) {
    res.sendFIle(path.join(__dirname + 'tables.html'))
  })

  app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname + 'reserve.html'))
  })
}