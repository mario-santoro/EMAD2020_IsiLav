package Bean;

public class Cliente extends Utente{
	private String ragSociale;
	private String codFiscale;
	private String nomeAttivita;
	private String citta ;
	private int telefono;
	private int CAP;
	private String sede;
	private String pIVA;
	private String IFE;
	private boolean accettato;
	private int premium;
	private double costoReso;
	private int percentualeRitardo;
	
	public Cliente(String email, String password, String nominativo, String ragSociale, String codFiscale, String nomeAttivita, String citta, int telefono, int CAP, String sede, String pIVA, String IFE) {
		super(email, password, nominativo);
		this.ragSociale=ragSociale;
		this.codFiscale=codFiscale;
		this.nomeAttivita=nomeAttivita;
		this.citta=citta;
		this.CAP=CAP;
		this.telefono=telefono;
		this.sede=sede;
		this.pIVA=pIVA;
		this.IFE=IFE;
	}
	public Cliente() {}
	public String getRagSociale() {
		return ragSociale;
	}

	public void setRagSociale(String ragSociale) {
		this.ragSociale = ragSociale;
	}

	public String getCodFiscale() {
		return codFiscale;
	}

	public void setCodFiscale(String codFiscale) {
		this.codFiscale = codFiscale;
	}

	public String getNomeAttivita() {
		return nomeAttivita;
	}

	public void setNomeAttivita(String nomeAttivita) {
		this.nomeAttivita = nomeAttivita;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public int getCAP() {
		return CAP;
	}

	public void setCAP(int cAP) {
		CAP = cAP;
	}

	public String getSede() {
		return sede;
	}

	public void setSede(String sede) {
		this.sede = sede;
	}

	public String getpIVA() {
		return pIVA;
	}

	public void setpIVA(String pIVA) {
		this.pIVA = pIVA;
	}

	public String getIFE() {
		return IFE;
	}

	public void setIFE(String iFE) {
		IFE = iFE;
	}

	public boolean isAccettato() {
		return accettato;
	}

	public void setAccettato(boolean accettato) {
		this.accettato = accettato;
	}


	public int getPremium() {
		return premium;
	}
	public void setPremium(int premium) {
		this.premium = premium;
	}
	public double getCostoReso() {
		return costoReso;
	}

	public void setCostoReso(double costoReso) {
		this.costoReso = costoReso;
	}

	public int getPercentualeRitardo() {
		return percentualeRitardo;
	}

	public void setPercentualeRitardo(int percentualeRitardo) {
		this.percentualeRitardo = percentualeRitardo;
	}
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	

}
