const express = require('express');
const path = require('path');
const db = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  console.log('hello')
  const q = "SELECT name from cow_names";
  db.query(q, (err, data) => {
    console.log(err, data);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
