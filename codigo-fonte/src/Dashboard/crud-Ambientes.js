/*
Ambiente
number: id
string: nome
*/
function createAmbiente(ambiente){
    let ultimoId = parseInt(localStorage.getItem("ultimo_id_ambiente")) || 0;
    let novoId = ultimoId + 1;
    ambiente.id = novoId;
    localStorage.setItem("ultimo_id_ambiente",novoId);

    let ambientes = readAmbientes();
    ambientes.push(ambiente);
    updateAmbientes(ambientes);
}

function readAmbientes(){
    return JSON.parse(localStorage.getItem("ambientes")) || [];
}

function readAmbiente(idAmbiente){
    let ambientes = readAmbientes();
    return ambientes.find((ambiente) => ambiente.id == idAmbiente);
    
}

function updateAmbientes(ambientes){
    localStorage.setItem("ambientes",JSON.stringify(ambientes));
}

function updateAmbiente(ambienteAtualizado){
    let ambientes = readAmbiente();
    let indice = ambientes.findIndex((ambiente) => ambiente.id == ambienteAtualizado.id);
    ambientes[indice] = ambienteAtualizado;
    updateAmbientes(ambientes);
}

function deleteAmbiente(idExcluida){
    let ambientes = readAmbientes();
    let indice = ambientes.findIndex((ambiente) => ambiente.id == idExcluida);
    ambientes.splice(indice, 1);
    updateAmbientes(ambientes);
}