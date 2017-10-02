'use strict';

var express = require('express');
var UserController = require('../controllers/user');


var api = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/user' });
// Middleware
var md_auth = require('../middleware/authenticated');




// Hello word!
// una vez termine toda la logica del middleware el metodo next() hace que se ejecute el metodo de la ruta!
api.get('/pruebas-del-controlador', md_auth.ensureAuth, UserController.pruebas);
// Guardar usuario
api.post('/register', UserController.saveUser);
// Metodo del login
api.post('/login', UserController.login);
// Metodo para autorizar usuario
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
// Subir imagen de usuario
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
// Devolver imagen al usuario
api.get('/get-image-file/:imageFile', UserController.getImageFile);

api.get('/keepers', UserController.getKeepers);


module.exports = api;