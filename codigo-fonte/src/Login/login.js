document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.onsubmit = function (event) {
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
        if (password.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres.');
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
        } else {
            loginForm.action = '../usuario/usuario.html'
            return true;
        }
        
    };
});