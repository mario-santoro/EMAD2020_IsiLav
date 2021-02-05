import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {getDatabase} from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.query.email // (req.body && req.body.name)); //o da url o da body json
    const password = req.query.password

    const db = getDatabase();
    const utente = db.query("SELECT * FROM utente WHERE email='"+email+"' AND passw=SHA1('"+password+"');")

    if (utente.length>0){ //credenziali trovate
        //query per sapere il tipo dell'utente
        const cliente = db.query("SELECT * FROM cliente WHERE email='"+email+"';")
        if (cliente.length>0){ //l'utente è un cliente
            if(cliente[0].accettato === 1){ //se è stato attivato
                context.res = {
                    body: {
                        "status": "ok",
                        "email": utente[0].email,
                        "nominativo": utente[0].nominativo,
                        "tipo": "cliente"
                    }
                };
            }
            else{
                context.res = {
                    body: {
                        "status": "Utente in attesa di essere accettato!",
                    }
                };
            }
        }
        else //controllare se l'utente è un corriere
        {
            const corriere = db.query("SELECT * FROM corriere WHERE email='"+email+"';")
            if (corriere.length>0){ //è un corriere
                context.res = {
                    body: {
                        "status": "ok",
                        "email": utente[0].email,
                        "nominativo": utente[0].nominativo,
                        "tipo": "corriere"
                    }
                };
            }
            else{ //ruolo non riconosciuto (è admin?)
                context.res = {
                    body: {"status": "L'utente non ha un ruolo previsto dall'app!"}
                };
            }
        }

    } //credenziale errate
    else{
        context.res = {
            body: {"status": "Credenziali inserite errate!"}
        };
    }

        
    
};

export default httpTrigger;