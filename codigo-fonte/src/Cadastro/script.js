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
    const form = document.getElementById('Sent');
  
    form.addEventListener('click', function(event) {
      event.preventDefault(); // Impedir que o submit salve sem ter completado tudo
      
      let usuario = {
      nome : document.getElementById('nome').value,
      email : document.getElementById('email').value,
      dataNascimento : document.getElementById('dataNascimento').value,
      senha : document.getElementById('senha').value,
      };

      if (document.getElementById('senha').value!== document.getElementById('confirmacaoSenha').value) {
        alert('As senhas não são iguais.');
        return;
      }
  
      createUsuario(usuario);
  
      alert('user cadastrado com sucesso!');
    });
  });
  