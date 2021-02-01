import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const data = req.query.data;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: database.getHubsByDate(data)
    };

};

export default httpTrigger;