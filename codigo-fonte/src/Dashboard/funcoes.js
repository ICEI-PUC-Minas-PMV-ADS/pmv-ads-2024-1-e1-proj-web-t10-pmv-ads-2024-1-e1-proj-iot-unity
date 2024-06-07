// Monta a lista de disopositivos atuais
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

  // determina comportamento dos botões e outros componentes interativos
  let botoesSelecao = document.querySelectorAll("input[name=campoSelecao]");
  botoesSelecao.forEach((b) => {
    b.onclick = function (e) {
      btMEditar.disabled = false;
      btMRemover.disabled = false;
    };
  });
  btMEditar.disabled = true;
  btMRemover.disabled = true;
}

function montaDashboard () {
  //Carrega os dados do local storage
  let dadosDashboard = readDispositivos();

  //Gera conteúdo do dashboard
  let conteudoDashboard = "";
  dadosDashboard.forEach((disp) => {
    conteudoDashboard +=
  })
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
    btMAlterar.style.display = "none";
    btMExcluir.style.display = "none";
    btMAlterar.disabled = true;
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
  btMExcluir.style.display = "inline-block";
  createDispositivo(dispositivo);
};

// Verifica se os três campos estão preenchidos antes de criar o dispositivo
let liberaBotaoMT = function () {
    if (
      campoNome.value.length > 0 &&
      campoDescricao.value.length > 0 &&
      campoLocalizacao.value.length > 0
    ) {
      btMTCriar.disabled = false;
      btMAlterar.disabled = false;
    } else {
      btMTCriar.disabled = true;
      btMAlterar.disabled = true;
    }
  };
  campoNome.onchange = liberaBotaoMT;
  campoDescricao.onchange = liberaBotaoMT;
  campoLocalizacao.onchange = liberaBotaoMT;

// Configura o botão de fechar a janela modal
fechaModal.onclick = function () {
  modalDispositivo.style.display = "none";
};

// Cancela a criação do dispositivo
btMTCancelar.onclick = function () {
  modalDispositivo.style.display = "none";
};

// Mostra a tabela de dispositivos
document.getElementById("listaDispositivos").onclick = function () {
  montaTabela()
  modalDispositivos.style.display = "block"
  btMExcluir.style.display = "inline-block";
};
// Configura o botão de fechar a janela da lista de dispositivos
fechaModal2.onclick = function () {
  modalDispositivos.style.display = "none";
};

// Configura o botão Editar para abrir o modal
btMEditar.onclick = function () {
  let selecoes = Array.from(
    document.querySelectorAll("input[name=campoSelecao]")
  );
  let selecionado = selecoes.find((i) => i.checked == true);
  if(selecionado) {
    let dispositivo = readDispositivo(selecionado.value);
    campoNome.value = dispositivo.nome;
    campoDescricao.value = dispositivo.descricao;
    campoLocalizacao.value = dispositivo.localizacao;
    campoID.value = dispositivo.id
    campoNome.disabled = false;
    campoDescricao.disabled = false;
    campoLocalizacao.disabled = false;
    modalDispositivos.style.display = "none"
    modalDispositivo.style.display = "block";
    btMTCriar.style.display = "none";
    btMAlterar.style.display = "inline-block";
    btMExcluir.style.display = "none";
    btMAlterar.disabled = false;
    campoNome.focus();
  }
};

// Confirma a alteração do dispositivo
btMAlterar.onclick = function () {
  let dispositivoAtualizado = {
    id: parseInt(campoID.value),
    nome: campoNome.value,
    descricao: campoDescricao.value,
    localizacao: campoLocalizacao.value,
  };
  updateDispositivo(dispositivoAtualizado);
  modalDispositivo.style.display = "none";
  montaTabela();
};

// Abre janela modal para confirmar a remoção do dispositivo
btMRemover.onclick = function () {
  let selecoes = Array.from(
    document.querySelectorAll("input[name=campoSelecao]")
  );
  let selecionado = selecoes.find((i) => i.checked == true);
  if(selecionado) {
    let dispositivo = readDispositivo(selecionado.value);
    campoNome.value = dispositivo.nome;
    campoDescricao.value = dispositivo.descricao;
    campoLocalizacao.value = dispositivo.localizacao;
    campoID.value = dispositivo.id
    campoNome.disabled = true;
    campoDescricao.disabled = true;
    campoLocalizacao.disabled = true;
    modalDispositivos.style.display = "none"
    modalDispositivo.style.display = "block";
    btMTCriar.style.display = "none";
    btMAlterar.style.display = "none";
    btMExcluir.style.display = "inline-block";
  }
};

// Confirma a exclusão do dispositivo
btMExcluir.onclick = function () {
  deleteDispositivo(parseInt(campoID.value));
  modalDispositivo.style.display = "none"
  montaTabela();
};

  montaTabela();

  