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
import Bean.Percorso;
import BeanDAO.ClienteDAO;
import BeanDAO.PercorsoDAO;

/**
 * Servlet implementation class VisualizzaPercorsi
 */
@WebServlet("/VisualizzaPercorsi")
public class VisualizzaPercorsi extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VisualizzaPercorsi() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//--------------Notifica richieste iscrizioni
		ArrayList<Cliente> clienti=null;
		ClienteDAO cl=new ClienteDAO();
		clienti=cl.showRequestSignUp();
		request.getSession().setAttribute("sizeClienti",clienti.size());
		//-----------------
	
		PercorsoDAO p= new PercorsoDAO();
		//parametri cambio giorno----------
		String data= request.getParameter("data");

		//-----------------
		
		
		//settaggio parametri del giorno corrente
		GregorianCalendar cal= new GregorianCalendar();
		int giorno = cal.get(Calendar.DAY_OF_MONTH);
		String mese =""+ cal.get(Calendar.MONTH)+1;			
		int anno = cal.get(Calendar.YEAR);	
		int i = cal.get(Calendar.DAY_OF_WEEK);
		 
		//-------------
		
		if(request.getSession().getAttribute("data")!=null) {
			
			request.getSession().setAttribute("data", anno+"-"+mese+"-"+giorno);
		}
		
		
		ArrayList<Percorso> percorsi=null;
		if(data!=null) {
	 
			GregorianCalendar cal2= new GregorianCalendar(Integer.parseInt(data.substring(0,4)),Integer.parseInt(data.substring(5,7)),Integer.parseInt(data.substring(8,10)));
			int j=cal2.get(Calendar.DAY_OF_WEEK);
			System.out.println("giorno settato: "+j);
			if(j == 2){
				percorsi=p.showPercorsi("lunedì");     
		    } else if (j==3){
		    	percorsi=p.showPercorsi("martedì");     
		    } else if (j==4){
		    	percorsi=p.showPercorsi("mercoledì");     
		    } else if (j==5){
		    	percorsi=p.showPercorsi("giovedì");     
		    } else if (j==6){
		    	percorsi=p.showPercorsi("venerdì");     
		    } else if (j==7){
		    	percorsi=p.showPercorsi("sabato");     
		    } else if (j==1){
		    	percorsi=p.showPercorsi("domenica");     
		    }
		
			request.getSession().setAttribute("data",data);
		}else {
								
			if(i == 2){
				percorsi=p.showPercorsi("lunedì");     
		    } else if (i==3){
		    	percorsi=p.showPercorsi("martedì");     
		    } else if (i==4){
		    	percorsi=p.showPercorsi("mercoledì");     
		    } else if (i==5){
		    	percorsi=p.showPercorsi("giovedì");     
		    } else if (i==6){
		    	percorsi=p.showPercorsi("venerdì");     
		    } else if (i==7){
		    	percorsi=p.showPercorsi("sabato");     
		    } else if (i==1){
		    	percorsi=p.showPercorsi("domenica");     
		    }

		}
		
		request.getSession().setAttribute("percorsi", percorsi);
		RequestDispatcher requestDispatcher= request.getRequestDispatcher("visualizzaPercorsi.jsp");
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
