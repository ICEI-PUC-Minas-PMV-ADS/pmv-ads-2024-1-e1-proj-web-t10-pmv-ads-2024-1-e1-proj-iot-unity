let botaoAdicionarModal = document.querySelector("[data-adicionar]");
let componenteAmbiente = `
    <div class="ambiente">
        <span class="ambiente__titulo">
            <h3>Sala</h3>
            <i class="fa-solid fa-gear"><span class="tooltip">Configurações</span></i>
        </span>
        <span class="ambiente__dispositivos">
            <span class="dispositivos__dispositivo">
                <p>Lâmpada 1</p>
                <i class="fa-solid fa-bars"></i>
            </span>
            <span class="dispositivos__dispositivo">
                <p>Câmera 1</p>
                <i class="fa-solid fa-bars"></i>
            </span>
        </span>
    </div>
`;

let componenteModal = `
    <div class="modal" data-modal>
        <label for="nome">Ambiente:</label>
        <input type="text" placeholder="Nome do ambiente" id="nome">
        <button data-inserir>Inserir</button>
    </div>
`;



let ambientes = document.querySelector("[data-ambientes]");

botaoAdicionarModal.addEventListener('click', () => {
    let modal = document.createElement('div');
    modal.innerHTML = componenteModal
    ambientes.appendChild(modal);
    
    let botaoInserirAmbiente = document.querySelector("[data-inserir]");
        botaoInserirAmbiente.addEventListener("click", () => {
        let modal = document.querySelector("[data-modal]");
        let ambiente = document.createElement("div");
        modal.remove();
        ambientes.appendChild(ambiente);
        ambiente.innerHTML = componenteAmbiente;
    });


    /*let ambiente = document.createElement('div');
    ambientes.appendChild(ambiente)
    ambiente.innerHTML = componenteAmbiente;*/
})


