document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getCode').addEventListener('click', function() {
        if (validateEmail()) {
            alert('Código de verificação enviado.');
        }
    });

    document.getElementById('sendMail').addEventListener('click', function() {
        if (validateEmail() && validateVerificationCode()) {                    
            document.querySelector('.resetContainer').style.display = 'block';
        }
    });

    document.getElementById('verificationCode').addEventListener('input', function() {
        restrictCodeInput.call(this);
    });
    

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        if (!email) {
            alert('Por favor, insira um email.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um email válido.');
            return false;
        }
        return true;
    }

    function restrictCodeInput() {
        const code = this.value;
        this.value = code.replace(/[^0-9]/g, '').substring(0, 6);
    }
    function validateVerificationCode() {
        const code = document.getElementById('verificationCode').value;
        if (code.length !== 6) {
            alert('O código de verificação deve ter exatamente 6 dígitos.');
            return false;
        }
        return true;
    }
     

    document.querySelector('.resetContainer button').addEventListener('click', function() {
        resetPassword();
    });

    function resetPassword() {
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        let errorMessage = '';
    
        if (newPassword.length < 8) {
            errorMessage += 'A senha deve ter pelo menos 8 caracteres.<br>';
        }
        if (newPassword !== confirmPassword) {
            errorMessage += 'As senhas não coincidem.<br>';
            document.getElementById('confirmPassword').value='';
        }
        if (errorMessage.length > 0) {
            document.getElementById('errorMessages').innerHTML = errorMessage;
            return;
        } else {
            document.getElementById('errorMessages').innerHTML = '';
            alert('Senha alterada com sucesso!');
            setTimeout(function() {
                window.location.href= '../login.html' 
            }, 2000);
           
        }
    }
    
});
