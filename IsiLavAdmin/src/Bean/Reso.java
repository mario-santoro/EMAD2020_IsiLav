package Bean;

import java.util.ArrayList;

public class Reso {
	private int id_reso;
	private double costoReso; 
	private ArrayList<Prodotto> restituiti;
	private boolean confermato;
	
	public Reso() {}
	public Reso(int id_reso, double costoReso,ArrayList<Prodotto> restituiti ){ 
		this.id_reso=id_reso;
		this.costoReso=costoReso;
		this.restituiti=restituiti;
	}
	public int getId_reso() {
		return id_reso;
	}
	public void setId_reso(int id_reso) {
		this.id_reso = id_reso;
	}
	public double getCostoReso() {
		return costoReso;
	}
	public void setCostoReso(double costoReso) {
		this.costoReso = costoReso;
	}
	public ArrayList<Prodotto> getRestituiti() {
		return restituiti;
	}
	public void setRestituiti(ArrayList<Prodotto> restituiti) {
		this.restituiti = restituiti;
	}
	public boolean isConfermato() {
		return confermato;
	}
	public void setConfermato(boolean confermato) {
		this.confermato = confermato;
	}
	 
	
}
