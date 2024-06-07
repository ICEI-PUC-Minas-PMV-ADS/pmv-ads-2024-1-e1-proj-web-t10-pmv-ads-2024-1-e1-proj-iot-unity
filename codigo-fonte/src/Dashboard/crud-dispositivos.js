/*
Dispositivo
number: id
string: descricao
string: nome
string: localizacao
*/
function createDispositivo(dispositivo){
    let ultimoId = parseInt(localStorage.getItem("ultimo_id_dispositivo")) || 0;
    let novoId = ultimoId + 1;
    dispositivo.id = novoId;
    localStorage.setItem("ultimo_id_dispositivo",novoId);

    let dispositivos = readDispositivos();
    dispositivos.push(dispositivo);
    updateDispositivos(dispositivos);
}

function readDispositivos(){
    return JSON.parse(localStorage.getItem("dispositivos")) || [];
}

function readDispositivo(idDispositivo){
    let dispositivos = readDispositivos();
    return dispositivos.find((dispositivo) => dispositivo.id == idDispositivo);
    
}

function updateDispositivos(dispositivos){
    localStorage.setItem("dispositivos",JSON.stringify(dispositivos));
}

function updateDispositivo(dispositivoAtualizado){
    let dispositivos = readDispositivos();
    let indice = dispositivos.findIndex((dispositivo) => dispositivo.id == dispositivoAtualizado.id);
    dispositivos[indice] = dispositivoAtualizado;
    updateDispositivos(dispositivos);
}

function deleteDispositivo(idExcluida){
    let dispositivos = readDispositivos();
    let indice = dispositivos.findIndex((dispositivo) => dispositivo.id == idExcluida);
    dispositivos.splice(indice, 1);
    updateDispositivos(dispositivos);
}