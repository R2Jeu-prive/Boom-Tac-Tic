const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
});

app.get('/script', (req, res) => {
  res.sendFile("src/script.js", {root: __dirname })
});

app.listen(3000, () => {
  console.log('server started');
});