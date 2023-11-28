var database = require("../database/config");

function acimaDaMedia() {
    var selectAcima = `select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado > 60; `
    console.log("Executando a instrução do select acima: \n" + (database.executar(selectAcima)));
    return database.executar(selectAcima);
}

function naMedia() {
    var selectnaMedia = `select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado = 60; `
    console.log("Executando a instrução do select na Media: \n" + (database.executar(selectnaMedia)));
    return database.executar(selectnaMedia);
}

function emAbaixo() {
    var selectAbaixo = `select count(fkUsuario) qtdUsuarios
    from resultadoquiz where resultado < 60; `
    console.log("Executando a instrução do select em Abaixo: \n" + (database.executar(selectAbaixo)));
    return database.executar(selectAbaixo);
}

function usuariosMediaAbaixo() {
    var selectUsuariosAbaixo = `select count(fkusuario) qtdusuario,
    resultado as resultado from resultadoquiz where resultado <= 60
    group by resultado;`
    console.log("Executando a instrução do select usuarios Média Abaixo: \n" + (database.executar(selectUsuariosAbaixo)));
    return database.executar(selectUsuariosAbaixo)
}

function usuariosMediaAcima() {
    var selectUsuariosAcima = `select count(fkusuario) qtdusuario,
    resultado as resultado from resultadoquiz where resultado >= 60
    group by resultado;`
    console.log("Executando a instrução do select usuarios Média Abaixo: \n" + (database.executar(selectUsuariosAcima)));
    return database.executar(selectUsuariosAcima)
}

module.exports = {
    acimaDaMedia,
    naMedia,
    emAbaixo,
    usuariosMediaAbaixo,
    usuariosMediaAcima
}