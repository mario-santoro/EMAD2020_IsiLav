package BeanDAO;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Bean.Prodotto;

public class ProdottoDAO {


	public synchronized boolean doSave(Prodotto p) {
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String nuovoProdotto = "INSERT INTO prodotto(nome_prodotto, descrizione_breve, quantità, prezzo, pezzi, descrizione, categoria, eliminato, immagine) VALUES(?,?,?,?,?,?,?,?,?)";
			cmd = (PreparedStatement) conn.prepareStatement(nuovoProdotto);
			cmd.setString(1, p.getNomeArticolo());
			cmd.setString(2, p.getDescBreve());
			cmd.setInt(3, p.getQuant());
			cmd.setDouble(4, p.getPrezzo());
			cmd.setInt(5, p.getPezzi());
			cmd.setString(6, p.getDesc());
			cmd.setString(7, p.getCategoria());
			cmd.setBoolean(8, false);
			cmd.setString(9, p.getPathImg());
			cmd.executeUpdate();
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

	public synchronized ArrayList<Prodotto> getProdotti() {

		ArrayList<Prodotto> lista = new ArrayList<Prodotto>();
		Prodotto p = null;

		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = "SELECT * FROM prodotto WHERE eliminato=0";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			ResultSet res = cmd.executeQuery();
			while(res.next()){

				p = new Prodotto();
				p.setNomeArticolo(res.getString("nome_prodotto"));
				p.setDescBreve(res.getString("descrizione_breve"));
				p.setQuant(res.getInt("quantità"));
				p.setPrezzo(res.getDouble("prezzo"));
				p.setPezzi(res.getInt("pezzi"));
				p.setDesc(res.getString("descrizione"));
				p.setCategoria(res.getString("categoria"));
				p.setEliminato(res.getBoolean("eliminato"));
				lista.add(p);

			}
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

		return lista;
	}


	public synchronized Prodotto getProdotto(String nome_prodotto) {

		Prodotto p = null;

		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = "SELECT * FROM prodotto WHERE nome_prodotto=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, nome_prodotto);

			ResultSet res = cmd.executeQuery();
			while(res.next()){
				p = new Prodotto();
				p.setNomeArticolo(res.getString("nome_prodotto"));
				p.setDescBreve(res.getString("descrizione_breve"));
				p.setQuant(res.getInt("quantità"));
				p.setPrezzo(res.getDouble("prezzo"));
				p.setPezzi(res.getInt("pezzi"));
				p.setDesc(res.getString("descrizione"));
				p.setCategoria(res.getString("categoria"));
				p.setEliminato(res.getBoolean("eliminato"));
				p.setPathImg(res.getString("immagine"));
			}
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

		return p;
	}


	public synchronized void doUpdate(Prodotto p) {
		 
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = " UPDATE prodotto SET descrizione_breve=?, quantità=?, prezzo=?, pezzi=?,descrizione=?, categoria=? WHERE nome_prodotto=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, p.getDescBreve());
			cmd.setInt(2, p.getQuant());
			cmd.setDouble(3, p.getPrezzo());
			cmd.setInt(4, p.getPezzi());
			cmd.setString(5, p.getDesc());
			cmd.setString(6, p.getCategoria());
 
			cmd.setString(7, p.getNomeArticolo());
			 
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
	public synchronized void doUpdateImage(String image, String nomeProdotto) {
		 
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql = " UPDATE prodotto SET immagine=? WHERE nome_prodotto=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, image);
		
			cmd.setString(2, nomeProdotto);
			 
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

	
	public synchronized ArrayList<String> getCategorie(){
		ArrayList<String> categorie = new ArrayList<String>();

		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql="SELECT * FROM categoria";
			cmd = (PreparedStatement) conn.prepareStatement(sql);

			ResultSet res = cmd.executeQuery();
			while(res.next()){
				categorie.add(res.getString("nome_categoria"));
			}

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

		return categorie;
	}
	
	
	
	public synchronized String getCategorieSelected(String nomeProdotto){
		
		String categoria = "";
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql="SELECT categoria FROM prodotto WHERE nome_prodotto=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, nomeProdotto);

			ResultSet res = cmd.executeQuery();
			while(res.next()){
				categoria = res.getString("categoria");
			}

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

		return categoria;
	}
	
	
	
	
	
	public synchronized void addCategoria(String nuovaCategoria, String immagine){
		
		Connection conn = null;
		PreparedStatement cmd = null;
		
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql="INSERT INTO categoria(nome_categoria, immagine) VALUES(?,?)";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, nuovaCategoria);
			cmd.setString(2, immagine);
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



	public synchronized void doDelete(String nome_prodotto) {
		Connection conn = null;
		PreparedStatement cmd = null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			String sql="UPDATE prodotto SET eliminato=1 WHERE nome_prodotto=?";
			cmd = (PreparedStatement) conn.prepareStatement(sql);
			cmd.setString(1, nome_prodotto);
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
