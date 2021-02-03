import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.body.email;
    const vecchiaPassword= req.body.vecchiaPassword;
    const nuovaPassword= req.body.nuovaPassword;
     const ok=database.ChangePassword(vecchiaPassword, nuovaPassword, email);
     if(ok){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "ok"}
        };
    }else{

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {"status": "La password inserita non corrisponde alla vecchia password"}
        };
    }
  

};

export default httpTrigger;