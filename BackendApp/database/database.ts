//Funzione per ottenere una connessione al DB
export const getDatabase = () => {
    const MySql = require('sync-mysql');
    
    var connection = new MySql({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'isilav'
    });

    return connection
};

//Ottieni le categorie del catalogo, utile nella homescreen cliente
export const getCategories = () => {
    const db = getDatabase();

    const categorie = db.query("SELECT * FROM categoria ORDER BY nome_categoria;")
    return categorie
}

//Data la categoria ottieni i prodotti
export const getProductsFromCategory = (categoryName) => {
    const db = getDatabase();

    const prodotti = db.query("SELECT * FROM prodotto WHERE eliminato=0 AND categoria='"+categoryName+"';")
    return prodotti
}

//Ottieni gli ordini data la mail di un utente
export const getOrdersByUser = (userEmail) => {
    const db = getDatabase();

    const ordini = db.query("SELECT * FROM operazione INNER JOIN ordine ON operazione.id_ordine=ordine.id_ordine INNER JOIN hub ON operazione.via=hub.via WHERE email=? ORDER BY data_operazione DESC;", [userEmail]);
    return ordini
}

//Restituisce la lista degli articoli ancora da restituire raggruppati per prodotto
//SOLO PER ORDINI CONSEGNATI
export const getGiacenzaByUser = (userEmail) => {
    const db = getDatabase();

    const prodotti = db.query("SELECT prodotto.nome_prodotto, prodotto.immagine, quantità_rimasta, data_operazione, noleggiato.id_noleggio FROM prodotto INNER JOIN noleggiato ON noleggiato.nome_prodotto=prodotto.nome_prodotto INNER JOIN ordine ON ordine.id_ordine=noleggiato.id_ordine INNER JOIN operazione ON operazione.id_ordine=ordine.id_ordine WHERE operazione.email=? AND stato LIKE 'CONSEGNATO' ORDER BY data_operazione DESC;", [userEmail])
    
    //giacenza di test, è ciò che si deve restituire dai results della query
    /*const temp = 
        [
            {
                nome_prodotto: "asd",
                immagine: "https://staticr1.blastingcdn.com/media/photogallery/2018/6/24/660x290/b_1200x675/ciao-compie-200-anni-il-celebre-saluto-inizio-a-diventare-comune-dal-1818-vitaesteticait_2039115.jpg",
                quantità: 1,
                dettagli: [
                    {
                        data: "01/01/2020",
                        quantità: 1,
                        id_noleggiato: 1
                    }
                ]
            }
        ]
    */


    let temp = []
    let i;
    for (i=0; i<prodotti.length; i++){
        const prodotto = prodotti[i]
        let presente = false;
        let j;
        for(j=0; j<temp.length; j++){
            if(prodotto.nome_prodotto === temp[j].nome_prodotto){
                presente = true;
                temp[j].quantità += prodotto.quantità_rimasta;
                temp[j].dettagli.push({data: prodotto.data_operazione, quantità: prodotto.quantità_rimasta, id_noleggio: prodotto.id_noleggio})
            }
        }
        if(!presente){
            temp.push({
                nome_prodotto: prodotto.nome_prodotto,
                immagine: prodotto.immagine,
                quantità: prodotto.quantità_rimasta,
                dettagli: [
                    {
                        data: prodotto.data_operazione,
                        quantità: prodotto.quantità_rimasta,
                        id_noleggio: prodotto.id_noleggio //per keyExtractor delle flatlist nel caso data e quantità siano uguali
                    }
                ]
            })
        }
    }
    
    console.log(temp)
    return temp
}

//Ottieni le fermate disponibili in un particolare giorno
export const getHubsByDate = (data) => {
    //il db le tratta come stringhe YYYY/MM/DD
    const db = getDatabase();

    var giorno = null;
    switch (new Date(data).getDay()){
        case 0:
            giorno = "domenica"
            break;
        case 1:
            giorno = "lunedì"
            break;
        case 2:
            giorno = "martedì"
            break;
        case 3:
            giorno = "mercoledì"
            break;
        case 4:
            giorno = "giovedì"
            break;
        case 5:
            giorno = "venerdì"
            break;
        case 6:
            giorno = "sabato"
            break;
        default:
            giorno = null;
    }

    const hubs = db.query("SELECT * FROM hub INNER JOIN fermata ON hub.via = fermata.via INNER JOIN percorso ON fermata.id_percorso = percorso.id_percorso WHERE "+giorno+" = 1;")
    return hubs
}

//Ricerca prodotti dalla barra di ricerca
export const searchProductsByName = (name) => {
    const db = getDatabase();

    const prodotti = db.query("SELECT * FROM prodotto WHERE nome_prodotto LIKE '%?%';", [name])
    return prodotti
}

//Piazza ordine nel db
export const placeOrder = (ordine) => {
    const db = getDatabase();

    db.query("INSERT INTO ordine VALUE (?, 'IN PREPARAZIONE', ?, ?, '', ?, ?);", [ordine.id, ordine.totale, ordine.data_scadenza, ordine.metodo_pagamento, ordine.n_carta])
    var idNoleggio = getIDNoleggio();
    for(var i=0; i<ordine.prodotti.length; i++){
        db.query("INSERT INTO noleggiato VALUE (?, ?, ?, ?, ?, ?);", [idNoleggio, ordine.prodotti[i].nome_prodotto, ordine.id, ordine.prodotti[i].prezzo, ordine.prodotti[i].quantità_scelta, ordine.prodotti[i].quantità_scelta])
        idNoleggio+=1;
    }
    return true
}

export const placeOperation = (operazione) => {
    const db = getDatabase();

    db.query("INSERT INTO operazione VALUE (?, ?, ?, ?, ?, ?, ?, ?);", [operazione.id, operazione.data_operazione, operazione.data_scelta, operazione.email, operazione.id_ordine, operazione.id_reso, operazione.via, operazione.id_percorso])
    return true
}

//Ritorna l'ID più alto presente nel DB+1, utile per le prossime operazioni da inserire
export const getIDOperazione = () => {
    const db = getDatabase();

    const id = db.query("SELECT MAX(id_operazione) as id FROM operazione LIMIT 1")
    if(id.length>0){
        return id[0].id+1;
    }
    else{
        return 0;
    }
}

export const getIDOrdine = () => {
    const db = getDatabase();

    const id = db.query("SELECT MAX(id_ordine) as id FROM ordine LIMIT 1")
    if(id.length>0){
        return id[0].id+1;
    }
    else{
        return 0;
    }
}

export const getIDNoleggio = () => {
    const db = getDatabase();

    const id = db.query("SELECT MAX(id_noleggio) as id FROM noleggiato LIMIT 1")
    if(id.length>0){
        return id[0].id+1;
    }
    else{
        return 0;
    }
}

export const getIDReso = () => {
    const db = getDatabase();

    const id = db.query("SELECT MAX(id_reso) as id FROM reso LIMIT 1")
    if(id.length>0){
        return id[0].id+1;
    }
    else{
        return 0;
    }
}


//Registrazione
export const SignUp = (cliente) => {
    console.log(cliente);
    const db = getDatabase();
    const f=db.query("SELECT * from utente where email=? ;", [cliente.email])
    if(f==0){
        db.query("INSERT INTO utente (email, passw, nominativo) VALUES (?, ?, ?);", [cliente.email,cliente.passw,cliente.nominativo])
     
        db.query("INSERT INTO cliente (`email`, `ragSociale`, `codFiscale`, `nomeAttivita`, `citta`, `telefono`, `CAP`, `sede`, `pIVA`, `IFE`, `numeroCarta`, `scadenzaCarta`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",[cliente.email, cliente.ragSociale, cliente.codFiscale, cliente.nomeAttivita, cliente.citta, cliente.telefono, cliente.cap, cliente.sede, cliente.pIVA, cliente.ife, cliente.numeroCarta, cliente.scadenzaCarta])
        return true;
    }else{

        return false;
    } 
    
}
//prendere oggetto cliente
export const getCostumer = (email) => {
    const db = getDatabase();

    const cliente = db.query("SELECT * FROM utente join cliente on utente.email=cliente.email WHERE utente.email=?;", [email])
    return cliente[0]
}

//Cambia Password
export const ChangePassword = (vecchiapassword, nuovaPassword, email) => {
    const db = getDatabase();

    const passw= db.query("SELECT passw from utente WHERE email=? and passw=SHA1(?) ;", [email,vecchiapassword])
    if (passw.length>0){

        db.query("UPDATE utente SET passw=SHA1(?) WHERE email=? ;", [nuovaPassword,email])
        return true
    }else{

        return false;
    }
}

//Cambia Metodo di pagamento
export const PaymentMethod = (numeroCarta, scadenzaCarta, email) => {
    const db = getDatabase();

        db.query("UPDATE cliente SET numeroCarta=?, scadenzaCarta=? WHERE email=? ;", [numeroCarta, scadenzaCarta, email])
        return true
   
}


//Cambia Anagrafica cliente
export const UpdateCustomer = (cliente) => {
    const db = getDatabase();
        db.query("UPDATE utente SET  nominativo=? WHERE email=? ;", [cliente.nominativo,cliente.email])
        
        db.query("UPDATE cliente SET ragSociale=?, codFiscale=?, nomeAttivita=?, citta=?, telefono=?, CAP=?, sede=?, pIVA=?, IFE=? WHERE email=? ;", [cliente.ragSociale, cliente.codFiscale, cliente.nomeAttivita, cliente.citta, cliente.telefono, cliente.cap, cliente.sede, cliente.pIVA, cliente.ife, cliente.email])
        return true
   
}


//Trigger in consegna
export const inConsegna = (data) => {
    const db = getDatabase();
    const id=    db.query("select ordine.id_ordine from operazione join ordine on operazione.id_operazione=ordine.id_ordine where operazione.data_scelta=?;", [data])
    for(var i=0;i<id.length;i++){

        db.query("UPDATE ordine SET stato='IN CONSEGNA' WHERE id_ordine=? ;", [id[i].id_ordine])
      
    }
       return true
   
}
export const getIDRitardo = () => {
    const db = getDatabase();

    const id = db.query("SELECT MAX(id_ritardo) as id FROM addebito_ritardo LIMIT 1")
    if(id.length>0){
        return id[0].id+1;
    }
    else{
        return 0;
    }
}

export const addebitoRitardo= (data)=>{
   
const db= getDatabase();
var oggi= new Date(data);
const o= db.query("SELECT sum(noleggiato.quantità_rimasta) as Type, ordine.data_scadenza, cliente.premium, cliente.percentualeRitardo, operazione.email, ordine.totale, ordine.id_ordine FROM cliente join operazione on cliente.email=operazione.email join `ordine` on operazione.id_ordine=ordine.id_ordine join noleggiato on ordine.id_ordine=noleggiato.id_ordine where ordine.data_scadenza<? group by ordine.id_ordine Having Type>0", [data])
 

console.log(o)

for(var i=0; i<o.length;i++){
   
   var scadenza= new Date(o[i].data_scadenza)
   var scadenzaPremium=new Date(scadenza)
    scadenzaPremium.setDate(scadenza.getDate() + (7*o[i].premium))
    
   if(scadenzaPremium<oggi){
       const prodotti= db.query("SELECT id_noleggio, quantità_rimasta, prodotto.prezzo FROM `noleggiato` join prodotto on noleggiato.nome_prodotto=prodotto.nome_prodotto WHERE id_ordine=? ",[o[i].id_ordine])
      
       for(var j=0;j<prodotti.length;j++){
            var percentuale=(prodotti[j].prezzo * o[i].percentualeRitardo)/100
            var costo =  prodotti[j].quantità_rimasta *percentuale
    
            if(costo>0){

                var idRitardo = getIDRitardo();
                console.log(idRitardo )
                db.query("INSERT INTO  addebito_ritardo (id_ritardo,importo_ritardo, data_ritardo, id_noleggio) VALUES(?,?,?,?)",[idRitardo, costo, data, prodotti[j].id_noleggio])
            }
        
 
       }
    
   }

}

}