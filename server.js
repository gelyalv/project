const path = require("path");
var http = require('http');
var https = require('https');
const express = require('express');
const fs = require("fs");

const hostname = "simpleblog.local";
const port = 443;
var privateKey = fs.readFileSync('sslcert/server.key');
var certificate = fs.readFileSync('sslcert/server.crt');

var credentials = {key: privateKey, cert: certificate};


const app = express(credentials);
app.use('/static', express.static(path.resolve(__dirname, 'public')));
app.get('/users', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'users.json'))
})

app.get('/', (req, res) => {
  // Считывает файл по пути и отправляет его содержимое
  res.sendFile(path.resolve(__dirname, 'index.html')); // C:\Users\angel\project\index.html
});

app.get('/profile',  (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/register',  (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);