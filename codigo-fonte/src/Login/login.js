document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('butaoLogin');
    botao.onclick = function (event) {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const userRole = document.getElementById('user').checked;
        const adminRole = document.getElementById('admin').checked;

        let isValid = true;

        // Validação de email aprimorada
        if (!email) {
            alert('Por favor, insira um email.');
            isValid = false;
        } else if (!/^[^@]+@[^@]+\.[^@]+$/i.test(email)) {
            alert('Por favor, insira um email válido.');
            isValid = false;
        }

        // Validação de senha
        if (password.length < 4) {
            alert('A senha deve ter pelo menos 4 caracteres.');
            isValid = false;
        }

        // Validação de tipo de usuário
        if (!userRole && !adminRole) {
            alert('Por favor, selecione o tipo de usuário.');
            isValid = false;
        }

        // Impedir envio do formulário se alguma validação falhar
        if (!isValid) {
            document.getElementById('password').value = ''; // Limpa o campo senha
            event.preventDefault(); // Impede o envio do formulário
            return false;
        }

        let usuarios = readUsuarios();
        for (let i = 0; i < usuarios.length; i++) {
            if (
                email == usuarios[i].email &&
                password == usuarios[i].senha
            ) {
                if (usuarios[i].ativo) {
                    // O usuário está ativo e as credenciais estão corretas
                    alert("login realizado com Sucesso!");
                    console.log("Usuário encontrado:", usuarios[i]);
                    localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[i]));
                    window.location.href = '.././usuario/usuario.html'
                } else {
                    // O usuário existe, mas não está ativo
                    alert("Usuário não está ativo");
                }
                break; // Parar o loop se encontrar o usuário correto
            } else if (i === usuarios.length - 1) {
                // Se for o último usuário e não encontrar correspondência
                alert("Email ou senha incorretos");
            }
        }
    };
});