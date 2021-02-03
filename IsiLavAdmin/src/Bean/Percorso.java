package Bean;

import java.util.ArrayList;

public class Percorso {
	private int id_percorso;
	 private String nome;
	 ArrayList<Boolean> giorni;
	 ArrayList<Fermata> fermate;
	 
	 ArrayList<Operazione> op;
	 public Percorso(String nome, String data, ArrayList<Fermata> fermate ) {
		 this.nome=nome;
	 
		 this.fermate=fermate;
		 
		 
	 }
	 public Percorso() {}
	public String getNome() {
		return nome;
	}
	
	
	public int getId_percorso() {
		return id_percorso;
	}
	public void setId_percorso(int id_percorso) {
		this.id_percorso = id_percorso;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
 
	public ArrayList<Boolean> getGiorni() {
		return giorni;
	}
	public void setGiorni(ArrayList<Boolean> giorni) {
		this.giorni = giorni;
	}
	public ArrayList<Fermata> getFermate() {
		return fermate;
	}
	public void setFermate(ArrayList<Fermata> fermate) {
		this.fermate = fermate;
	}

	public ArrayList<Operazione> getOperazioni() {
		return op;
	}
	public void setOperazioni(ArrayList<Operazione> op) {
		this.op= op;
	}
	 
}
