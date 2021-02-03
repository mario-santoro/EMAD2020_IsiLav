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
import BeanDAO.ClienteDAO;

/**
 * Servlet implementation class Iscrizioni
 */
@WebServlet("/Iscrizioni")
public class Iscrizioni extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Iscrizioni() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ArrayList<Cliente> c=null;
		ClienteDAO cl=new ClienteDAO();
		c=cl.showRequestSignUp();
		
		request.getSession().setAttribute("sizeClienti",c.size());
		ArrayList<Cliente> clienti=null;
		 
		clienti=cl.showRequestSignUp();

		request.getSession().setAttribute("clientiDaConfermare",clienti);
		RequestDispatcher d= request.getRequestDispatcher("iscrizioni.jsp");
		d.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
