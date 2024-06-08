function suporte(){
    const modal = document.getElementById ('container-chat')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) =>{
        if(e.target.id == 'fechar-chat' || e.target.id == 'container-chat')
            modal.classList.remove('abrir')
    })
}