// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var usuarioPerfil = document.getElementById("usuarioPerfil");

    if (email != null && nome != null && idUsuario != null) {
        

    } else {
        window.location = "../login.html";
        
        
    }
}


function validarSessaoIndex() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var usuarioPerfil = document.getElementById("usuarioPerfil");

    if (email != null && nome != null && idUsuario != null) {
        usuarioPerfil.innerHTML = nome;
        hello.style.display = "flex";

    } else {
        hello.style.display ="none"
           
    }


}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }

