'use strict';

var express = require('express');
var AnimalController = require('../controllers/animal');
var api = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/animal' });
// Middleware
var md_auth = require('../middleware/authenticated');
var md_admin = require('../middleware/is_admin');



// una vez termine toda la logica del middleware el metodo next() hace que se ejecute el metodo de la ruta!
api.get('/pruebas-animales', md_auth.ensureAuth, AnimalController.pruebas);

api.post('/animal', [md_auth.ensureAuth, md_admin.isAdmin], AnimalController.saveAnimal);

api.get('/animals', AnimalController.getAnimals);

api.get('/animal/:id', AnimalController.getAnimal);

api.put('/animal/:id', [md_auth.ensureAuth, md_admin.isAdmin], AnimalController.updateAnimal);

api.post('/upload-image-animal/:id', [md_auth.ensureAuth, md_admin.isAdmin], AnimalController.uploadImage);

api.get('/get-image-file/:imageFile', AnimalController.getImageFile);

api.delete('/animal/:id', [md_auth.ensureAuth, md_admin.isAdmin], AnimalController.deleteAnimal);


module.exports = api;