const express = require('express');
const path = require('path');
const {connection} = require('./index.js')
// const { db } = require('./index.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/1', (req, res) => {
  console.log('hello')
  const q = "SELECT name from cow_names";
  connection.query(q, (err, data) => {
    console.log(err, data);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
