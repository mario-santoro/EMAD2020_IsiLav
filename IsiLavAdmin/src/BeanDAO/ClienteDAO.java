package BeanDAO;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import Bean.Cliente;


public class ClienteDAO {
	public synchronized ArrayList<Cliente> showRequestSignUp() { // login
		ArrayList<Cliente> clienti= new ArrayList<Cliente>();
		Connection conn = null;
		PreparedStatement ps = null;
		Cliente c=null;
		try {
	
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM cliente join utente on cliente.email= utente.email WHERE accettato = 0");
			

			ResultSet res = ps.executeQuery();

			while (res.next()) {
				 c = new Cliente();
			
				c.setEmail(res.getString("email"));
				c.setPassword(res.getString("passw"));
				c.setNominativo(res.getString("nominativo"));
				c.setRagSociale(res.getString("ragSociale"));
				c.setCodFiscale(res.getString("codFiscale"));
				c.setNomeAttivita(res.getString("nomeAttivita"));
				c.setCitta(res.getString("citta"));
				c.setTelefono(res.getString("telefono"));
				c.setCAP(res.getString("CAP"));
				c.setSede(res.getString("sede"));
				c.setpIVA(res.getString("pIVA"));
				c.setIFE(res.getString("IFE"));
				c.setAccettato(false);
				clienti.add(c);

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
		return clienti;
	}

	public synchronized ArrayList<Cliente> showCustomer() { // login
		ArrayList<Cliente> clienti= new ArrayList<Cliente>();
		Connection conn = null;
		PreparedStatement ps = null;
		Cliente c=null;
		try {
	
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM cliente join utente on cliente.email= utente.email WHERE accettato = 1");
			

			ResultSet res = ps.executeQuery();

			while (res.next()) {
				 c = new Cliente();
			
				c.setEmail(res.getString("email"));
				c.setPassword(res.getString("passw"));
				c.setNominativo(res.getString("nominativo"));
				c.setRagSociale(res.getString("ragSociale"));
				c.setCodFiscale(res.getString("codFiscale"));
				c.setNomeAttivita(res.getString("nomeAttivita"));
				c.setCitta(res.getString("citta"));
				c.setCAP(res.getString("CAP"));
				c.setTelefono(res.getString("telefono"));
				c.setSede(res.getString("sede"));
				c.setpIVA(res.getString("pIVA"));
				c.setIFE(res.getString("IFE"));
				c.setPremium(res.getInt("premium"));
				c.setCostoReso(res.getDouble("costoReso"));
				c.setPercentualeRitardo(res.getInt("percentualeRitardo"));
				c.setAccettato(false);
				clienti.add(c);

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
		return clienti;
	}

	public synchronized Cliente doRetrieveByEmail(String email) { // login

		Connection conn = null;
		PreparedStatement ps = null;
		Cliente c=null;
		try {
	
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM cliente join utente on cliente.email= utente.email where cliente.email=? ");
			ps.setString(1, email);
		

			ResultSet res = ps.executeQuery();

			if (res.next()) {
				 c = new Cliente();
					
					c.setEmail(res.getString("email"));
					c.setPassword(res.getString("passw"));
					c.setNominativo(res.getString("nominativo"));
					c.setRagSociale(res.getString("ragSociale"));
					c.setCodFiscale(res.getString("codFiscale"));
					c.setNomeAttivita(res.getString("nomeAttivita"));
					c.setCitta(res.getString("citta"));
					c.setTelefono(res.getString("telefono"));
					c.setCAP(res.getString("CAP"));
					c.setSede(res.getString("sede"));
					c.setpIVA(res.getString("pIVA"));
					c.setIFE(res.getString("IFE"));
					c.setPremium(res.getInt("premium"));
					c.setCostoReso(res.getDouble("costoReso"));
					c.setPercentualeRitardo(res.getInt("percentualeRitardo"));

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
		return c;
	}
	
	
	public synchronized void customerConfirmation(Cliente c) {

		Connection conn = null;
		PreparedStatement cmd = null;

		try {
			conn = DriverManagerConnectionPool.getConnection();

			String sql = " UPDATE cliente SET accettato=?,premium=?,costoReso=?,percentualeRitardo=? where email=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setBoolean(1, c.isAccettato());
			cmd.setInt(2, c.getPremium());
			cmd.setDouble(3, c.getCostoReso());
			cmd.setInt(4, c.getPercentualeRitardo());			
			cmd.setString(5, c.getEmail());
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

	public synchronized void rejectCustomer(String email) {

		Connection conn = null;
		PreparedStatement cmd = null;

		try {
			conn = DriverManagerConnectionPool.getConnection();

			String sql = " DELETE from utente where email=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
					
			cmd.setString(1, email);
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

	public synchronized void modifyCustomer(String email, int percentualeRitardo, double costoReso, int premium) {

		Connection conn = null;
		PreparedStatement cmd = null;

		try {
			conn = DriverManagerConnectionPool.getConnection();

			String sql = " UPDATE cliente SET premium=?,costoReso=?,percentualeRitardo=? where email=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setInt(1, premium);
			cmd.setDouble(2, costoReso);
			cmd.setInt(3, percentualeRitardo);
			cmd.setString(4, email);
			 
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
