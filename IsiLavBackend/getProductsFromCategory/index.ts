import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const category = req.query.categoria
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: database.getProductsFromCategory(category)
    };

};

export default httpTrigger;