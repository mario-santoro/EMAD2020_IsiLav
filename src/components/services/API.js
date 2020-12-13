//Funzioni API

import React from 'react';
//import axios from 'axios';

export function login() {
  //TODO
};

export function logout() {
  //TODO
};

//Restituisce una lista di categorie contenente oggetti {id: STRING, nome: STRING, image: require}
export function getCategories() {
  return [
    {
      id: '0',
      name: 'Bagno',
      image: require("../../image/bagno.jpg")
    },
    {
      id: '1',
      name: 'Letto',
      image: require("../../image/letto.jpg")
    },
    {
      id: '2',
      name: 'Tavola',
      image: require("../../image/tavola.jpg")
    },
    {
      id: '3',
      name: 'CategoriaX',
      image: require("../../image/bagno.jpg")
    },
    {
      id: '4',
      name: 'CategoriaY',
      image: require("../../image/letto.jpg")
    },
    {
      id: '5',
      name: 'CategoriaZ',
      image: require("../../image/tavola.jpg")
    },
  ]
};

export function getProductsFromCategory(categoryID) {
  return [
    {
      id: '5',
      name: 'Lenzuola',
      price: 22.97,
      description: "Lenzuola matrimoniali bianche 100% cotone",
      image: require("../../image/lenzuola.jpg")
    },
    {
      id: '0',
      name: 'Copripiumino',
      price: 39.90,
      description: "Copripiumino Matrimoniale, Singolo, Una Piazza e Mezza, Paris",
      image: require("../../image/copripiumino.jpg")
    },
    {
      id: '4',
      name: 'Federa',
      price: 2.63,
      description: "Federa colorata Americana con Bottoni",
      image: require("../../image/federa2.jpg")
    },
    {
      id: '1',
      name: 'Federa',
      price: 1.70,
      description: "Federa cotone semplice senza pattella",
      image: require("../../image/federa.jpg")
    },
    {
      id: '2',
      name: 'Scendiletto',
      price: 37.99,
      description: "Scendiletto shaggy, aspetto lanoso",
      image: require("../../image/scendiletto.jpg")
    },
    {
      id: '3',
      name: 'Copripiumino',
      price: 18.99,
      description: "Sacco Copripiumino in Microfibra con Motivo di Rami",
      image: require("../../image/copripiumino2.jpg")
    },

  ]
};


export function getGiacenza(giacenzaID) {
  return [
    {
      id: '5',
      name: 'Lenzuola',
      quantità: 28,
      image: require("../../image/lenzuola.jpg")
    },
    {
      id: '0',
      name: 'Copripiumino',
      quantità: 17,
      description: "Copripiumino Matrimoniale, Singolo, Una Piazza e Mezza, Paris",
      image: require("../../image/copripiumino.jpg")
    },
    {
      id: '4',
      name: 'Federa',
      quantità: 5,
      image: require("../../image/federa2.jpg")
    },
    {
      id: '1',
      name: 'Federa',
      quantità: 10,
      image: require("../../image/federa.jpg")
    },
    {
      id: '2',
      name: 'Scendiletto',
      quantità: 35,
      image: require("../../image/scendiletto.jpg")
    },
    {
      id: '3',
      name: 'Copripiumino',
      quantità: 15,
      image: require("../../image/copripiumino2.jpg")
    },

  ]
};


export function getDate(dateID) {
  return [
    {
      id: '5',
      data: '25/09/2020',
      quantità: 4,

    },
    {
      id: '0',
      data: '05/10/2020',
      quantità: 7,
    },
    {
      id: '4',
      data: '15/10/2020',
      quantità: 12,
    },
    {
      id: '1',
      data: '23/10/2020',
      quantità: 5,
    },


  ]

};



export function getCart(itemID) {
  return [
    {
      id: '5',
      name: 'Lenzuola',
      price: 22.97,
      quantità: 4,
      image: require("../../image/lenzuola.jpg")
    },
    {
      id: '0',
      name: 'Copripiumino',
      price: 39.90,
      quantità: 7,
      image: require("../../image/copripiumino.jpg")
    },
    {
      id: '4',
      name: 'Federa',
      price: 2.63,
      quantità: 12,
      image: require("../../image/federa2.jpg")
    },
    {
      id: '1',
      name: 'Federa',
      price: 1.70,
      quantità: 5,
      image: require("../../image/federa.jpg")
    },


  ]
};

export function getFAQ(id) {
  return [
    { id: '1', domanda: 'Come si fa un reso?', risposta: 'Per effettuare un reso cliccare sulla barra del menù e cliccare su prenota reso, poi scegliendo la data e il luogo di consegna più la merce da restituire dallo stock, sarà possibile prenotare il reso' },
    { id: '2', domanda: 'Addebiti per ritardo resi', risposta: 'Se dopo una prenotazione per il leasing di prodotti l\'utente non restituisce quei prodotti entro il termine della data di scadenza incorre in penalità di pagamento addebitati automaticamene sulla carta di credito, per una somma che può variare dal 5% al 10% del costo su tutti i prodotti in ritardo' },
    { id: '3', domanda: 'Domanda #3', risposta: 'prova tre' },
    { id: '4', domanda: 'Domanda #4', risposta: 'prova quattro' }

  ]
};