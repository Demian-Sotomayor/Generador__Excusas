let quien = ['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
let accion = ['se comió', 'orinó', 'aplastó', 'rompió'];
let que = ['mi tarea', 'las llaves', 'el auto'];
let cuando = ['antes de la clase', 'esta mañana', 'cuando terminé', 'mientras almorzaba','mientras rezaba'];


function generadoraExcusas(quien, accion, que, cuando) {

  const randomQuien = quien[Math.floor(Math.random() * quien.length)];
  const randomAccion = accion[Math.floor(Math.random() * accion.length)];
  const randomQue = que[Math.floor(Math.random() * que.length)];
  const randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
  return `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`;

}

// Mostrar excusa en el HTML
function onLoad() {

  const excusa = generadoraExcusas(quien, accion, que, cuando);
  document.getElementById('excusa').innerHTML = excusa;

}

window.onload = function() {
  onLoad();
}