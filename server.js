
const express = require('express');

const app = express();
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.get('/health-check', (req, res, next) => {
  res.sendStatus(200);
});
app.get('/', (req, res, next) => {
  res.sendStatus(200);
});
app.listen(80, '0.0.0.0');
