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
import Bean.Prodotto;
import BeanDAO.ClienteDAO;
import BeanDAO.ProdottoDAO;

/**
 * Servlet implementation class VisualizzaProdotti
 */
@WebServlet("/VisualizzaCatalogo")
public class VisualizzaCatalogo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VisualizzaCatalogo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ArrayList<Cliente> clienti=null;
		ClienteDAO cl=new ClienteDAO();
		clienti=cl.showRequestSignUp();
		
		request.getSession().setAttribute("sizeClienti",clienti.size());
		
		ProdottoDAO pDAO = new ProdottoDAO();
		ArrayList<Prodotto> prodotti = pDAO.getProdotti();
		request.getSession().setAttribute("prodotti", prodotti);
		
		RequestDispatcher disp = request.getRequestDispatcher("gestioneCatalogo.jsp");
		disp.forward(request, response);	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		
	}

}
