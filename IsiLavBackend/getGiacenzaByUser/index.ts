import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const email = req.query.email;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: database.getGiacenzaByUser(email)
    };

};

export default httpTrigger;