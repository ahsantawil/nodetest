var mysql = require('mysql');

// conncetion database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sekolah'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected');
});

module.exports = conn;