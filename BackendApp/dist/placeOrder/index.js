"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database = require("../database/database");
const dateToYYYYMMDD = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month.toString();
    }
    let day = date.getDate();
    if (day < 10) {
        day = "0" + day.toString();
    }
    return year + "-" + month + "-" + day;
};
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const data_scelta = new Date(req.body.data_scelta);
        const hub = req.body.hub;
        const prodotti = req.body.prodotti;
        const prodotti_reso = req.body.prodotti_reso;
        var oggi = new Date();
        var scadenza = new Date(data_scelta);
        scadenza.setDate(oggi.getDate() + 14); //dopo due settimane dalla data scelta per la consegna
        //ordine
        var totale = 0;
        for (var i = 0; i < prodotti.length; i++) {
            totale += prodotti[i].prezzo * prodotti[i].quantità_scelta;
        }
        var ordine = {
            id: database.getIDOrdine(),
            totale: totale,
            data_scadenza: dateToYYYYMMDD(scadenza),
            metodo_pagamento: "MasterCard",
            n_carta: "5191231234567890",
            prodotti: prodotti,
        };
        database.placeOrder(ordine);
        //reso ######################################################################################################################################## DA FARE
        var reso = null;
        if (prodotti_reso.length > 0) {
            reso = {
                id: database.getIDReso(),
            };
            //database.placeReturn(reso);
        }
        //operazione
        var operazione = {
            id: database.getIDOperazione(),
            data_operazione: dateToYYYYMMDD(oggi),
            data_scelta: dateToYYYYMMDD(data_scelta),
            email: email,
            id_ordine: ordine.id,
            id_reso: reso === null ? null : reso.id,
            via: hub.via,
            id_percorso: hub.id_percorso
        };
        database.placeOperation(operazione);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { "status": "ok" }
        };
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map