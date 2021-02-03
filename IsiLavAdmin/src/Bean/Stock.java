package Bean;

import java.util.ArrayList;

public class Stock {
	
	private String nome_prodotto;
	private int quantita_rimasta;
	private ArrayList<ProdottiOrdinati> prodotti_ordinati;
	
	public Stock() {
	}

	public Stock(String nome_prodotto, int quantita_rimasta, ArrayList<ProdottiOrdinati> prodotti_ordinati) {
		this.nome_prodotto = nome_prodotto;
		this.quantita_rimasta = quantita_rimasta;
		this.prodotti_ordinati = prodotti_ordinati;
		
	}

	public String getNome_prodotto() {
		return nome_prodotto;
	}


	public void setNome_prodotto(String nome_prodotto) {
		this.nome_prodotto = nome_prodotto;
	}


	public int getQuantita_rimasta() {
		return quantita_rimasta;
	}


	public void setQuantita_rimasta(int quantita_rimasta) {
		this.quantita_rimasta = quantita_rimasta;
	}

	public ArrayList<ProdottiOrdinati> getProdotti_ordinati() {
		return prodotti_ordinati;
	}

	public void setProdotti_ordinati(ArrayList<ProdottiOrdinati> prodotti_ordinati) {
		this.prodotti_ordinati = prodotti_ordinati;
	}	

	
	
}
