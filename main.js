function audioElement(idAudio) {
  document.querySelector(idAudio).play();
}

const arrTeclas = document.querySelectorAll('.tecla');

// Realizei o laço for para iterar sobre todos os elementos que o arrTeclas tem

for (let i = 0; i < arrTeclas.length; i++) {
  const tecla = arrTeclas[i];
  const instrumentoSom = tecla.classList[1];
  const idInstrumentoSom = `#som_${instrumentoSom}`;

  tecla.onclick = () => audioElement(idInstrumentoSom);
}

// let contagemArrTeclas = 0;

// while (contagemArrTeclas < arrTeclas.length) {
//   const tecla = arrTeclas[contagemArrTeclas];
//   const instrumentoSom = tecla.classList[1];
//   const idInstrumentoSom = `#som_${instrumentoSom}`;

//   tecla.onclick = () => audioElement(idInstrumentoSom);
//   contagemArrTeclas++;
// }
