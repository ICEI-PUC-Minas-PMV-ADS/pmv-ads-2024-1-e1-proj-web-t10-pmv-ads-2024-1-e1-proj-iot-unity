// Mostra a janela modal para criação de nova tarefa
document.getElementById("addDispositivo").onclick = function () {
    campoNome.value = "";
    campoDescricao.value = "";
    campoLocalizacao.value = "";
    campoNome.disabled = false;
    campoDescricao.disabled = false;
    campoLocalizacao.disabled = false;
    modalTarefa.style.display = "block";
    btMTCriar.style.display = "inline-block";
    btMTAlterar.style.display = "none";
    btMTExcluir.style.display = "none";
    btMTCriar.disabled = true;
    campoDescricao.focus();
  };
  
  // Confirma a criação da tarefa
  btMTCriar.onclick = function () {
    let dispositivo = {
      nome: campoNome.value,
      descricao: campoDescricao.value,
      localizacao: campoLocalizacao.value,
    };
    modalTarefa.style.display = "none";
    createDispositivo(dispositivo);
  };
  
  // Configura o botão de fechar a janela modal
  fechaModal.onclick = function () {
    modalTarefa.style.display = "none";
  };

  // Cancela a criação, alteração ou exclusão da tarefa
btMTCancelar.onclick = function () {
    modalTarefa.style.display = "none";
  };
  
  // Verifica se os três campos estão preenchidos antes de criar ou alterar tarefa
  let liberaBotaoMT = function () {
    if (
      campoNome.value.length > 0 &&
      campoDescricao.value.length > 0 &&
      campoLocalizacao.value.length > 0
    ) {
      btMTCriar.disabled = false;
      btMTAlterar.disabled = false;
    } else {
      btMTCriar.disabled = true;
      btMTAlterar.disabled = true;
    }
  };
  campoNome.onchange = liberaBotaoMT;
  campoDescricao.onchange = liberaBotaoMT;
  campoLocalizacao.onchange = liberaBotaoMT;