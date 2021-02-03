import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: database.getCategories()
    };

};

export default httpTrigger;