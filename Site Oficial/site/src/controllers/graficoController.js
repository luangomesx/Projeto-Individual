var graficoModel = require("../models/graficoModel");

function acimaDaMedia(req, res) {

    var idUsuario = req.query.idUsuario;
    graficoModel.acimaDaMedia(idUsuario)
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno de servidor" });
        });

};

function naMedia(req, res) {

    var idUsuario = req.query.idUsuario;
    graficoModel.naMedia(idUsuario)
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno de servidor" });
        });

};

function emAbaixo(req, res) {

    var idUsuario = req.query.idUsuario;
    graficoModel.emAbaixo(idUsuario)
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno de servidor" });
        });

};

function usuariosMediaAbaixo(req, res) {

    graficoModel.usuariosMediaAbaixo()
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno de servidor" });
        });

};

function usuariosMediaAcima(req, res) {

    graficoModel.usuariosMediaAcima()
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno de servidor" });
        });

};


module.exports = {
    acimaDaMedia,
    naMedia,
    emAbaixo,
    usuariosMediaAbaixo,
    usuariosMediaAcima

}