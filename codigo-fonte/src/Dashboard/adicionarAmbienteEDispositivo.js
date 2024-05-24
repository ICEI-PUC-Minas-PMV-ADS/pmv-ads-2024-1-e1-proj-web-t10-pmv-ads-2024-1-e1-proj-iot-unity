let botaoAdicionarModal = document.querySelector("[data-adicionar]");
let componenteAmbiente = (nomeDoAmbiente) => {
    return `
    <div class="ambiente">
        <span class="ambiente__titulo">
            <h3>${nomeDoAmbiente}</h3>
            <i class="fa-solid fa-gear"><span class="tooltip">Configurações</span></i>
        </span>
        <span class="ambiente__dispositivos">
            <span class="dispositivos__dispositivo">
                <p>Lâmpada 4</p>
                <i class="fa-solid fa-bars"></i>
            </span>
            <span class="dispositivos__dispositivo">
                <p>Câmera 1</p>
                <i class="fa-solid fa-bars"></i>
            </span>
        </span>
    </div>
`;
}
;

let componenteModal = `
    <div class="modal" data-modal>
        <label for="nome">Ambiente:</label>
        <input type="text" placeholder="Nome do ambiente" id="nome" data-ambiente>
        <button data-inserir>Inserir</button>
    </div>
`;



let ambientes = document.querySelector("[data-ambientes]");

botaoAdicionarModal.addEventListener('click', () => {
    let modalContainer = document.createElement('div');
    modalContainer.style.position = "static";
    modalContainer.innerHTML = componenteModal
    ambientes.appendChild(modalContainer);
    let modal = document.querySelector("[data-modal]");
    document.documentElement.style.setProperty("--altura", `${modal.offsetHeight / 2}px`);
    document.documentElement.style.setProperty("--largura", `${modal.offsetWidth / 2}px`);
    let botaoInserirAmbiente = document.querySelector("[data-inserir]");
    
    botaoInserirAmbiente.addEventListener("click", () => {
        let ambiente = document.createElement("div");
        let nomeAmbiente = document.querySelector("[data-ambiente]")
        ambiente.innerHTML = componenteAmbiente(nomeAmbiente.value);
        ambientes.appendChild(ambiente);
        modal.remove();
    });
})


