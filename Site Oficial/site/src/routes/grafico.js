var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/acimaDaMedia", function (req, res) {
    graficoController.acimaDaMedia(req, res);
});

router.post("/naMedia", function (req, res) {
    graficoController.naMedia(req, res);
});

router.post("/emAbaixo/:idUsuario", function (req, res) {
    graficoController.emAbaixo(req, res);
});

router.post("/usuariosMediaAbaixo", function (req, res) {
    graficoController.usuariosMediaAbaixo(req, res);
})

router.post("/usuariosMediaAcima", function (req, res) {
    graficoController.usuariosMediaAcima(req, res);
})

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;