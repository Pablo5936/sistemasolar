function mostrarAstros() {
  let astroSeleccionado = document.getElementById('astros').value
  console.log(astroSeleccionado)
  document.getElementById('astroImagen').src = astroSeleccionado
}

function acercaDe() {
  alert('Programado por Juan Pablo Torres 2025')
}

function terminar() {
  self.close()
  // window.close() no funciona en todos los navegadores
}
