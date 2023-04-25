// const miModulo =(()=>{
    'use strict'


    let deck = [], 
        puntosJugadores=[];
        
    const tiposCartas = ['C','D','H','S'], cartasEspeciales = ['A','J','K','Q'];
    //referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevo'),
        divCartasJugadores= document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
    //esta funcion inicia el juego
    const inicializarJuego=(numJugadores=2)=>{
        deck=crearDeck();
        puntosJugadores=[];
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0);
        }
            puntosHTML.forEach(elem => elem.innerText=0)
            divCartasJugadores.forEach(elem => elem.innerHTML='');
            btnPedir.disabled = false;
            btnDetener.disabled = false;
        
    }
    //Esta funcion crea una nueva baraja
    const crearDeck =()=>{
        deck=[];
        for(let i = 2 ; i<=10 ; i++){
            for( let tipoCarta of tiposCartas) {
                deck.push(i + tipoCarta);
            }
        } 
        for(let tipoCarta of tiposCartas){
            for(let cartaEspecial of cartasEspeciales){
                deck.push(cartaEspecial + tipoCarta);
            }
        }
        return _.shuffle(deck);
    }


    //Esta funcion me permite tomar una carta
    const pedirCarta = ()=>{
        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }
        return deck.shift(); 
    }
    // Esta funcion le da valor a la carta
    const valorCarta= (carta)=>{
        const valor = carta.substring(0, carta.length-1);
        return isNaN(valor) ? (valor==='A') ? 11 : 10 : valor*1;
    }
    //turno: 0=primer jugaro y el ultimo es la casa
    const acumularPuntos=(carta, turno)=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    const crearCarta=(carta, turno)=>{
        const imgCarta = document.createElement('img');
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }
    const determinarGanador=()=>{
        const[puntosMinimos, puntosLaCasa] = puntosJugadores;

        setTimeout(() => {
            (puntosMinimos===puntosLaCasa)?(alert('Uh empataste man, volve a jugar')):
            (((puntosLaCasa<=21)&&(puntosLaCasa > puntosMinimos))||(puntosMinimos>21))?(alert('Perdiste a la chingada, gana la casa')):
            (alert('VAAMO!!, GANASTE WEY'));
        }, 200);
        
    }
    //turno de la PC
    const turnoLaCasa = (puntosMinimos)=>{
        let puntosLaCasa=0;
        do{
            const carta = pedirCarta();
            puntosLaCasa = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length-1);
            
        }while((puntosLaCasa < puntosMinimos)&&(puntosMinimos<=21))
        determinarGanador();
    }
    //Eventos
    btnPedir.addEventListener('click', ()=> {

        const carta= pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);
        crearCarta(carta, 0);

        if(puntosJugador > 21 ){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoLaCasa(puntosJugador);
            setTimeout(() => {
            alert('Te pasaste wey');
            }, 100);
        }else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            setTimeout(() => {
            alert('llegaste a 21')
            }, 100);
            turnoLaCasa(puntosJugador);
        } 
    });

    btnDetener.addEventListener('click', ()=> {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoLaCasa(puntosJugadores[0]);
    });
    
    btnNuevoJuego.addEventListener('click', ()=> {
        inicializarJuego();
    });

    // return {
    //     nuevoJuego: inicializarJuego
    // }
// })();