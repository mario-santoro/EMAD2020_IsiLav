package Bean;

public class ProdottiOrdinati {
	
	private String data_scadenza;
	private int quantit�_ordine;
	private boolean ritardo;
	
	
	public ProdottiOrdinati() {
	}



	public ProdottiOrdinati(String data_scadenza, int quantit�_ordine, boolean ritardo) {
		this.data_scadenza = data_scadenza;
		this.quantit�_ordine = quantit�_ordine;
		this.ritardo=ritardo;
	}



	public String getData_scadenza() {
		return data_scadenza;
	}



	public void setData_scadenza(String data_scadenza) {
		this.data_scadenza = data_scadenza;
	}



	public int getQuantit�_ordine() {
		return quantit�_ordine;
	}



	public void setQuantit�_ordine(int quantit�_ordine) {
		this.quantit�_ordine = quantit�_ordine;
	}



	public boolean isRitardo() {
		return ritardo;
	}



	public void setRitardo(boolean ritardo) {
		this.ritardo = ritardo;
	}
	
	

}
