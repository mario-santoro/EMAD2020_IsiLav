/*class Carrello {  
    static instance= null;
    static getCarrello(){
        if(Carrello.instance!==null){
            return Carrello.instance;
        }else{
            return new Carrello();
        }
    }
    constructor(){       
        this.articoli=[]; 
    }   

}*/

let Carrello = {
    articoli: [],    
    addArticolo: function (articolo){
        this.articoli= this.articoli.concat(articolo);
        console.log(articolo);
    },
    removeArticolo: function(articolo){
        
    }
}
export default Carrello;