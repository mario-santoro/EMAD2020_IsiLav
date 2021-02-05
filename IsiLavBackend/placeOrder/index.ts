import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const dateToYYYYMMDD = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month<10){
        month = "0"+month.toString()
    }
    let day = date.getDate();
    if(day<10){
        day = "0"+day.toString()
    }
    return year+"-"+month+"-"+day
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.body.email;
    const data_scelta = new Date(req.body.data_scelta);
    const hub = req.body.hub;
    const prodotti = req.body.prodotti;
    const prodotti_reso = req.body.prodotti_reso;

    var oggi = new Date();
    var scadenza = new Date(data_scelta)
    scadenza.setDate(oggi.getDate() + 14) //dopo due settimane dalla data scelta per la consegna

    //ordine
    var totale = 0;
    for(var i=0; i<prodotti.length; i++){
        totale+=prodotti[i].prezzo*prodotti[i].quantità_scelta
    }
    var ordine = {
        id: database.getIDOrdine(),
        totale: totale,
        data_scadenza: dateToYYYYMMDD(scadenza),
        metodo_pagamento: "MasterCard", //default per prova
        n_carta: "5191231234567890", // default per prova
        prodotti: prodotti,
    }
    database.placeOrder(ordine);

    //reso
    var reso = null;
    if(prodotti_reso.length>0){
        //console.log(prodotti_reso)
        reso = {
            id: database.getIDReso(),
            prodotti: prodotti_reso,
            costo: 0 //database.getCostoReso(email)
        }
        database.placeReturn(reso);
    }

    //operazione
    var operazione = {
        id: database.getIDOperazione(),
        data_operazione: dateToYYYYMMDD(oggi),
        data_scelta: dateToYYYYMMDD(data_scelta),
        email: email,
        id_ordine: ordine.id,
        id_reso: reso === null? null : reso.id,
        via: hub.via,
        id_percorso: hub.id_percorso
    }
    database.placeOperation(operazione);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {"status": "ok"}
    };

};

export default httpTrigger;