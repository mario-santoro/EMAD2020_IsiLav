import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as database from "../database/database"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const nome = req.query.nome

    context.res = {
        body: database.searchProductsByName(nome)
    };

};

export default httpTrigger;