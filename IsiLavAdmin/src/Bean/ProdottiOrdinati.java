package Bean;

public class ProdottiOrdinati {
	
	private String data_scadenza;
	private int quantità_ordine;
	private boolean ritardo;
	
	
	public ProdottiOrdinati() {
	}



	public ProdottiOrdinati(String data_scadenza, int quantità_ordine, boolean ritardo) {
		this.data_scadenza = data_scadenza;
		this.quantità_ordine = quantità_ordine;
		this.ritardo=ritardo;
	}



	public String getData_scadenza() {
		return data_scadenza;
	}



	public void setData_scadenza(String data_scadenza) {
		this.data_scadenza = data_scadenza;
	}



	public int getQuantità_ordine() {
		return quantità_ordine;
	}



	public void setQuantità_ordine(int quantità_ordine) {
		this.quantità_ordine = quantità_ordine;
	}



	public boolean isRitardo() {
		return ritardo;
	}



	public void setRitardo(boolean ritardo) {
		this.ritardo = ritardo;
	}
	
	

}
