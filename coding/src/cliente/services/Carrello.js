import React, { useState } from 'react';


export const CartContext = React.createContext();
export const CartProvider = (props) => {
    const [articoli, setArticoli] = useState([
        {
          id: '5',
          name: 'Lenzuola',
          price: 22.97,
          description: "Lenzuola matrimoniali bianche 100% cotone",
          image: require("../../../image/lenzuola.jpg"),
          quantity: 10,
          piece: 30,
        
        },
        {
          id: '0',
          name: 'Copripiumino',
          price: 39.90,
          description: "Copripiumino Matrimoniale, Singolo, Una Piazza e Mezza, Paris",
          image: require("../../../image/copripiumino.jpg"),
          quantity: 9,
          piece: 10
        },
        {
          id: '4',
          name: 'Federa',
          price: 2.63,
          description: "Federa colorata Americana con Bottoni",
          image: require("../../../image/federa2.jpg"),
          quantity: 8,
          piece: 10
        },
        {
          id: '1',
          name: 'Federa',
          price: 1.70,
          description: "Federa cotone semplice senza pattella",
          image: require("../../../image/federa.jpg"),
          quantity: 6,
          piece: 2
        },
        {
          id: '2',
          name: 'Scendiletto',
          price: 37.99,
          description: "Scendiletto shaggy, aspetto lanoso",
          image: require("../../../image/scendiletto.jpg"),
          quantity: 2,
          piece: 1
        },
        {
          id: '3',
          name: 'Copripiumino',
          price: 18.99,
          description: "Sacco Copripiumino in Microfibra con Motivo di Rami",
          image: require("../../../image/copripiumino2.jpg"),
          quantity: 8,
          piece: 2
        }, 
      ]);

    //Oggetto da fornire all'esterno
    const carrello = {
        getLunghezza: () =>{
            return articoli.length;
        },
        addProdotto: (nuovoProdotto) =>{
            let presente = false;
            let temp = articoli.map(prodotto =>{
                if (nuovoProdotto.id === prodotto.id){
                    presente = true;
                    prodotto.quantity+=nuovoProdotto.quantity;
                }
                return prodotto;
            });
            if (presente)
                setArticoli(temp);
            else
                setArticoli(articoli.concat(nuovoProdotto));
        },
        removeProdotto: (idProdotto) =>{
            setArticoli(
                articoli.filter((prodotto) =>{
                    return idProdotto !== prodotto.id
                })
            )
        },
        changeProdottoQuantity: (idProdotto, newQuantity) =>{
            setArticoli(
                articoli.map(prodotto =>{
                    if(idProdotto == prodotto.id){
                        prodotto.quantity = newQuantity;
                    }
                    return prodotto;
                })
            )
        },
        getArticoli: () =>{
            return articoli;        
        },
        getTotale: ()=>{
            let totale = 0;
            for (var prodotto of articoli) {
                totale += (prodotto.price * prodotto.quantity);
            }
            return totale;
        }
    };
    
    return (
        <CartContext.Provider value={carrello}>
            {props.children}
        </CartContext.Provider>
    )
}