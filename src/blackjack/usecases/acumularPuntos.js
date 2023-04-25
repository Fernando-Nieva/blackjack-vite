import {valorCarta}from'./valorCarta.js'
  



  //turno:0jugador y el ultimo cpu
  export const acumularPuntos = (carta,turno,puntosJugadores) => {

    const    puntosHTML = document.querySelectorAll('small');


    // Turno:0 = Primer Jugador y el ultimo sera la PC
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta (carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}