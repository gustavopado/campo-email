const form = document.getElementById('form-email');
const emailInput = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');

// Regex simples para reforçar validação além do HTML5
function emailValido(email) {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email);
}

form.addEventListener('submit', e => {
  e.preventDefault(); // previne envio automático

  const valor = emailInput.value.trim();

  if (!valor) {
    erroEmail.textContent = 'O campo é obrigatório.';
    emailInput.classList.add('invalido');
    return;
  }
  if (!emailValido(valor)) {
    erroEmail.textContent = 'Digite um e‑mail válido.';
    emailInput.classList.add('invalido');
    return;
  }

  erroEmail.textContent = '';
  emailInput.classList.remove('invalido');
  alert('E‑mail enviado com sucesso!');
  form.reset();
});