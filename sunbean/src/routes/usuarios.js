var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/plantacao", function (req, res) {
    usuarioController.plantacao(req, res);
});

router.post("/novasenha", function (req, res) {
    usuarioController.novasenha(req, res);
});

router.get("/listarPlantacoes", function (req, res) {
    usuarioController.listarPlantacoes(req, res);
});

module.exports = router;