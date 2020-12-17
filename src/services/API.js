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
          image: require("../../images/bagno.jpg")
        },
        {
          id: '1',
          name: 'Letto',
          image: require("../../images/letto.jpg")
        },
        {
          id: '2',
          name: 'Tavola',
          image: require("../../images/tavola.jpg")
        },
        {
          id: '3',
          name: 'CategoriaX',
          image: require("../../images/bagno.jpg")
        },
        {
          id: '4',
          name: 'CategoriaY',
          image: require("../../images/letto.jpg")
        },
        {
          id: '5',
          name: 'CategoriaZ',
          image: require("../../images/tavola.jpg")
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
      image: require("../../images/lenzuola.jpg"),
      quantity: 30
    },
    {
      id: '0',
      name: 'Copripiumino',
      price: 39.90,
      description: "Copripiumino Matrimoniale, Singolo, Una Piazza e Mezza, Paris",
      image: require("../../images/copripiumino.jpg"),
      quantity: 15
    },
    {
      id: '4',
      name: 'Federa',
      price: 2.63,
      description: "Federa colorata Americana con Bottoni",
      image: require("../../images/federa2.jpg"),
      quantity: 8
    },
    {
      id: '1',
      name: 'Federa',
      price: 1.70,
      description: "Federa cotone semplice senza pattella",
      image: require("../../images/federa.jpg"),
      quantity: 6
    },
    {
      id: '2',
      name: 'Scendiletto',
      price: 37.99,
      description: "Scendiletto shaggy, aspetto lanoso",
      image: require("../../images/scendiletto.jpg"),
      quantity: 2
    },
    {
      id: '3',
      name: 'Copripiumino',
      price: 18.99,
      description: "Sacco Copripiumino in Microfibra con Motivo di Rami",
      image: require("../../images/copripiumino2.jpg"),
      quantity: 8
    }, 
  ]
};

export function getGiacenza(){
  return getProductsFromCategory(0)
}

export function getLuoghi(){
  return [
    {
        latitude: 40.6639841,
        longitude: 14.7934572,
        title: "Piazza Caduti Di Brescia"
    },
    {
        latitude: 40.6601335,
        longitude: 14.8026794,
        title: "Parco del Mercatello"
    },
    {
        latitude: 40.6775525,
        longitude: 14.753176,
        title: "Chiosco di Santa Teresa"
    },
  ]
}