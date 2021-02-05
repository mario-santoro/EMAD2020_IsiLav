import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const id_ordine = req.query.id_ordine

    context.res = {
        body: database.getOrderDetailsByID(id_ordine)
    };

};

export default httpTrigger;