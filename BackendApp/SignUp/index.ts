import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.body.email;
    const passw= req.body.passw;
    const nominativo = req.body.nominativo;
    const ragSociale = req.body.ragSociale;
    const codFiscale= req.body.codFiscale;
    const nomeAttivita= req.body.nomeAttivita;
    const citta=req.body.citta;
    const telefono=req.body.telefono;
    const cap= req.body.cap;
    const sede=req.body.sede;
    const pIVA= req.body.pIVA;
    const ife=req.body.ife;
    const numeroCarta=req.body.numeroCarta;
    const scadenzaCarta=req.body.scadenzaCarta;
   
      //registrazione cliente
      var cliente = {
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
    }
    const ok= database.SignUp(cliente);
    if(ok){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "ok"}
        };
    }else{

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "L'email selezionata dal cliente è già in uso"}
        };
    }
   

};

export default httpTrigger;