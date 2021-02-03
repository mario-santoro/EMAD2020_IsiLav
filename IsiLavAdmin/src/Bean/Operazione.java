package Bean;

public class Operazione {
	private int id_operazione;
	private String data_operazione;
	private Cliente c;
	private Ordine o;	
	private Reso r;
	private Fermata f;
	private String via;
	private String dataScelta;
	
	public Operazione() {}
	public Operazione(int id_operazione,String data_operazione, Cliente c, Ordine o, Reso r, Fermata f) {
		this.id_operazione=id_operazione;
		this.data_operazione=data_operazione;
		this.c=c;
		this.o=o;
		this.r=r;
		this.f=f;
	}
	public int getId_operazione() {
		return id_operazione;
	}
	public void setId_operazione(int id_operazione) {
		this.id_operazione = id_operazione;
	}
	public String getData_operazione() {
		return data_operazione;
	}
	public void setData_operazione(String data_operazione) {
		this.data_operazione = data_operazione;
	}
	public Cliente getCliente() {
		return c;
	}
	public void setCliente(Cliente c) {
		this.c = c;
	}
	public Ordine getOrdine() {
		return o;
	}
	public void setOrdine(Ordine o) {
		this.o = o;
	}
	public Reso getReso() {
		return r;
	}
	public void setReso(Reso r) {
		this.r = r;
	}
	public Fermata getFermata() {
		return f;
	}
	public void setFermata(Fermata f) {
		this.f = f;
	}
	public String getVia() {
		return via;
	}
	public void setVia(String via) {
		this.via = via;
	}
	public String getDataScelta() {
		return dataScelta;
	}
	public void setDataScelta(String dataScelta) {
		this.dataScelta = dataScelta;
	}

}
