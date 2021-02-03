package Bean;

public class Hub {
	private String citta;
	private String via;
	private String cap;
	private String latitudine;
	private String longitudine;
	public Hub(String citta, String via, String cap, String latitudine, String longitudine) {
		this.citta=citta;
		this.via=via;
		this.cap=cap;
		this.latitudine=latitudine;
		this.longitudine=longitudine;
	}
	public Hub() {}
	public String getCitta() {
		return citta;
	}
	public void setCitta(String citta) {
		this.citta = citta;
	}
	public String getVia() {
		return via;
	}
	public void setVia(String via) {
		this.via = via;
	}
	public String getLatitudine() {
		return latitudine;
	}
	public void setLatitudine(String latitudine) {
		this.latitudine = latitudine;
	}
	public String getLongitudine() {
		return longitudine;
	}
	public void setLongitudine(String longitudine) {
		this.longitudine = longitudine;
	}
	public String getCap() {
		return cap;
	}
	public void setCap(String cap) {
		this.cap = cap;
	}
	
	
}