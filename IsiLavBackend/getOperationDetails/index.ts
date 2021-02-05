import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const operazione = req.query.operazione

    context.res = {
        body: database.getOperationDetails(operazione)
    };

};

export default httpTrigger;