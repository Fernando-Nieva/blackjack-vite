  
  /**
   * 
   * @param {Array<string>} deck  es un arreglo de string
   * @returns {string}retorna la carta del deck
   */
  
  
  //esta funcion me permite tomar una carta
 export const pedirCarta = (deck) => {

    
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    return deck.pop();
}
