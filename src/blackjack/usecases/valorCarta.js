


  /**
   * 
   * @param {string} carta 
   * @returns {number}valor de la carta
   */
      // Esta funcion sirve para obtener una carte del Deck

      export const valorCarta = (carta) => {
  
        const valor = carta.substring (0,carta.length-1);
  
        //se valida si no es un numero valido
        return (isNaN(valor))?
                        (valor==='A')?11:10
                        :valor *1;
    
    }

    

    //en js un color morado es un numero y gris es un string
  