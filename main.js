function audioElement(idAudio) {
  document.querySelector(idAudio).play();
}

const arrTeclas = document.querySelectorAll('.tecla');

let contagemArrTeclas = 0;

while (contagemArrTeclas < arrTeclas.length) {
  const tecla = arrTeclas[contagemArrTeclas];
  const instrumentoSom = tecla.classList[1];
  const idInstrumentoSom = `#som_${instrumentoSom}`;

  tecla.onclick = () => audioElement(idInstrumentoSom);
  contagemArrTeclas++;
}
