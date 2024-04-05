function soundPom() {
  document.querySelector('#som_tecla_pom').play();
}
function soundClap() {
  document.querySelector('#som_tecla_clap').play();
}
function soundTim() {
  document.querySelector('#som_tecla_tim').play();
}
function soundPuff() {
  document.querySelector('#som_tecla_puff').play();
}
function soundSplash() {
  document.querySelector('#som_tecla_splash').play();
}
function soundToim() {
  document.querySelector('#som_tecla_toim').play();
}
function soundPsh() {
  document.querySelector('#som_tecla_psh').play();
}
function soundTic() {
  document.querySelector('#som_tecla_tic').play();
}
function soundTom() {
  document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = soundPom;
document.querySelector('.tecla_clap').onclick = soundClap;
document.querySelector('.tecla_tim').onclick = soundTim;
document.querySelector('.tecla_puff').onclick = soundPuff;
document.querySelector('.tecla_splash').onclick = soundSplash;
document.querySelector('.tecla_toim').onclick = soundToim;
document.querySelector('.tecla_psh').onclick = soundPsh;
document.querySelector('.tecla_tic').onclick = soundTic;
document.querySelector('.tecla_tom').onclick = soundTom;