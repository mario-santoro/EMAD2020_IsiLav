package Bean;

public class Movimenti {
	private String nome_prodotto;
	private int quantita;
	private int quantita_resa;
	private String data;

	public Movimenti() {

	}
	public Movimenti(String nome_prodotto, int quantita, int quantita_resa ,String data) {
		this.nome_prodotto=nome_prodotto;
		this.quantita = quantita;
		this.quantita_resa = quantita_resa;
		this.data = data;
	}
	
	public String getNome_prodotto() {
		return nome_prodotto;
	}
	public void setNome_prodotto(String nome_prodotto) {
		this.nome_prodotto = nome_prodotto;
	}
	public int getQuantita() {
		return quantita;
	}
	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}
	public int getQuantita_resa() {
		return quantita_resa;
	}
	public void setQuantita_resa(int quantita_resa) {
		this.quantita_resa = quantita_resa;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}

}
