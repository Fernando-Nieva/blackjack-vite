

export const determinarGanador = (puntosJugadores) => {
    // Destructuracion de arreglos solo para 2 jugadores
    
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout( ()=> {
        if ( puntosComputadora === puntosMinimos ){
            alert('Empate.... nadie gana :( ... otra vez!');
        } else if ( puntosMinimos > 21){
            alert ('La computadora gana!');
        } else if (puntosComputadora > 21){
            alert ('Felicidades, haz ganado!');
        } else if ( puntosMinimos === 21 && puntosComputadora !== 21 ){
            alert ('BlackJack!... Felicidades, haz ganado');
        }
        else{
            alert ('La computadora gana!');
        }
    }, 300); 
}
