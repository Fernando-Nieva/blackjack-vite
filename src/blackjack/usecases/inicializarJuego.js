



// Esta funcion inicia el juego con el # de jugadores

export const inicializarJuego = ( numJugadores = 2 ) => {

       // Rerefencias del HTML
   const   btnPedir = document.querySelector('#btnPedir'),
   btnDetener = document.querySelector('#btnDetener'),
   divCartasJugadores = document.querySelectorAll ('.divCartas');

let     puntosHTML = document.querySelectorAll('small'),
    puntosJugadores = [];
  
    for(let i = 0; i < numJugadores; i++){
        puntosJugadores.push(0);
        puntosHTML[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }
  
    btnPedir.disabled = false;
    btnDetener.disabled = true;
  

    return puntosJugadores;
  }
  
  