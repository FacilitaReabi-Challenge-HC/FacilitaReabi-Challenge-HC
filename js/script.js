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
// Validação do formulário de TRIAGEM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formTriagem");
  const resultado = document.getElementById("resultadoTriagem");
  const btnToggle = document.getElementById("btnToggleRecomendacoes");
  const divRecomendacoes = document.getElementById("recomendacoes");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const internet = document.getElementById("internet");
      const dispositivo = document.getElementById("dispositivo");
      const conforto = document.getElementById("conforto");
      const presencial = document.getElementById("presencial");
      const especialidade = document.getElementById("especialidade");
      let valid = true;
      function validarCampo(campo, erro) {
        if (campo.value === "") {
          document.getElementById(erro).style.display = "inline";
          valid = false;
        } else {
          document.getElementById(erro).style.display = "none";
        }
      }
      validarCampo(internet, "erroInternet");
      validarCampo(dispositivo, "erroDispositivo");
      validarCampo(conforto, "erroConforto");
      validarCampo(presencial, "erroPresencial");
      validarCampo(especialidade, "erroEspecialidade");
      if (!valid) return;
      let pontuacao = 0;
      if (internet.value === "sim") pontuacao++;
      if (dispositivo.value === "sim") pontuacao++;
      if (conforto.value === "sim") pontuacao++;
      if (presencial.value === "nao") pontuacao++;
      let mensagem = "";
      if (pontuacao >= 3) {
        mensagem += "✅ Você está apto para a teleconsulta.<br>";
      } else {
        mensagem += "⚠️ Com base nas suas respostas, a teleconsulta pode não ser ideal no momento. Sugerimos buscar atendimento presencial.<br>";
      }
      if (especialidade.value === "sim" && pontuacao >= 3) {
        mensagem += "🧠 As especialidades de Psicologia e Fonoaudiologia estão disponíveis para teleconsulta. Você pode prosseguir.";
      } else if (especialidade.value === "sim") {
        mensagem += "ℹ️ Mesmo que não esteja apto agora, saiba que Psicologia e Fonoaudiologia são especialidades compatíveis com teleconsulta.";
      }
      resultado.innerHTML = mensagem;
      resultado.style.display = "block";
    });
    btnToggle.addEventListener("click", function () {
      if (divRecomendacoes.style.display === "none") {
        divRecomendacoes.style.display = "block";
        btnToggle.textContent = "Ocultar Recomendações";
      } else {
        divRecomendacoes.style.display = "none";
        btnToggle.textContent = "Mostrar Recomendações";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btn-toggle");
  const divDicas = document.getElementById("dicasExtras");

  if (botao && divDicas) {
    botao.addEventListener("click", function () {
      if (divDicas.style.display === "none") {
        divDicas.style.display = "block";
        botao.textContent = "Ocultar dicas";
      } else {
        divDicas.style.display = "none";
        botao.textContent = "Clique aqui para ver mais dicas!";
      }
    });
  }
});