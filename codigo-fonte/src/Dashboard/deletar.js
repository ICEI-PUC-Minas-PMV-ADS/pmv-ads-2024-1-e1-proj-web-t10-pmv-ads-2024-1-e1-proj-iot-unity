document.addEventListener('DOMContentLoaded', function() {
    const botoesExcluir = document.querySelectorAll('.excluirAmbiente');
  
    botoesExcluir.forEach(botao => {
      botao.addEventListener('click', function(event) {
        event.stopPropagation(); // evita que ao apertar excluir acabe excluindo os outros tb
  
        if (confirm("Tem certeza que deseja excluir esse campo?")) {
          this.closest('.ambiente').remove(); // encontra div principal com a classe .ambiente e remove tudo
        }
      });
    });
  });
  