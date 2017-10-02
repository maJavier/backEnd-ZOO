'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port =  process.env.PORT || 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', {useMongoClient:true})
        .then(() => {
            console.log('Connection found');
            
                app.listen(port, () => {
                console.log('El servidor local con node y express esta corriendo correctamente en el puerto localhost:3700');
            });
        })
        .catch(err => console.log(err));
;

