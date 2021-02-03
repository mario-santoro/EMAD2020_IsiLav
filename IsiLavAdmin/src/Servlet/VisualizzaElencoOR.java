package Servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Bean.Cliente;
import Bean.Operazione;
import Bean.Percorso;
import BeanDAO.ClienteDAO;
import BeanDAO.OperazioneDAO;
/**
 * Servlet implementation class VisualizzaElencoOR
 */
@WebServlet("/VisualizzaElencoOR")
public class VisualizzaElencoOR extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public VisualizzaElencoOR() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ArrayList<Cliente> clienti=null;
		ClienteDAO cl=new ClienteDAO();
		clienti=cl.showRequestSignUp();
		request.getSession().setAttribute("sizeClienti",clienti.size());
		OperazioneDAO od=new OperazioneDAO();
		String data= request.getParameter("data");
		//----------------

		GregorianCalendar cal= new GregorianCalendar();
		int giorno = cal.get(Calendar.DAY_OF_MONTH);
		String mese =""+ cal.get(Calendar.MONTH)+1;			
		int anno = cal.get(Calendar.YEAR);	
		int i = cal.get(Calendar.DAY_OF_WEEK);
		if(request.getSession().getAttribute("data")!=null) {

			request.getSession().setAttribute("data", anno+"-"+mese+"-"+giorno);
		}
		ArrayList<Percorso> prenotazioni= null;
		if(data!=null) {
			System.out.println(data);
			GregorianCalendar cal2= new GregorianCalendar(Integer.parseInt(data.substring(0,4)),Integer.parseInt(data.substring(5,7)),Integer.parseInt(data.substring(8,10)));
			int j=cal2.get(Calendar.DAY_OF_WEEK);
		System.out.println(j);
			if(j == 2){
				prenotazioni=od.prenotazioni(data, "lunedì");    
		    } else if (j==3){
		    	prenotazioni=od.prenotazioni(data, "martedì");   
		    } else if (j==4){
		    	prenotazioni=od.prenotazioni(data, "mercoledì");
		    } else if (j==5){
		    	prenotazioni=od.prenotazioni(data, "giovedì");     
		    } else if (j==6){
		    	prenotazioni=od.prenotazioni(data, "venerdì");
		    } else if (j==7){
		    	prenotazioni=od.prenotazioni(data, "sabato");    
		    } else if (j==1){
		    	prenotazioni=od.prenotazioni(data, "domenica"); 
		    }
		
			
			request.getSession().setAttribute("data", data);
		}else {

			if(i == 2){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "lunedì");  
			} else if (i==3){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "martedì");   
			} else if (i==4){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "mercoledì");    
			} else if (i==5){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "giovedì");  
			} else if (i==6){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "venerdì");   
			} else if (i==7){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "sabato");  
			} else if (i==1){
				prenotazioni=od.prenotazioni(anno+"-"+mese+"-"+giorno, "domenica");
			}		
		

		}

		request.getSession().setAttribute("prenotazioni", prenotazioni);
		RequestDispatcher requestDispatcher= request.getRequestDispatcher("elencoOrRes.jsp");
		requestDispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
