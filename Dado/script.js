const resultadoElement = document.getElementById('result');
const botaoElement = document.getElementById('botao');

botaoElement.addEventListener('click', () => {
  const numero = Math.floor(Math.random() * 6) + 1;
  resultadoElement.innerText = numero;
});