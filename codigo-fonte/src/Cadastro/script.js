function togglePasswordVisibility(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
  
    if (input.type === "password") {
      input.type = "text";
      button.textContent = "Ocultar";
    } else {
      input.type = "password";
      button.textContent = "Mostrar";
    }
  }
  
  document.getElementById('toggleSenha').addEventListener('click', () => {
    togglePasswordVisibility('senha', 'toggleSenha');
  });
  
  document.getElementById('toggleConfirmacaoSenha').addEventListener('click', () => {
    togglePasswordVisibility('confirmacaoSenha', 'toggleConfirmacaoSenha');
  });  

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impedir que o submit salve sem ter completado tudo
  
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const dataNascimento = document.getElementById('dataNascimento').value;
      const senha = document.getElementById('senha').value;
  
      if (senha!== document.getElementById('confirmacaoSenha').value) {
        alert('As senhas não são iguais.');
        return;
      }
  
      localStorage.setItem('usuario', JSON.stringify({
        nome,
        email,
        dataNascimento,
        senha
        //senha não vai salvar a senha mudar se achar necessario
      }));
  
      alert('user cadastrado com sucesso!');
    });
  });
  