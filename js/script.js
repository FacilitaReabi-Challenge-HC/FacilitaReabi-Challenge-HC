// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const mensagem = document.getElementById('mensagem');
  
      let valid = true;
  
      if (nome.value.trim() === '') {
        document.getElementById('erroNome').style.display = 'inline';
        valid = false;
      } else {
        document.getElementById('erroNome').style.display = 'none';
      }
  
      if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('erroEmail').style.display = 'inline';
        valid = false;
      } else {
        document.getElementById('erroEmail').style.display = 'none';
      }
  
      if (mensagem.value.trim() === '') {
        document.getElementById('erroMensagem').style.display = 'inline';
        valid = false;
      } else {
        document.getElementById('erroMensagem').style.display = 'none';
      }
  
      if (valid) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      }
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btn-toggle");
  const divDicas = document.getElementById("dicasExtras");

  botao.addEventListener("click", function () {
    if (divDicas.style.display === "none") {
      divDicas.style.display = "block";
      botao.textContent = "Ocultar dicas";
    } else {
      divDicas.style.display = "none";
      botao.textContent = "Clique aqui para ver mais dicas!";
    }
  });
});