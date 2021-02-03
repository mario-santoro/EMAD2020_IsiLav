package Bean;

import java.util.ArrayList;

public class Ordine {
	private int id_ordine;
	private String stato;
	private double tot;
	private String data_scadenza;
	private String metodo_pagamento;
	private String bolla_accompagnamento;
	private int num_carta;
	ArrayList<Prodotto> noleggiati;
	public Ordine() {}
	public Ordine(int id_ordine, String stato,double tot, String data_scadenza, String metodo_pagamento,String bolla_accompagnamento, int num_carta, ArrayList<Prodotto> noleggiati){
		this.id_ordine=id_ordine;
		this.stato=stato;
		this.tot=tot;
		this.data_scadenza=data_scadenza;
		this.metodo_pagamento=metodo_pagamento;
		this.bolla_accompagnamento=bolla_accompagnamento;
		this.num_carta=num_carta;
		this.noleggiati=noleggiati;
	}
	public int getId_ordine() {
		return id_ordine;
	}
	public void setId_ordine(int id_ordine) {
		this.id_ordine = id_ordine;
	}
	public String getStato() {
		return stato;
	}
	public void setStato(String stato) {
		this.stato = stato;
	}
	public double getTot() {
		return tot;
	}
	public void setTot(double tot) {
		this.tot = tot;
	}
	public String getData_scadenza() {
		return data_scadenza;
	}
	public void setData_scadenza(String data_scadenza) {
		this.data_scadenza = data_scadenza;
	}
	public String getMetodo_pagamento() {
		return metodo_pagamento;
	}
	public void setMetodo_pagamento(String metodo_pagamento) {
		this.metodo_pagamento = metodo_pagamento;
	}
	public String getBolla_accompagnamento() {
		return bolla_accompagnamento;
	}
	public void setBolla_accompagnamento(String bolla_accompagnamento) {
		this.bolla_accompagnamento = bolla_accompagnamento;
	}
	public int getNum_carta() {
		return num_carta;
	}
	public void setNum_carta(int num_carta) {
		this.num_carta = num_carta;
	}
	public ArrayList<Prodotto> getNoleggiati() {
		return noleggiati;
	}
	public void setNoleggiati(ArrayList<Prodotto> noleggiati) {
		this.noleggiati = noleggiati;
	}
 
	
	
}
