import { crearDeck,pedirCarta,crearCarta,turnoComputadora,acumularPuntos,inicializarJuego } from './usecases';

// Sintaxis del Patron Modulo
// const miJuegoModulo = ( () => {
  // Valida el codigo 
//   'use strict'
  

 // Manejo de las cartas
 let     deck = [],
 puntosJugadores = [];

  const tipos =['C','D','H','S'],
        especiales =['A','J','Q','K'];
  
  // Eventos
 
  // Para escuchar un evento
  btnPedir.addEventListener('click', () => {
  
      const carta = pedirCarta(deck);

      const puntosJugador = acumularPuntos ( carta, 0,puntosJugadores);
      crearCarta (carta,0);
  
      if (puntosJugador > 21) {
          btnDetener.disabled = true;
          btnPedir.disabled = true; // Desactiva el boton
          turnoComputadora (puntosJugador,deck,puntosJugadores); // Estan de manera global
      } else if (puntosJugador === 21) {
          // console.warn ('Buen trabajo!')
          btnDetener.disabled = true;
          btnPedir.disabled = true;
          turnoComputadora (puntosJugador,deck,puntosJugadores); // Estan de manera global
      } else{
          btnDetener.disabled = false;
          btnPedir.disabled = false;
      }
  
  })
  
  // Escucha cuando hace click en detener
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora (puntosJugadores[0],deck,puntosJugadores);
  }) 
  
  // Escucha cuando hace click en Nuevo Juego
  btnNuevo.addEventListener('click', () => {


    deck =crearDeck(tipos,especiales);   


    puntosJugadores =  inicializarJuego();

  }) 

//   return {
//       nuevoJuego: inicializarJuego
//   };

// })();







