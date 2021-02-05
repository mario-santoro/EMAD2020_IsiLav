import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.body.email;
    const numeroCarta= req.body.numeroCarta;
    const scadenzaCarta=req.body.scadenzaCarta;
   
     database.PaymentMethod(numeroCarta, scadenzaCarta, email);
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "ok"}
        };
 
};

export default httpTrigger;