function montaTabela() {
  //carrega os dispositivos do local storage
  let dados = readDispositivos();

  //gera o conteúdo da lista
  let conteudo = "";
  dados.forEach((item) => {
    conteudo += `
      <tr id='linha-${item.id}'>
        <td class= 'selecao'>
          <input type="radio" name="campoSelecao" value="${item.id}" />
        </td>
        <td class="celula-1">
          ${item.nome}
        </td>
        <td class="celula-2">
          ${item.localizacao}
        </td>
        <td class="celula-3">
          ${item.descricao}
        </td>
        <td></td>
      </tr>          
      `;
  });
  conteudoDispositivos.innerHTML = conteudo;
}




// Mostra a janela modal para adição de novo dispositivo
document.getElementById("addDispositivo").onclick = function () {
    campoNome.value = "";
    campoDescricao.value = "";
    campoLocalizacao.value = "";
    campoNome.disabled = false;
    campoDescricao.disabled = false;
    campoLocalizacao.disabled = false;
    modalDispositivo.style.display = "block";
    btMTCriar.style.display = "inline-block";
    btMTCriar.disabled = true;
    campoDescricao.focus();
  };
  
  // Confirma a criação do dispositivo
  btMTCriar.onclick = function () {
    let dispositivo = {
      nome: campoNome.value,
      descricao: campoDescricao.value,
      localizacao: campoLocalizacao.value,
    };
    modalDispositivo.style.display = "none";
    createDispositivo(dispositivo);
  };
  
  // Configura o botão de fechar a janela modal
  fechaModal.onclick = function () {
    modalDispositivo.style.display = "none";
  };

  // Configura o botão de fechar a janela da lista de dispositivos
  fechaModal2.onclick = function () {
    modalDispositivos.style.display = "none";
  };

  // Cancela a criação do dispositivo
btMTCancelar.onclick = function () {
    modalDispositivo.style.display = "none";
  };
  
  // Verifica se os três campos estão preenchidos antes de criar o dispositivo
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

  document.getElementById("listaDispositivos").onclick = function () {
    montaTabela()
    modalDispositivos.style.display = "block"
  }

  montaTabela();

  