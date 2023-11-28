var quizModel = require("../models/quizModel");
// var aquarioModel = require("../models/aquarioModel");

// function autenticar(req, res) {
//     var resultado = req.body.resultadoServer;
    

//     if (resultado == undefined) {
//         res.status(400).send("Seu resultado está undefined!");
//     } else {

//         quiz.autenticar(resultado)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                         // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
//                         //     .then((resultadoAquarios) => {
//                         //         if (resultadoAquarios.length > 0) {
//                                     res.json({
//                                         id: resultadoAutenticar[0].idresultadoQuiz,
//                                         resultado: resultadoAutenticar[0].resultado
                                        
//                                     });
//                         //         } else {
//                         //             res.status(204).json({ aquarios: [] });
//                         //         }
//                         //     })
//                     } 
//                     // else if (resultadoAutenticar.length == 0) {
//                     //     res.status(403).send("Email e/ou senha inválido(s)");
//                     // } else {
//                     //     res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     // }
//                 }
//             )
//             // .catch(
//             //     function (erro) {
//             //         console.log(erro);
//             //         console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//             //         res.status(500).json(erro.sqlMessage);
//             //     }
//             // );
//     }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultado = req.body.resultadoServer;
    var idUsuario = req.body.idUsuarioServer;
    

    // Faça as validações dos valores
    if (resultado == undefined) {
        res.status(400).send("Seu resultado está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");   
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(resultado, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao mostrar o resultado! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    // autenticar,
    cadastrar
}