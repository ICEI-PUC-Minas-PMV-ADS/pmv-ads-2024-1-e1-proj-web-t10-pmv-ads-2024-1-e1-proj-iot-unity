let botaoAdicionarDispositivo = document.querySelector("[data-adicionar]");
let componente = `
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

let ambientes = document.querySelector("[data-ambientes]");

botaoAdicionarDispositivo.addEventListener('click', () => {
    let ambiente = document.createElement('div');
    ambientes.appendChild(ambiente)
    ambiente.innerHTML = componente;
})