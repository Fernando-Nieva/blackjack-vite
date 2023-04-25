import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta ejemplo ['C','D','H','S'],
 * @param {array<String>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @returns {array<String>} retorna un nuevo deck de cartas
 */




              // Esta funcion crea un nuevo deck
              export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

                if (!tiposDeCarta  || tiposDeCarta.length === 0) 
                throw new Error('Tipos de carta es obligatorio');
                
                if (!tiposEspeciales  || tiposEspeciales=== 0) 
                throw new Error('Tipos de carta es obligatorio');




                

                
                // Reiniciamos el deck
                let deck = [];
        
                for (let i = 2; i <= 10; i++) {
                    for (let tipo of tiposDeCarta) {
                        deck.push(i + tipo);
                    }
                
                }
                for (let tipo of tiposDeCarta) {
                    for (let esp of tiposEspeciales) {
                        deck.push(esp + tipo);
                    }
                }
            
                // Revuelve los elementos del deck
                return _.shuffle(deck);
            }