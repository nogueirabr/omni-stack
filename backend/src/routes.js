const express = require('express');
const {celebrate, Segments, Joi}= require('celebrate');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();
//#region Get
routes.get('/ongs', ongController.index);
routes.get('/incidents', incidentController.index);
routes.get('/profile', celebrate({
  [Segments.HEADERS]:Joi.object().keys({
    authorization:Joi.string().required(),
  })
}), profileController.index);
//#endregion

//#region Post
    routes.post('/ongs',  celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      })
    }), ongController.create);
routes.post('/incidents', incidentController.create);
routes.post('/sessions', sessionController.create);
//#endregion

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]:Joi.object()
}), incidentController.delete);


module.exports = routes;