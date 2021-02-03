package BeanDAO;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import Bean.Utente;

public class UtenteDAO {
	public synchronized Utente doRetrieveByKey(String email, String password) throws UnsupportedEncodingException { // login

		Connection conn = null;
		PreparedStatement ps = null;
		Utente ub=null;

		try {
			MessageDigest md= MessageDigest.getInstance("SHA-1");
			md.update(password.getBytes("UTF-8"));
			password= toHex(md.digest());

		} catch (NoSuchAlgorithmException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {

			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT utente.email, utente.passw, utente.nominativo FROM utente join amministratore on utente.email=amministratore.email WHERE amministratore.email = ? AND passw = ?");
			ps.setString(1, email);
			ps.setString(2, password);

			ResultSet res = ps.executeQuery();

			if (res.next()) {
				ub = new Utente();

				ub.setEmail(res.getString("email"));
				ub.setPassword(res.getString("passw"));
				ub.setNominativo(res.getString("nominativo"));


			}


		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				ps.close();
				DriverManagerConnectionPool.releaseConnection(conn);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return ub;
	}

	private static String toHex(byte[] data) {
		StringBuffer sb= new StringBuffer();
		for(byte b: data) {
			String digit=Integer.toString(b & 0xFF, 16);
			if(digit.length()==1) {
				sb.append("0");

			}
			sb.append(digit);
		}
		return sb.toString();


	}

	public synchronized ArrayList<String> showCorrieri(String giorno) { // login

		Connection conn = null;
		PreparedStatement ps = null;
		ArrayList<String> corrieri =new ArrayList<String>();
		try {

			conn = DriverManagerConnectionPool.getConnection();
			switch(giorno) {
			case "lunedi":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.lunedì=1\r\n" + 
						")");  
				break;
			case "martedi":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.martedì=1\r\n" + 
						")");  
				break;
			case "mercoledi":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.mercoledì=1\r\n" + 
						")");  
				break;
			case "giovedi":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.giovedì=1\r\n" + 
						")");  
				break;
			case "venerdi":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.venerdì=1\r\n" + 
						")");  
				break;
			case "sabato":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.sabato=1\r\n" + 
						")");  
				break;
			case "domenica":
				ps = (PreparedStatement) conn.prepareStatement("SELECT DISTINCT corriere.email FROM `corriere` where not EXISTS(   SELECT percorso.corriere\r\n" + 
						"    FROM\r\n" + 
						"        percorso\r\n" + 
						"    WHERE\r\n" + 
						"       percorso.corriere= corriere.email AND\r\n" + 
						"        percorso.domenica=1\r\n" + 
						")");  
				break;
			 default: break;
				
			
			}
		 
			 

			ResultSet res = ps.executeQuery();

			while (res.next()) {

				corrieri.add(res.getString("email"));



			}


		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				ps.close();
				DriverManagerConnectionPool.releaseConnection(conn);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return corrieri;
	}
	
	
	public synchronized void changePassword(String email, String passwor) {
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = " UPDATE utente SET passw=? WHERE email=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, passwor);
			cmd.setString(2, email);
			cmd.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				cmd.close();
				DriverManagerConnectionPool.releaseConnection(conn);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
