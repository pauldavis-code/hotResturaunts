const express = require('express');
const path = require('path');
const mysql = require('mysql')

var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

