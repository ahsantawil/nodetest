'use strict';

module.exports = (app) => {
    var jsonku = require('./controller');
    
    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.Getdata);
    
    app.route('/tampil/:id')
        .get(jsonku.GetdataID);
}