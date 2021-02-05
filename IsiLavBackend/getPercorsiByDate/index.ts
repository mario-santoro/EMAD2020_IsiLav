import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const data = req.query.data

    context.res = {
        body: database.getPercorsiByDate(data)
    };

};

export default httpTrigger;