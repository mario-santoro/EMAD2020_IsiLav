import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const email = req.body.email;
  
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
     sede:sede,
     pIVA: pIVA,
     ife:ife 
  }
 
     database.UpdateCustomer(cliente); 
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "ok"}
        };
 
  
   

};

export default httpTrigger;