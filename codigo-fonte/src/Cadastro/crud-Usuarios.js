/*
Usuario
number: id
string: nome
string: email
string: data de nascimento
string: senha
*/
function createUsuario(usuario){
    let ultimoId = parseInt(localStorage.getItem("ultimo_id_usuario")) || 0;
    let novoId = ultimoId + 1;
    usuario.id = novoId;
    usuario.ativo = true
    localStorage.setItem("ultimo_id_usuario",novoId);

    let usuarios = readUsuarios();
    usuarios.push(usuario);
    updateUsuarios(usuarios);
}

function readUsuarios(){
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function readUsuario(idUsuario){
    let usuarios = readUsuarios();
    return usuarios.find((usuario) => usuario.id == idUsuario);
    
}

function updateUsuarios(usuarios){
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
}

function updateUsuario(usuarioAtualizado){
    let usuarios = readUsuarios();
    let indice = usuarios.findIndex((usuario) => usuario.id == usuarioAtualizado.id);
    usuarios[indice] = usuarioAtualizado;
    updateUsuarios(usuarios);
}

function deleteUsuario(idExcluida){
    let usuarios = readUsuarios();
    let indice = usuarios.findIndex((usuario) => usuario.id == idExcluida);
    usuarios.splice(indice, 1);
    updateDispositivos(usuarios);
}