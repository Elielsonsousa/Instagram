const express = require("express");
const multer = require("multer");
const UserController = require("./App/Controller/Parceiro/UserController");
const AuthController = require("./App/Controller/Parceiro/Auth/AuthController");
const ClienteController = require("./App/Controller/Client/ClienteController");
const AuthClient = require("./App/Controller/Client/Auth/AuthClient");
const ListServices = require("./App/Controller/Services/ListServices");
const multerConfig = require("./App/Middleware/multer");
const validar = require("./App/Middleware/validade");

const app = express();

const testeController = require("./App/Controller/Parceiro/testeController");

const routes = express.Router();

//Crud Parceiro
routes.post("/store", validar.SignUp, multer(multerConfig).single("avatar"), UserController.store);
routes.get("/index", UserController.index);
//routes.delete("/delete", UserController.delete); //Quando quiser deletar todos os dados do banco
routes.get("/parceiro/:id", UserController.listParceiro);

//Login
routes.post("/login", AuthController.login);
//routes.post("/loginparceiro", validar.SignUp, AuthClient.login);

//Crud Cliente
routes.post("/storecliente", validar.SignUp, ClienteController.storeCliete);
routes.get("/indexcliente", ClienteController.index);
routes.post("/logincliente", AuthClient.login);
routes.get("/c/:id", ClienteController.listId);
routes.delete("/deletecliente",  ClienteController.delete); //Quando quiser deletar todos os dados do banco

//Listar Serviços
routes.get("/listbaba", ListServices.ListBaba);
routes.get("/listdiarista", ListServices.LisDiarista);
routes.get("/listesteticista", ListServices.listEsteticista);
routes.get("/listencanador", ListServices.listEncanador);
routes.get("/listfreelancer", ListServices.listFreelancer);
routes.get("/listgarcom", ListServices.listGarcom);
routes.get("/listmontador", ListServices.listMontador);
routes.get("/listpasseio", ListServices.listPasseio);
routes.get("/listpedreiro", ListServices.listPedreiro);
routes.get("/listpintura", ListServices.listPintura);
routes.get("/listseguranca", ListServices.listSeguranca);
routes.get("/listjardinagem", ListServices.listJardinagem);
routes.get("/listfaztudo", ListServices.listFazTudo);
//adicionar essas rotas
routes.get("/listcuidador", ListServices.listCuidador);
routes.get("/listeletricista", ListServices.listEletricista);
routes.get("/listgesseiro", ListServices.listGesseiro);
routes.get("/listmanicure", ListServices.listManicure);
routes.get("/listmarceneiro", ListServices.listMarceneiro);
routes.get("/listmassagista", ListServices.listMassagista);
routes.get("/listmecanico", ListServices.listMecanico);
routes.get("/listtecnico", ListServices.listTecnico);
routes.get("/listprofessor", ListServices.listProfessor);

//Teste
routes.post("/teste", testeController.store);
routes.get("/teste2", testeController.index);

module.exports = routes;