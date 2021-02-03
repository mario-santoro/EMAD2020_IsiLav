"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database = require("../database/database");
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const vecchiaPassword = req.body.vecchiaPassword;
        const nuovaPassword = req.body.nuovaPassword;
        const ok = database.ChangePassword(vecchiaPassword, nuovaPassword, email);
        if (ok) {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: { "status": "ok" }
            };
        }
        else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: { "status": "La password inserita non corrisponde alla vecchia password" }
            };
        }
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map