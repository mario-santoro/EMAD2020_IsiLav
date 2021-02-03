import React, { useState } from 'react';

export const CartContext = React.createContext();
export const CartProvider = (props) => {
    const [articoli, setArticoli] = useState([]);

    //Oggetto da fornire all'esterno
    const carrello = {
        getLunghezza: () =>{
            return articoli.length;
        },
        addProdotto: (nuovoProdotto, nuova_quantità) =>{
            nuovoProdotto.quantità_scelta = nuova_quantità
            let presente = false;
            let temp = articoli.map(prodotto =>{
                if (nuovoProdotto.nome_prodotto === prodotto.nome_prodotto){ //Se il prodotto è già presente nel carrello
                    presente = true;
                    prodotto.quantità_scelta += nuova_quantità;

                    if (prodotto.quantità_scelta > 10){ //dovrebbe essere il max consentito ottenuto dal db
                        prodotto.quantità_scelta = 10
                    }
                    
                    console.log(prodotto.quantità_scelta, nuova_quantità)
                }
                return prodotto;
            });
            if (presente){
                setArticoli(temp);
            }
            else
                setArticoli(articoli.concat(nuovoProdotto));
        },
        removeProdotto: (nomeProdotto) =>{
            setArticoli(
                articoli.filter((prodotto) =>{
                    return nomeProdotto !== prodotto.nome_prodotto
                })
            )
        },
        changeProdottoQuantity: (nomeProdotto, newQuantity) =>{
            setArticoli(
                articoli.map(p =>{
                    if(nomeProdotto === p.nome_prodotto){
                        p.quantità_scelta = newQuantity;
                    }
                    return p;
                })
            )
        },
        getArticoli: () =>{
            return articoli;        
        },
        svuota: () =>{
            setArticoli([]);       
        },
        getTotale: ()=>{
            let totale = 0;
            for (var prodotto of articoli) {
                totale += (prodotto.prezzo * prodotto.quantità_scelta);
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