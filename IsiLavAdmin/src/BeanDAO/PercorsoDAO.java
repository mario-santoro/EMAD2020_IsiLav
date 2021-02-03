package BeanDAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import Bean.Fermata;
import Bean.Hub;
import Bean.Percorso;

public class PercorsoDAO {
	public synchronized ArrayList<Percorso> showPercorsi(String giorno) { 
		ArrayList<Percorso> percorsi= null;
		Connection conn = null;
		PreparedStatement ps = null;
		PreparedStatement ps2 = null;
		PreparedStatement ps3 = null;
		Percorso p=null;
		ArrayList<Fermata> fermate = null; 
		ArrayList<Boolean> giorni= new ArrayList<Boolean>();
		Fermata f= null;
		Hub h= null;
		try {
			percorsi= new ArrayList<Percorso>();
			conn = DriverManagerConnectionPool.getConnection();
			switch(giorno) {
			case "lunedì":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where lunedì=1 ORDER BY nome ASC ");
				break;
			case "martedì":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where martedì=1 ORDER BY nome ASC ");
				break;
			case "mercoledì":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where mercoledì=1 ORDER BY nome ASC ");
				break;
			case "giovedì":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where giovedì=1 ORDER BY nome ASC ");
				break;
			case "venerdì":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where venerdì=1 ORDER BY nome ASC ");
				break;
			case "sabato":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where sabato=1 ORDER BY nome ASC "); 
				break;
			case "domenica":
				ps = (PreparedStatement) conn.prepareStatement("SELECT * FROM percorso where domenica=1 ORDER BY nome ASC ");
				break;
			 default: break;
				
			
			}
		 
		
			 
			ResultSet res = ps.executeQuery();

			while (res.next()) {
			 
				p = new Percorso();
				fermate= new ArrayList<Fermata>();
				p.setId_percorso(res.getInt("id_percorso"));
				giorni.add(res.getBoolean("lunedì"));
				giorni.add(res.getBoolean("martedì"));
				giorni.add(res.getBoolean("mercoledì"));
				giorni.add(res.getBoolean("giovedì"));
				giorni.add(res.getBoolean("venerdì"));
				giorni.add(res.getBoolean("sabato"));
				giorni.add(res.getBoolean("domenica"));
				p.setGiorni(giorni);
				p.setNome(res.getString("nome"));	
				int id=res.getInt("id_percorso");

				ps2 = (PreparedStatement) conn.prepareStatement("SELECT * FROM fermata where id_percorso=? ORDER BY ore, minuti ASC ");

				ps2.setInt(1,id);
				ResultSet res2 = ps2.executeQuery();
				while (res2.next()) {
					f= new Fermata();

					f.setMinuti(res2.getInt("minuti"));					
					f.setOre(res2.getInt("ore"));
					h= new Hub();
					h.setVia(res2.getString("via"));	


					ps3 = (PreparedStatement) conn.prepareStatement("SELECT * FROM hub where via=?");
					ps3.setString(1, h.getVia());
					ResultSet res3= ps3.executeQuery();
					if (res3.next()) {

						h.setCitta(res3.getString("città"));

						f.setHub(h);

					}

					fermate.add(f);	
					

				}


				p.setFermate(fermate);
				percorsi.add(p);
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
		return percorsi;
	}

	
	public synchronized void deletePercorso(int id_percorso) {

		Connection conn = null;
		PreparedStatement cmd = null;

		try {
			conn = DriverManagerConnectionPool.getConnection();

			String sql = "DELETE from percorso where id_percorso=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);

			cmd.setInt(1, id_percorso);
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

	public synchronized boolean insertPercorso(Percorso p) {
		Connection conn = null;
		PreparedStatement cmd = null;
		PreparedStatement ps = null;
		int id= getIdPercorso()+1;

		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = "INSERT INTO percorso(id_percorso,nome,lunedì,martedì, mercoledì, giovedì, venerdì, sabato, domenica) VALUES(?,?,?,?,?,?,?,?,?)";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setInt(1, id);
			cmd.setString(2, p.getNome());
			cmd.setBoolean(3, p.getGiorni().get(0));
			cmd.setBoolean(4, p.getGiorni().get(1));
			cmd.setBoolean(5, p.getGiorni().get(2));
			cmd.setBoolean(6, p.getGiorni().get(3));
			cmd.setBoolean(7, p.getGiorni().get(4));
			cmd.setBoolean(8, p.getGiorni().get(5));
			cmd.setBoolean(9, p.getGiorni().get(6));
				 
			cmd.executeUpdate();


			for(int i=0; i<p.getFermate().size();i++) {
				String sql2 = "INSERT INTO fermata(via,id_percorso,ore,minuti) VALUES(?,?,?,?)";
				cmd = (PreparedStatement) conn.prepareStatement(sql2);
				cmd.setString(1, p.getFermate().get(i).getHub().getVia());
				cmd.setInt(2, id);
				cmd.setInt(3, p.getFermate().get(i).getOre());
				cmd.setInt(4, p.getFermate().get(i).getMinuti());			 
				cmd.executeUpdate();

			}
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

	private synchronized int getIdPercorso() { // login

		Connection conn = null;
		PreparedStatement ps = null;
		int id=0;

		try {
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT MAX(id_percorso) AS 'max' FROM `percorso`");
			ResultSet res = ps.executeQuery();
			if (res.next()) {

				id= res.getInt("max");

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
		return id;
	}

}
