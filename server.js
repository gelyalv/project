const path = require("path");
const express = require('express')

const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.use('/static', express.static(path.resolve(__dirname, 'public')));

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

app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port}`)
})