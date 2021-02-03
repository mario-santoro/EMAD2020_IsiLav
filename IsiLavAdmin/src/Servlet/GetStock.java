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
import Bean.Movimenti;
import Bean.Stock;
import BeanDAO.ClienteDAO;
import BeanDAO.OperazioneDAO;

/**
 * Servlet implementation class GetStock
 */
@WebServlet("/GetStock")
public class GetStock extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetStock() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		/*************************PER SIDEBAR**************************/
		ArrayList<Cliente> clienti=null;
		ClienteDAO cl=new ClienteDAO();
		clienti=cl.showRequestSignUp();
		request.getSession().setAttribute("sizeClienti",clienti.size());
		/**************************************************************/
		
		ArrayList<Stock> stocks = new ArrayList<Stock>();
		OperazioneDAO op = new OperazioneDAO();
		stocks = op.GetStock(request.getParameter("email"));
		String nominativo = request.getParameter("nominativo");
		String nomeAtt = request.getParameter("nomeAtt");
		request.getSession().setAttribute("stocks", stocks);
		request.getSession().setAttribute("nominativo", nominativo);
		request.getSession().setAttribute("nomeAtt", nomeAtt);
		
		
		RequestDispatcher requestDIspatcher= request.getRequestDispatcher("stock.jsp");
		requestDIspatcher.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
