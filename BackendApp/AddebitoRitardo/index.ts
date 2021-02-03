import { AzureFunction, Context } from "@azure/functions"
import * as database from "../database/database"
const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    const dateToYYYYMMDD = (date) => {
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        if(month<10){
            month = "0"+month.toString()
        }
        let day = date.getDate();
        if(day<10){
            day = "0"+day.toString()
        }
        return year+"-"+month+"-"+day
    }
 
    var oggi = new Date();
   
   database.addebitoRitardo(dateToYYYYMMDD(oggi));
    if (myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!', timeStamp);   
  
};

export default timerTrigger;
