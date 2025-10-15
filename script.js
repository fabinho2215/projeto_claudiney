alert("Boas-vindas ao nosso site!!");

const button = document.getElementById('toggle-mode');
const body = document.body;

// Atualiza o texto do botão
function atualizarBotao() {
  if (body.classList.contains('dark-mode')) {
    button.innerHTML = '☀️ Ativar Modo Claro';
  } else {
    button.innerHTML = '🌙 Ativar Modo Escuro';
  }
}

// Detecta o modo do sistema
function detectarPreferenciaSistema() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Aplica o modo
function aplicarModo(modo) {
  if (modo === 'escuro') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  atualizarBotao();
}

// Ao clicar no botão, alterna o modo
button.addEventListener('click', () => {
  const modoAtual = body.classList.contains('dark-mode') ? 'escuro' : 'claro';
  const novoModo = modoAtual === 'escuro' ? 'claro' : 'escuro';
  aplicarModo(novoModo);

  // Salva a escolha do usuário
  localStorage.setItem('modo', novoModo);
});

// Ao carregar a página
window.addEventListener('load', () => {
  const modoSalvo = localStorage.getItem('modo');

  if (modoSalvo) {
    aplicarModo(modoSalvo);
  } else {
    const modoSistema = detectarPreferenciaSistema() ? 'escuro' : 'claro';
    aplicarModo(modoSistema);
  }
});
