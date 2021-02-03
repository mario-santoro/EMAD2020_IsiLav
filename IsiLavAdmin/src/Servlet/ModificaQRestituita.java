package Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BeanDAO.OperazioneDAO;

/**
 * Servlet implementation class ModificaQRestituita
 */
@WebServlet("/ModificaQRestituita")
public class ModificaQRestituita extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModificaQRestituita() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		OperazioneDAO op=new OperazioneDAO();
		int quant=Integer.parseInt(request.getParameter("quant"));
		System.out.println("quantità nella servlet: "+quant);
		String prodotto= request.getParameter("prodotto");
		int id_reso=(Integer)request.getSession().getAttribute("id_reso");
		boolean flag= op.Restituzione(prodotto, quant, id_reso);
	
			//mandare segnale di errore (inserita una quantità di prodotti superiore a quella noleggiata

					response.getWriter().append("[{\"errore\":\""+flag+"\"}]");
 
	
	 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
