package Bean;

public class Fermata {
	private Hub hub;
	private int ore;
	private int minuti;
	public Fermata() {}
	public Fermata(Hub hub, int ore, int minuti)
	{
		this.hub=hub;
		this.ore=ore;
		this.minuti=minuti;
		
	}
	public Hub getHub() {
		return hub;
	}
	public void setHub(Hub hub) {
		this.hub = hub;
	}
	public int getOre() {
		return ore;
	}
	public void setOre(int ore) {
		this.ore = ore;
	}
	public int getMinuti() {
		return minuti;
	}
	public void setMinuti(int minuti) {
		this.minuti = minuti;
	}
	
	
}
