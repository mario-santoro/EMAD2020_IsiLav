package BeanDAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import Bean.Cliente;
import Bean.Fermata;
import Bean.Hub;
import Bean.Movimenti;
import Bean.Operazione;
import Bean.Ordine;
import Bean.Pagamenti;
import Bean.Percorso;
import Bean.ProdottiOrdinati;
import Bean.Prodotto;
import Bean.Reso;
import Bean.Stock;

public class OperazioneDAO {
	public synchronized ArrayList<Percorso> prenotazioni(String data, String giorno) { 
		ArrayList<Percorso> percorsi= new ArrayList<Percorso>();
		ArrayList<Operazione> operazioni= new ArrayList<Operazione>();
		Connection conn = null;
		PreparedStatement ps = null;
		PreparedStatement ps2 = null;

		Percorso p= new Percorso();
		Operazione o=null;
		Fermata f=null;
		Cliente c=null;

		try {
			operazioni= new ArrayList<Operazione>();
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
				p= new Percorso();
				p.setNome(res.getString("nome"));
				ps2 = (PreparedStatement) conn.prepareStatement("SELECT operazione.id_operazione, operazione.id_ordine, operazione.id_reso, cliente.email, cliente.nomeAttivita, utente.nominativo, fermata.via, fermata.ore, fermata.minuti FROM `operazione` join fermata on operazione.via=fermata.via and operazione.id_percorso= fermata.id_percorso join cliente on operazione.email=cliente.email join utente on cliente.email=utente.email where operazione.id_percorso= ? and data_scelta=? order by fermata.ore, fermata.minuti ASC"); 
				ps2.setInt(1, res.getInt("id_percorso"));

				ps2.setString(2, data);
				ResultSet res2 = ps2.executeQuery();

				while (res2.next()) {

					o=new Operazione();
					c=new Cliente();
					c.setEmail(res2.getString("email"));
					c.setNomeAttivita(res2.getString("nomeAttivita"));
					c.setNominativo(res2.getString("nominativo"));
					o.setCliente(c);
					o.setId_operazione(res2.getInt("id_operazione"));
					o.setVia(res2.getString("via"));
					f= new Fermata();
					f.setOre(res2.getInt("ore"));
					f.setMinuti(res2.getInt("minuti"));						
					o.setFermata(f);
					if(res2.getInt("id_ordine")!=0) {

						o.setOrdine(new Ordine());
					}
					if(res2.getInt("id_reso")!=0) {

						o.setReso(new Reso());
					}

					operazioni.add(o);
				}

				p.setOperazioni(operazioni);
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

	public synchronized Operazione getbollaAccompagnamento(int id_operazione) { 

		Connection conn = null;
		PreparedStatement ps = null; 

		Operazione o= new Operazione();
		o.setId_operazione(id_operazione);
		Ordine or= new Ordine();
		Fermata f= new Fermata();
		Hub h= new Hub();
		ArrayList<Prodotto> noleggiati= new ArrayList<Prodotto>();

		Prodotto p=null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT prodotto.descrizione_breve, operazione.via, hub.città, hub.cap, operazione.data_scelta, "
					+ "noleggiato.nome_prodotto as 'prodotto_noleggiato', noleggiato.quantità as 'quantita_noleggiato' FROM `operazione` join ordine on "
					+ "operazione.id_ordine=ordine.id_ordine join noleggiato on ordine.id_ordine= noleggiato.id_ordine join fermata on operazione.via= fermata.via "
					+ "and operazione.id_percorso=fermata.id_percorso join hub on fermata.via=hub.via join prodotto on noleggiato.nome_prodotto=prodotto.nome_prodotto "
					+ "where operazione.id_operazione=?");
			ps.setInt(1,id_operazione);
			ResultSet res = ps.executeQuery();

			while (res.next()) {
				h.setCap(res.getString("cap"));
				h.setCitta(res.getString("città"));
				h.setVia(res.getString("via"));
				f.setHub(h);
				o.setFermata(f);
				p=new Prodotto();
				o.setDataScelta(res.getString("data_scelta"));		 			
				p.setDescBreve(res.getString("descrizione_breve"));
				p.setNomeArticolo(res.getString("prodotto_noleggiato"));
				p.setQuant(res.getInt("quantita_noleggiato"));
				noleggiati.add(p);

			}

			or.setNoleggiati(noleggiati);				
			o.setOrdine(or);


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
		return o;
	}

	public synchronized Operazione dettaglioOperazione(int id_operazione) { 

		Connection conn = null;
		PreparedStatement ps = null; 

		Operazione o= new Operazione();
		Ordine or= new Ordine();
		Reso r= new Reso();
		ArrayList<Prodotto> noleggiati= new ArrayList<Prodotto>();
		ArrayList<Prodotto> restituiti= new ArrayList<Prodotto>();
		Prodotto p=null;
		try {
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT restituito.id_reso as 'id_restituito', restituito.confermato as 'confermato', restituito.nome_prodotto as 'prodotto_restituito', restituito.quantità as 'quantita_restituito', noleggiato.nome_prodotto as 'prodotto_noleggiato', noleggiato.quantità as 'quantita_noleggiato'   FROM `operazione` left join ordine on operazione.id_ordine=ordine.id_ordine left join reso on operazione.id_reso=reso.id_reso left join noleggiato on ordine.id_ordine= noleggiato.id_ordine left join restituito on reso.id_reso= restituito.id_reso where operazione.id_operazione=?");
			ps.setInt(1,id_operazione);
			ResultSet res = ps.executeQuery();

			while (res.next()) {

				if(res.getString("prodotto_restituito")!=null) {								
					p=new Prodotto();
					p.setNomeArticolo(res.getString("prodotto_restituito"));
					p.setQuant(res.getInt("quantita_restituito"));
					r.setId_reso(res.getInt("id_restituito"));
					r.setConfermato(res.getBoolean("confermato"));
					restituiti.add(p);														
				}
				if(res.getString("prodotto_noleggiato")!=null) {

					p=new Prodotto();
					p.setNomeArticolo(res.getString("prodotto_noleggiato"));
					p.setQuant(res.getInt("quantita_noleggiato"));
					noleggiati.add(p);
				}					
			}
			if(restituiti.size()!=0) {

				r.setRestituiti(restituiti);
				o.setReso(r);	
			}
			if(noleggiati.size()!=0) {
				or.setNoleggiati(noleggiati);				
				o.setOrdine(or);
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
		return o;
	}

	public synchronized boolean Restituzione(String prodotto, int quant, int id_reso) { 

		Connection conn = null;
		PreparedStatement ps = null; 
		PreparedStatement ps2 = null; 
		int quantIniziale=quant;
		try {

			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("select id_noleggio, quantità_rimasta from noleggiato join ordine on noleggiato.id_ordine=ordine.id_ordine where  noleggiato.quantità_rimasta>0 and noleggiato.nome_prodotto=? order by ordine.data_scadenza asc");
			ps.setString(1,prodotto);
			ResultSet res = ps.executeQuery();

			while (res.next()) {

				if(res.getInt("quantità_rimasta")>=quant) {
					String sql = " UPDATE noleggiato SET quantità_rimasta=? where id_noleggio=?";
					ps2 = (PreparedStatement) conn.prepareStatement(sql);
					ps2.setInt(1, res.getInt("quantità_rimasta")-quant);
					ps2.setInt(2, res.getInt("id_noleggio"));
					ps2.executeUpdate();


					String sql2 = " UPDATE restituito SET confermato=?, quantità=? where id_reso=?";
					ps2 = (PreparedStatement) conn.prepareStatement(sql2);
					ps2.setBoolean(1, true);
					ps2.setInt(2, quantIniziale);
					ps2.setInt(3, id_reso);
					ps2.executeUpdate();					
					return true;
				}else {
					String sql = "UPDATE noleggiato SET quantità_rimasta=? where id_noleggio=?";
					ps2 = (PreparedStatement) conn.prepareStatement(sql);
					ps2.setInt(1, 0);
					ps2.setInt(2, res.getInt("id_noleggio"));
					ps2.executeUpdate();

					quant=quant- res.getInt("quantità_rimasta");

				}

			}
			return false;

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
		return false;
	}

	public synchronized ArrayList<Stock> GetStock(String email) {
		Connection conn = null;
		PreparedStatement ps = null; 
		PreparedStatement ps2 = null;
		ArrayList<Stock> stocks = new ArrayList<Stock>();

		try {
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT SUM(noleggiato.quantità_rimasta) AS quantità_stock, noleggiato.nome_prodotto "
					+ "FROM noleggiato JOIN ordine ON noleggiato.id_ordine = ordine.id_ordine JOIN operazione ON ordine.id_ordine = operazione.id_ordine "
					+ "WHERE operazione.email=? GROUP BY noleggiato.nome_prodotto ");

			ps.setString(1,email);
			ResultSet res = ps.executeQuery();

			while (res.next()) {
				ArrayList<ProdottiOrdinati> po = new ArrayList<ProdottiOrdinati>();
				ps2 = (PreparedStatement) conn.prepareStatement("SELECT ordine.data_scadenza, noleggiato.quantità_rimasta FROM noleggiato "
						+ "JOIN ordine ON noleggiato.id_ordine = ordine.id_ordine JOIN operazione ON ordine.id_ordine = operazione.id_ordine WHERE operazione.email=? AND noleggiato.quantità_rimasta>0 "
						+ "AND noleggiato.nome_prodotto=?");
				ps2.setString(1,email);
				ps2.setString(2,res.getString("noleggiato.nome_prodotto"));
				ResultSet res2 = ps2.executeQuery();
				while (res2.next()) {
					GregorianCalendar cal= new GregorianCalendar();
					int giorno = cal.get(Calendar.DAY_OF_MONTH);
					int mese =cal.get(Calendar.MONTH);			
					int anno = cal.get(Calendar.YEAR);	

					GregorianCalendar dallaData = new GregorianCalendar(anno,mese,giorno);
					String data_sc=res2.getString("ordine.data_scadenza");
					GregorianCalendar allaData = new GregorianCalendar(Integer.parseInt(data_sc.substring(0,4)),Integer.parseInt(data_sc.substring(5,7))-1,Integer.parseInt(data_sc.substring(8,10)));

					long millisElapsed;

					millisElapsed = (allaData.getTime()).getTime() - (dallaData.getTime()).getTime();

					// conversione in giorni con la divisione intera
					int dayElapsed = (int) (millisElapsed / (24*60* 60 * 1000));
					if(dayElapsed<=3) {
						po.add(new ProdottiOrdinati(res2.getString("ordine.data_scadenza"),res2.getInt("noleggiato.quantità_rimasta"),true));
					}else {
						po.add(new ProdottiOrdinati(res2.getString("ordine.data_scadenza"),res2.getInt("noleggiato.quantità_rimasta"),false));
					}
				}

				stocks.add(new Stock(res.getString("noleggiato.nome_prodotto"),res.getInt("quantità_stock"),po));

			}

		}catch (SQLException e) {
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

		return stocks;

	}



	public synchronized ArrayList<Pagamenti> GetPagamenti(String email) {
		Connection conn = null;
		PreparedStatement ps = null; 	
		ArrayList<Pagamenti> pagamenti = new ArrayList<Pagamenti>();

		try {
			conn = DriverManagerConnectionPool.getConnection();
			ps = (PreparedStatement) conn.prepareStatement("SELECT \"reso\" as Tipe, operazione.data_operazione as DATAo, operazione.id_operazione, "
					+ "reso.costoReso as 'costo' FROM operazione JOIN reso ON operazione.id_reso=reso.id_reso WHERE operazione.email=? "
					+ "UNION SELECT \"ordine\" as Tipe, operazione.data_operazione as DATAo, operazione.id_operazione, ordine.totale as 'costo' FROM operazione "
					+ "JOIN ordine ON operazione.id_ordine=ordine.id_ordine WHERE operazione.email=? UNION SELECT \"ritardo\" as Tipe, "
					+ "addebito_ritardo.data_ritardo as DATAo, operazione.id_operazione, addebito_ritardo.importo_ritardo as 'costo' FROM operazione JOIN ordine"
					+ " ON operazione.id_ordine = ordine.id_ordine JOIN noleggiato ON ordine.id_ordine = noleggiato.id_ordine JOIN addebito_ritardo on "
					+ "noleggiato.id_noleggio = addebito_ritardo.id_noleggio WHERE operazione.email=? ORDER by DATAo desc");
			ps.setString(1,email);
			ps.setString(2,email);
			ps.setString(3,email);
			ResultSet res = ps.executeQuery();

			while (res.next()) {
				 
				 
				double d=   res.getDouble("costo") ;
				 float p= (float) (Math.round( d * Math.pow( 10, 2 ) )/Math.pow( 10, 2 ));
				System.out.println(p);
				pagamenti.add(new Pagamenti(res.getString("DATAo"),res.getInt("id_operazione"),res.getString("Tipe"),res.getDouble("costo")));					
			}	  
			DataItaPag(pagamenti);
		}catch (SQLException e) {
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

		return pagamenti;

	}


	private void DataItaMov(ArrayList<Movimenti> o){


		for(int i=0;i<o.size();i++) {
			String d= o.get(i).getData().substring(8,10)+"-"+o.get(i).getData().substring(5,7)+"-"+o.get(i).getData().substring(0,4);
			o.get(i).setData(d);

		}		 
	}

	private void DataItaPag(ArrayList<Pagamenti> o){


		for(int i=0;i<o.size();i++) {
			String d= o.get(i).getData().substring(8,10)+"-"+o.get(i).getData().substring(5,7)+"-"+o.get(i).getData().substring(0,4);
			o.get(i).setData(d);

		}		 
	}

	public synchronized ArrayList<Movimenti> GetMovimenti(String email) {

		Connection conn = null;
		PreparedStatement ps = null; 
		PreparedStatement ps2 = null; 


		ArrayList<Movimenti> mov = new ArrayList<Movimenti>();

		try {
			conn = DriverManagerConnectionPool.getConnection();

			ps= (PreparedStatement) conn.prepareStatement("SELECT noleggiato.nome_prodotto, noleggiato.quantità, operazione.data_scelta, operazione.id_ordine FROM operazione "
					+ "JOIN ordine ON operazione.id_ordine = ordine.id_ordine JOIN noleggiato ON ordine.id_ordine = noleggiato.id_ordine WHERE operazione.email=?"
					+ " ORDER BY operazione.data_operazione DESC");
			ps.setString(1,email);
			ResultSet res = ps.executeQuery();

			while (res.next()) {
				int quantRest=0;
				ps2= (PreparedStatement) conn.prepareStatement("SELECT restituito.quantità FROM operazione JOIN reso on operazione.id_reso = reso.id_reso JOIN restituito "
						+ "ON reso.id_reso = restituito.id_reso WHERE operazione.email=? AND operazione.id_ordine=?");
				ps2.setString(1,email);
				ps2.setInt(2,res.getInt("operazione.id_ordine"));
				ResultSet res2 = ps2.executeQuery();

				while (res2.next()) {
					quantRest=res2.getInt("restituito.quantità");
				}

				mov.add(new Movimenti(res.getString("noleggiato.nome_prodotto"),res.getInt("noleggiato.quantità"),quantRest,res.getString("operazione.data_scelta")));

			}

			DataItaMov(mov);
		}catch (SQLException e) {
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

		return mov;

	}
}
