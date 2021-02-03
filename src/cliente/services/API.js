//Funzioni API
const APIURL = "http://192.168.1.9:7071/api/"

export function login(email, password) {
  return fetch(APIURL+"login?email="+email+"&password="+password, {
    //method: "GET",
    //body: "formbody"
  });
};

export function logout() {
  //TODO
};

export function getCategories() {
  return fetch(APIURL+"getCategories", {});
};

export function getProductsFromCategory(categoryName) {
  return fetch(APIURL+"getProductsFromCategory?categoria="+categoryName, {});
};


export function getGiacenza(email) { //OTTENERE LA MAIL COME VARIABILE GLOBALE DELL'UTENTE########################################
  return fetch(APIURL+"getGiacenzaByUser?email="+email, {});
};

export function getOrdersByUser(email) {
  return fetch(APIURL+"getOrdersByUser?email="+email, {});
};

export function getHubsByDate(date) {
  return fetch(APIURL+"getHubsByDate?data="+date, {});
}

export function placeOrder(email, data_scelta, hub, prodotti, prodotti_reso) {
  return fetch(APIURL+"placeOrder", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      data_scelta: data_scelta,
      hub: hub,
      prodotti: prodotti,
      prodotti_reso: prodotti_reso
    })
  });
}
/*
export function getCart(itemID) {
  return [
    {
      id: '5',
      name: 'Lenzuola',
      price: 22.97,
      quantità: 4,
      image: require("../../../image/lenzuola.jpg")
    },
    {
      id: '0',
      name: 'Copripiumino',
      price: 39.90,
      quantità: 7,
      image: require("../../../image/copripiumino.jpg")
    },
    {
      id: '4',
      name: 'Federa',
      price: 2.63,
      quantità: 12,
      image: require("../../../image/federa2.jpg")
    },
    {
      id: '1',
      name: 'Federa',
      price: 1.70,
      quantità: 5,
      image: require("../../../image/federa.jpg")
    },


  ]
};
*/
export function getFAQ(id) {
  return [
    { id: '1', domanda: 'Come si fa un reso?', risposta: 'Per effettuare un reso cliccare sulla barra del menù e cliccare su prenota reso, poi scegliendo la data e il luogo di consegna più la merce da restituire dallo stock, sarà possibile prenotare il reso' },
    { id: '2', domanda: 'Addebiti per ritardo resi', risposta: 'Se dopo una prenotazione per il leasing di prodotti l\'utente non restituisce quei prodotti entro il termine della data di scadenza incorre in penalità di pagamento addebitati automaticamene sulla carta di credito, per una somma che può variare dal 5% al 10% del costo su tutti i prodotti in ritardo' },
    { id: '3', domanda: 'Domanda #3', risposta: 'prova tre' },
    { id: '4', domanda: 'Domanda #4', risposta: 'prova quattro' }

  ]
};

export function getFAQCorriere(id) {
  return [
    { id: '1', domanda: 'Come visualizzare il percorso da prendere?', risposta: 'Effettuato l\accesso nel Home Page..............' },
    { id: '2', domanda: 'Come visualizzare i clienti alla fermata?', risposta: 'prova due' },
    { id: '3', domanda: 'Come controllare la merce da consegnare/ritirare?', risposta: 'prova tre' },
    { id: '4', domanda: 'Quando scannerizzare il QR code?', risposta: 'prova quattro' }

  ]
};


export function getFermate(id) {
  return [
    {
      id: '1',
      via: 'via Lungomare Colombo, 5',
      ora: '09:00',
      numClienti: '5'
    },
    {
      id: '2',
      via: 'via Roma, 20',
      ora: '09:45',
      numClienti: '3'
    },
    {
      id: '3',
      via: 'Via Dalmazia, 25',
      ora: '10:30',
      numClienti: '7'
    },
    {
      id: '4',
      via: 'Piazza Caduti di Brescia',
      ora: '11:15',
      numClienti: '2'
    }

  ]
};

export function getClienti(id) {
  return [
    {
      id: '1',
      nome: 'Hotel La Bella Vita',
      operazione: 'CONSEGNA',

    },
    {
      id: '2',
      nome: 'B&B La Cometa',
      operazione: 'RITIRO',
    },
    {
      id: '3',
      nome: 'B&B Il Fauno',
      operazione: 'CONSEGNA E RITIRO',
    },
    {
      id: '4',
      nome: 'NOVOTEL',
      operazione: 'CONSEGNA',
    }

  ]
};

export function getConsegna(id) {
  return [
    {
      id: '1',
      articolo: 'Lenzuola',
      quantità: '5',

    },
    {
      id: '2',
      articolo: 'Federe',
      quantità: '8',
    },
    {
      id: '3',
      articolo: 'Copripiumino',
      quantità: '3',
    },
    {
      id: '4',
      articolo: 'Asciugamano',
      quantità: '15',
    },
  
    
  ]
};


export function getRitiro(id) {
  return [
    {
      id: '1',
      articolo: 'Lenzuola',
      quantità: '3',

    },
    {
      id: '2',
      articolo: 'Federe',
      quantità: '4',
    },
    {
      id: '3',
      articolo: 'Copripiumino',
      quantità: '7',
    },
    {
      id: '4',
      articolo: 'Asciugamano',
      quantità: '4',
    },
    {
      id: '5',
      articolo: 'Scendiletto',
      quantità: '2',
    },
    
  ]
};

export function getLuoghi(){
  return [
    {
        latitude: 40.6639841,
        longitude: 14.7934572,
        title: "Piazza Caduti Di Brescia",
        select: false,
    },
    {
        latitude: 40.6601335,
        longitude: 14.8026794,
        title: "Parco del Mercatello",
        select: true,
    },
    {
        latitude: 40.6775525,
        longitude: 14.753176,
        title: "Chiosco di Santa Teresa",
        select: false,
    },
  ]
}


export function SignUp(email, passw, nominativo, ragSociale, codFiscale, nomeAttivita, citta, telefono, cap, sede,pIVA, ife, numeroCarta, scadenzaCarta) {
  
  return fetch(APIURL+"SignUp", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      passw: passw,
      nominativo: nominativo,
      ragSociale: ragSociale,
      codFiscale: codFiscale,
      nomeAttivita: nomeAttivita,
      citta: citta,
      telefono: telefono,
      cap: cap,
      sede:sede,
      pIVA: pIVA,
      ife:ife,
      numeroCarta: numeroCarta,
      scadenzaCarta: scadenzaCarta
    })
  });
}

export function getConsumer(email ) {
   
  return fetch(APIURL+"GetCliente", {
    method: "POST",
    body: JSON.stringify({
      email: email
       
    })
  });
}

export function ChangeCustomer(email, nominativo, ragSociale, codFiscale, nomeAttivita, citta, telefono, cap, sede,pIVA, ife) {
  console.log(email+"-"+nominativo+"-"+ragSociale+"-"+codFiscale+"-"+nomeAttivita+"-"+citta+"-"+telefono+"-"+cap+"-"+sede+"-"+pIVA+"-"+ife)
  return fetch(APIURL+"ChangeCustomer", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      nominativo: nominativo,
      ragSociale: ragSociale,
      codFiscale: codFiscale,
      nomeAttivita: nomeAttivita,
      citta: citta,
      telefono: telefono,
      cap: cap,
      sede:sede,
      pIVA: pIVA,
      ife:ife
    })
  });
}


export function ChangePassw(email, vecchiaPassw, nuovaPassw) {
  
  return fetch(APIURL+"ChangePassword", {
    method: "POST",
    body: JSON.stringify({
      
     email: email,
     vecchiaPassword:vecchiaPassw,
     nuovaPassword: nuovaPassw
    })
  });
}

export function ChangePayMethod(email,  numCarta, scadenzaCarta) {
  
  return fetch(APIURL+"ChangePayMethod", {
    method: "POST",
    body: JSON.stringify({
      
     email: email,
     numeroCarta:numCarta,
     scadenzaCarta:scadenzaCarta
    })
  });
}