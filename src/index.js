const express = require('express');
const { loadJsonFiles, getBreakdown } = require('./db');

const app = express();
const port = 3000;

loadJsonFiles();

const breakdown = (type, req, res) => {
  try {
    const data = getBreakdown(type);
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

app.get('/year', (req, res) => breakdown(['year'], req, res));
app.get('/region', (req, res) => breakdown(['region'], req, res));
app.get('/variety', (req, res) => breakdown(['variety'], req, res));
app.get('/yearandvariety', (req, res) =>
  breakdown(['year', 'variety'], req, res),
);

app.listen(port, () =>
  console.log(`Vintrace app listening at http://localhost:${port}`),
);
