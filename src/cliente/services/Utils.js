export function dateToYYYYMMDD(date) {
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

export function datetoDDMMYYYY(date) {
    let day = date.getDate()
    if (day<10) {
        day = "0"+day.toString()
    }
    let month = date.getMonth()+1;
    if(month<10){
        month = "0"+month.toString()
    }
    let year = date.getFullYear();
    return day+"-"+month+"-"+year
}