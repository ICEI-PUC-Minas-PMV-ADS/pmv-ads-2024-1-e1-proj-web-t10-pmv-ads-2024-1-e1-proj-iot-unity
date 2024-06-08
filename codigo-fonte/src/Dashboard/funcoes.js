// -------------------------------- Funções para os dispositivos-------------------------------------
// Monta a lista de disopositivos atuais
function montaTabela() {
  //carrega os dispositivos do local storage
  let dadosDispositivo = readDispositivos();

  //gera o conteúdo da lista
  let conteudoDispositivo = "";
  dadosDispositivo.forEach((item) => {
    conteudoDispositivo += `
      <tr id='linha-${item.id}' class="linhas">
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
  conteudoDispositivos.innerHTML = conteudoDispositivo;

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

let inputFiltro = document.querySelector("[data-busca]");
  inputFiltro.addEventListener('input', () =>{
    const inputBusca = inputFiltro.value.toLowerCase();
    const itensDaLista = document.querySelectorAll('.linhas');
    dadosDispositivo.forEach(item => {
      if(item.localizacao.toLowerCase().includes(inputBusca)){
        let elemento = document.querySelector(`#linha-${item.id}`);
        elemento.style.display = "";
      } else{
        let elemento = document.querySelector(`#linha-${item.id}`);
        elemento.style.display = "none";
      }
    })
  })

};

// Monta a bara de dispositivos
function montaDashboard() {
  //Carrega os dados do local storage
  let dadosDashboard = readDispositivos();

  //Gera conteúdo do dashboard
  let conteudoDashboard = "";
  dadosDashboard.forEach((dispo) => {
    conteudoDashboard += `
      <span id="iconeDispositivo" value="${dispo.id}" name="iconDispo" class="geral__dispositivo">
      <h4>${dispo.nome}</h4>
      <i class="fa-solid fa-bars"></i>
      </span>
      `;
  });
  barraDispositivos.innerHTML = conteudoDashboard

  document.querySelectorAll(".geral__dispositivo").forEach(function(icon){
    icon.addEventListener("click", function(){
      let dispositivoID = icon.getAttribute("value");
      let dispositivo = readDispositivo(dispositivoID)
      nome_Dispositivo.value = dispositivo.nome;
      descricao_Dispositivo.value = dispositivo.descricao;
      localização_Dispositivo.value = dispositivo.localizacao;
      nome_Dispositivo.disabled = true;
      descricao_Dispositivo.disabled = true;
      localização_Dispositivo.disabled = true
    })
  })
};

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
  montaDashboard();
  atualizaWorkarea();
};

// Verifica se os três campos estão preenchidos antes de criar o dispositivo
let liberaBotaoMT = function () {
    if (
      campoNome.value.length > 0 &&
      campoDescricao.value.length > 0
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
  montaDashboard();
  atualizaWorkarea();
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
  montaDashboard();
  atualizaWorkarea();
};

//------------------------------------ Funções para os ambientes -------------------------------------//
// Monta o dashboard de acordo com os ambientes no Local Storage
function montaAmbiente () {

// Carrega os dados do Local Storage
let dadosAmbiente = readAmbientes();
// gera o conteúdo do ambiente
let conteudoAmbiente = "";
dadosAmbiente.forEach((item) => {
  conteudoAmbiente+= `<div class="ambiente" value="${item.id}">
  <span class="ambiente__titulo">
      <h3>${item.nome}</h3>
      <img value="${item.id}" src="./assets/remove.png" alt="Icone remover" class="excluirAmbiente"> 
  </span>
  <span id="${item.nome}" value="${item.id}" class="ambiente__dispositivos">
  </span>
</div>`
});

dashboardAmbiente.innerHTML = conteudoAmbiente

// Gera os botões de excluir ambiente
document.querySelectorAll(".excluirAmbiente").forEach(function(icon){
  icon.addEventListener("click", function(){
    let ambienteID = icon.getAttribute("value");
    let ambiente = readAmbiente(ambienteID)
    if(confirm("Tem certeza que deseja excluir esse ambiente?")){
      deleteAmbiente(ambiente)
    }
    montaAmbiente();
    atualizaAmbiente();
    atualizaWorkarea();
  })
})
}

// Gera o conteududo de dispositivos do ambiente de acordo com a localização informada para o dispositivo
function atualizaWorkarea() {
  document.querySelectorAll(".ambiente__dispositivos").forEach(function (ambient) {
    let ambienteID = ambient.getAttribute("value");
    let ambiente = readAmbiente(ambienteID);
    let dispositivos = readDispositivos();
    let spanID = ambient.getAttribute("id")
    let conteudoAmbient = ""; // Vamos criar uma variável para armazenar o conteúdo HTML

    for (let i = 0; i < dispositivos.length; i++) {
      if (dispositivos[i].localizacao === ambiente.nome) {
        // Adiciona o conteúdo do dispositivo à variável conteudoAmbient
        conteudoAmbient += `
          <span class="dispositivos__dispositivo">
            <p>${dispositivos[i].nome}</p>
            <i class="fa-solid fa-bars"></i>
          </span>
        `;
      }
    }

    // Cria um elemento span para conter os dispositivos
    let spanDispositivos = document.createElement('span');
    spanDispositivos.innerHTML = conteudoAmbient; // Define o conteúdo HTML

    // Encontra a span correspondente ao ambiente e anexa os dispositivos a ela
    let spanAmbiente = document.getElementById(spanID);
    if (spanAmbiente) {
      spanAmbiente.innerHTML = ''; // Limpa o conteúdo anterior, se houver
      spanAmbiente.appendChild(spanDispositivos);
    } else {
      console.error("Span do ambiente não encontrada para o ID:", ambienteID);
    }
  });
}

// Atualiza a lista de ambientes disponíveis para atribuir ao dispositivo de acordo com os ambientes criados
function atualizaAmbiente () {
  //carrega os ambientes do local storage
  let dadosAmbientes = readAmbientes();

  //gera o conteúdo da lista
  let conteudoAmbientes = "";
  dadosAmbientes.forEach((item) => {
    conteudoAmbientes +=`<option value="${item.nome}">${item.nome}</option>`
});

campoLocalizacao.innerHTML = conteudoAmbientes
}

// Mostra a janela modal para adição de um novo ambiente
document.getElementById("addAmbiente").onclick = function () {
  campoTipo.value = "";
  campoTipo.disabled = false;
  btmAdicionar.disabled = true;
  modalAmbiente.style.display = "block";
  btmAdicionar.style.display = "inline-block";
  campoTipo.focus();
};

// Configura o botão de fechar a janela da lista de dispositivos
fechaModal3.onclick = function () {
  modalAmbiente.style.display = "none";
};

// Confirma a criação do ambiente
btmAdicionar.onclick = function () {
  let ambiente = {
    nome: campoTipo.value,
  };
  modalAmbiente.style.display = "none";
  createAmbiente(ambiente);
  montaAmbiente();
  atualizaAmbiente();
  atualizaWorkarea();
};

// Verifica se os três campos estão preenchidos antes de criar o dispositivo
let liberaBotaoMT2 = function () {
  if (
    campoTipo.value.length > 0
  ) {
    btmAdicionar.disabled = false;
  } else {
    btmAdicionar.disabled = true;
  }
};
campoTipo.onkeyup = liberaBotaoMT2;

montaTabela();
montaDashboard();
montaAmbiente();
atualizaAmbiente();
atualizaWorkarea();

