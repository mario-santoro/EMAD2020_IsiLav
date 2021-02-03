package Bean;

public class Utente {
 private String email;
 private String password;
 private String nominativo;
 
 public Utente(String email, String password, String nominativo) {
	 
	 this.email=email;
	 this.password=password;
	 this.nominativo=nominativo;
	 
 }

 public Utente() {}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getNominativo() {
	return nominativo;
}

public void setNominativo(String nominativo) {
	this.nominativo = nominativo;
}
 
 
 
}
