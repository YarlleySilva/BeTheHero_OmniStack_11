// Todas as rotas GET, POST, PUT, DELETE ficam aqui.

const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();


//Fazendo Login
routes.post("/sessions", SessionController.create);

//Lista todas as Ongs cadastradas.
routes.get("/ongs", OngController.index);

//Cadastra uma nova Ong
routes.post("/ongs", OngController.create);

//Lista todos os Casos de uma especifica ONG
routes.get("/profile", ProfileController.index);



//Lista todos os casos de todas as ONGs
routes.get("/incidents", IncidentController.index);

//Cria um novo Caso de uma ONG
routes.post("/incidents", IncidentController.create);

//Deleta um Caso de uma ONG
routes.delete("/incidents/:id", IncidentController.delete);



module.exports = routes;