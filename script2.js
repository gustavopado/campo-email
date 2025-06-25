const form = document.getElementById('form-email');
const email = document.getElementById('email');
const erro = document.getElementById('erro-email');

function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

form.addEventListener('submit', e => {
  erro.textContent = '';
  email.classList.remove('invalido');

  if (!email.value) {
    erro.textContent = 'O campo é obrigatório.';
    email.classList.add('invalido');
    e.preventDefault();
    return;
  }
  if (!validarEmail(email.value.trim())) {
    erro.textContent = 'Digite um e‑mail válido.';
    email.classList.add('invalido');
    e.preventDefault();
    return;
  }

  alert('E‑mail enviado com sucesso!');
  form.reset();
});
