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
const timerTrigger = function (context, myTimer) {
    return __awaiter(this, void 0, void 0, function* () {
        var timeStamp = new Date().toISOString();
        const dateToYYYYMMDD = (date) => {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month.toString();
            }
            let day = date.getDate();
            if (day < 10) {
                day = "0" + day.toString();
            }
            return year + "-" + month + "-" + day;
        };
        var oggi = new Date();
        database.addebitoRitardo(dateToYYYYMMDD(oggi));
        if (myTimer.isPastDue) {
            context.log('Timer function is running late!');
        }
        context.log('Timer trigger function ran!', timeStamp);
    });
};
exports.default = timerTrigger;
//# sourceMappingURL=index.js.map