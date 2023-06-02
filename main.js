const idContenidoSeleccion = document.querySelector('#contenido-seleccion');
const inputNumero1 = document.querySelector('#numero1');
const inputNumero2 = document.querySelector('#numero2');
const inputNumero3 = document.querySelector('#numero3');
const inputNumero4 = document.querySelector('#numero4');
const inputNumero5 = document.querySelector('#numero5');
const buttomSubmit = document.querySelector('#boton-seleccion');
const idResultado = document.querySelector('#resultado');
const h4ResultadoSeleccionado = document.querySelector('#resultado-seleccionado');

buttomSubmit.addEventListener('click', resultadoSeleccion);

function resultadoSeleccion() {
    if(inputNumero1.checked) {
        h4ResultadoSeleccionado.innerHTML = 'You selected 1 out of 5';
    } else if(inputNumero2.checked) {
        h4ResultadoSeleccionado.innerHTML = 'You selected 2 out of 5';
    } else if(inputNumero3.checked) {
        h4ResultadoSeleccionado.innerHTML = 'You selected 3 out of 5';
    } else if(inputNumero4.checked) {
        h4ResultadoSeleccionado.innerHTML = 'You selected 4 out of 5';
    } else if(inputNumero5.checked) {
        h4ResultadoSeleccionado.innerHTML = 'You selected 5 out of 5'
    }
   
    idResultado.classList.remove('delete')
    idContenidoSeleccion.classList.add('delete')
}