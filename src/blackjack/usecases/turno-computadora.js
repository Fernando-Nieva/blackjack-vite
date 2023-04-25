 // Turno de la computadora
 import { pedirCarta } from "./pedir-Carta";
 import { crearCarta } from "./crearCarta";
 import { acumularPuntos } from "./acumularPuntos";
 import { determinarGanador } from "./determinarGanador";

 
 /**
  * 
  * @param {Number} puntosMinimos 
  * @param {String} deck 

  *  
  */

 
 
 export const turnoComputadora = (puntosMinimos,deck,puntosJugadores) => {
    let puntosComputadora = 0;

    if(!puntosMinimos) throw new Error('puntos minimos son necesarios');



    do{

        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos ( carta, puntosJugadores.length-1,puntosJugadores );
        crearCarta (carta,puntosJugadores.length-1);

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <=21) );

    determinarGanador(puntosJugadores);
}


