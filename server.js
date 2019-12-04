'use strict';

const express = require('express');

const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Ranjit\n');
});

app.listen(PORT);
console.log(`Running on http://${PORT}`);
