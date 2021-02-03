package Bean;

public class Pagamenti  {
	private String data;
	private int num_ordine;
	private String tipo;
	private double totale;
	public Pagamenti() {
	}
	public Pagamenti(String data, int num_ordine, String tipo, double totale) {
		this.data = data;
		this.num_ordine = num_ordine;
		this.tipo = tipo;
		this.totale = totale;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public int getNum_ordine() {
		return num_ordine;
	}
	public void setNum_ordine(int num_ordine) {
		this.num_ordine = num_ordine;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public double getTotale() {
		return totale;
	}
	public void setTotale(double totale) {
		this.totale = totale;
	}
	
	

}
