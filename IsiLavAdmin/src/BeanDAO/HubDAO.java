package BeanDAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import Bean.Hub;

public class HubDAO {
	public synchronized ArrayList<Hub> showHub() { // login
		ArrayList<Hub> hubs= new ArrayList<Hub>();
		Connection conn = null;
		PreparedStatement ps = null;
		Hub h=null;
		try {
	
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM hub");
			

			ResultSet res = ps.executeQuery();

			while (res.next()) {
				 h = new Hub();
			
				h.setCitta(res.getString("città"));
				h.setVia(res.getString("via"));
				h.setCap(res.getString("cap"));
				hubs.add(h);

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
		return hubs;
	}
	
	
	public synchronized boolean insertHub(Hub h) {
		Connection conn = null;
		PreparedStatement cmd = null;

		try {
				conn = DriverManagerConnectionPool.getConnection();
				String registrazione = "INSERT INTO hub(città,via,cap,longitudine,latitudine) VALUES(?,?,?,?,?)";
				cmd = (PreparedStatement) conn.prepareStatement(registrazione);
				cmd.setString(1, h.getCitta());
				cmd.setString(2, h.getVia());
				cmd.setString(3, h.getCap());
				cmd.setString(4, h.getLatitudine());
				cmd.setString(5, h.getLongitudine());
			 
				cmd.executeUpdate();
				cmd.close();
				return true;
		

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
		return false;
	}

	public synchronized void deleteHub(String via) {

		Connection conn = null;
		PreparedStatement cmd = null;

		try {
			conn = DriverManagerConnectionPool.getConnection();

			String sql = "DELETE from hub where via=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
					
			cmd.setString(1, via);
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
