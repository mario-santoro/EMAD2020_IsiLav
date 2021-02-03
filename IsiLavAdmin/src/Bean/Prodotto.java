package Bean;

 

public class Prodotto{
	private String nomeArticolo;
	private String categoria;
	private String descBreve;
	private double prezzo;
	private String pathImg;
	private int quant;
	private int pezzi;
	private String desc;
	private boolean eliminato;
	
	public Prodotto() {
	}
	
	public Prodotto(String nomeArticolo, String categoria, String descBreve, double prezzo, int quant, int pezzi, String desc, boolean eliminato) {

		this.nomeArticolo = nomeArticolo;
		this.categoria = categoria;
		this.descBreve = descBreve;
		this.prezzo = prezzo;
		this.quant = quant;
		this.pezzi = pezzi;
		this.desc = desc;
		this.eliminato = eliminato;
	}
	
	public Prodotto(String nomeArticolo, String categoria, String descBreve, double prezzo, String pathImg, int quant, int pezzi, String desc, boolean eliminato) {

		this.nomeArticolo = nomeArticolo;
		this.categoria = categoria;
		this.descBreve = descBreve;
		this.prezzo = prezzo;
		this.pathImg = pathImg;
		this.quant = quant;
		this.pezzi = pezzi;
		this.desc = desc;
		this.eliminato = eliminato;
	}

	public String getNomeArticolo() {
		return nomeArticolo;
	}
	public void setNomeArticolo(String nomeArticolo) {
		this.nomeArticolo = nomeArticolo;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getDescBreve() {
		return descBreve;
	}
	public void setDescBreve(String descBreve) {
		this.descBreve = descBreve;
	}
	public double getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	public int getQuant() {
		return quant;
	}
	public void setQuant(int quant) {
		this.quant = quant;
	}
	public int getPezzi() {
		return pezzi;
	}
	public void setPezzi(int pezzi) {
		this.pezzi = pezzi;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public boolean getEliminato() {
		return eliminato;
	}
	public void setEliminato(boolean eliminato) {
		this.eliminato = eliminato;
	}
	public String getPathImg() {
		return pathImg;
	}
	public void setPathImg(String pathImg) {
		this.pathImg = pathImg;
	}

}
