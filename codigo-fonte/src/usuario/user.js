// Carrega do Local Storage as informações do usuário que fez login
usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogado"));

// Exibe nos campos da página as informações do usuário que realizou login
nomeUsuario.innerHTML = usuarioAtual.nome
emailUsuario.innerHTML = usuarioAtual.email
dataUsuario.innerHTML = usuarioAtual.dataNascimento


// Mostra o modal para realizar a troca de senha 
btmSenha.onclick = function () {
    modalSenha.style.display = "block";
    campoSenha.focus();
    btmAlterar.disabled = "true"
}

// Realiza a troca de senha do usuario no Local Storage onde ele é armazenado
btmAlterar.onclick = function () {
    let usuarioAtualizado = usuarioAtual
    usuarioAtual.senha = campoSenha.value
    updateUsuario(usuarioAtualizado);
    modalSenha.style.display = "none"
}

// Desabilita o botão de alterar senha caso ela tenha menos de 4 caracteres
let liberaBotaoMT = function () {
    if (
      campoSenha.value.length >= 4
    ) {
      btmAlterar.disabled = false;
    } else {
      btmAlterar.disabled = true;
    }
  };

  campoSenha.onkeyup = liberaBotaoMT

fechaModal4.onclick = function () {
    modalSenha.style.display = "none";
  };