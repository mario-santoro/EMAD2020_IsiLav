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