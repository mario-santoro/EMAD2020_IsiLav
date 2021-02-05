import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const id_percorso = req.query.id_percorso

    context.res = {
        body: database.getFermateByPercorso(id_percorso)
    };

};

export default httpTrigger;