

/**
 * 
 * @param {String} carta 
 * @param {String} turno 
 */



export const crearCarta = (carta, turno)=> {
   const  divCartasJugadores = document.querySelectorAll ('.divCartas');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')

    divCartasJugadores[turno].append(imgCarta);

    return imgCarta;
}
