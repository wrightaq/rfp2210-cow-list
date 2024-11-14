const mysql = require('mysql');

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'Cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
//get all cow names. this is the default for the page





// Don't forget to export your functions!
module.exports = {

};
