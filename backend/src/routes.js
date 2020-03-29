const express = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();
//#region Get
routes.get('/ongs', ongController.index);
routes.get('/incidents', incidentController.index);
routes.get('/profile', profileController.index);
//#endregion

//#region Post
routes.post('/ongs',  ongController.create);
routes.post('/incidents', incidentController.create);
routes.post('/sessions', sessionController.create);
//#endregion

routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;