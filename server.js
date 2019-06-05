const express = require('express');
const path = require('path');

var routesHTML = require('./routes/routes-html')

var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routesHTML(app, PORT)

