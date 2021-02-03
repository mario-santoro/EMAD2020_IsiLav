package Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Bean.Cliente;
import Bean.Fermata;
import Bean.Hub;
import Bean.Percorso;
import BeanDAO.ClienteDAO;
import BeanDAO.PercorsoDAO;
/**
 * Servlet implementation class InserimentoPercorso
 */
@WebServlet("/InserimentoPercorso")
public class InserimentoPercorso extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InserimentoPercorso() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ArrayList<Cliente> clienti=null;
		ClienteDAO cl=new ClienteDAO();
		clienti=cl.showRequestSignUp();
		String lun=request.getParameter("lunedì");
		String mar =request.getParameter("martedì");
		String mer =request.getParameter("mercoledì");
		String gio= request.getParameter("giovedì");
		String ven= request.getParameter("venerdì");
		String sab= request.getParameter("sabato");
		String dom=request.getParameter("domenica");
	 
		request.getSession().setAttribute("sizeClienti",clienti.size());
		int size=Integer.parseInt(request.getParameter("size"));		 
		ArrayList<Fermata> fermate= new ArrayList<Fermata>();
		Fermata f=null;
		Percorso p= new Percorso();
		String nome_percorso=request.getParameter("nome_percorso");
		 

		boolean flag=false;
		Hub h= null;
		for(int i=0; i<size; i++) {
			String checked=request.getParameter("check"+i);

			if(checked!=null) {
				System.out.println("entro");
				f= new Fermata();
				h= new Hub();
				f.setMinuti(Integer.parseInt(request.getParameter("minuti"+i)));
				f.setOre(Integer.parseInt(request.getParameter("ore"+i)));				
				h.setVia(request.getParameter("via"+i));		
				f.setHub(h);
				fermate.add(f);
				if(lun!=null||mar!=null||mer!=null||gio!=null||ven!=null||sab!=null||dom!=null) {
					flag = true;	
				}
			}			
		}
		if(flag==false) {
			//non ha selezionato hub per il percorso
			request.getSession().setAttribute("denied", true);
			ArrayList<Hub> hubs=(ArrayList<Hub>)request.getSession().getAttribute("hubs");
			request.getSession().setAttribute("hubs", hubs);
			RequestDispatcher requestDispatcher= request.getRequestDispatcher("creaPercorso.jsp");
			requestDispatcher.include(request, response);
		}else {
			//metodo per riordinare le fermate in base all'orario e i minuti da fare
		
			p.setFermate(fermate);
			p.setNome(nome_percorso);
		
			ArrayList<Boolean> giorni= new ArrayList<Boolean>();
			if(lun!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(mar!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(mer!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(gio!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(ven!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(sab!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			if(dom!=null) {
				giorni.add(true);
			}else {
				giorni.add(false);
			}
			p.setGiorni(giorni);
			PercorsoDAO pd=new PercorsoDAO();
			pd.insertPercorso(p);
			RequestDispatcher requestDispatcher= request.getRequestDispatcher("operazioneCompletata.jsp");
			requestDispatcher.forward(request, response);
		}
	}

}
