'use strict';

var response = require('./res');
var connection = require('./Config');

exports.index = (req, res) => {
    response.ok('aplikasi Rest API berjalan', res);
};

// Menampilkan data 
exports.Getdata = (req, res) => {
    connection.query('SELECT * FROM siswa', (error, rows, fileds) => {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan data sesuai id
exports.GetdataID = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id = ?', [id], (error, rows, fileds) => {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}