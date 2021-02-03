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
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const nominativo = req.body.nominativo;
        const ragSociale = req.body.ragSociale;
        const codFiscale = req.body.codFiscale;
        const nomeAttivita = req.body.nomeAttivita;
        const citta = req.body.citta;
        const telefono = req.body.telefono;
        const cap = req.body.cap;
        const sede = req.body.sede;
        const pIVA = req.body.pIVA;
        const ife = req.body.ife;
        //registrazione cliente
        var cliente = {
            email: email,
            nominativo: nominativo,
            ragSociale: ragSociale,
            codFiscale: codFiscale,
            nomeAttivita: nomeAttivita,
            citta: citta,
            telefono: telefono,
            cap: cap,
            sede: sede,
            pIVA: pIVA,
            ife: ife
        };
        database.UpdateCustomer(cliente);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { "status": "ok" }
        };
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map