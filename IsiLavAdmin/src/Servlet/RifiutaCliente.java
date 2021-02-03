package Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Bean.Utente;
import BeanDAO.ClienteDAO;

/**
 * Servlet implementation class RifiutaCliente
 */
@WebServlet("/RifiutaCliente")
public class RifiutaCliente extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RifiutaCliente() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email= request.getParameter("email");
		ClienteDAO cl= new ClienteDAO();
		cl.rejectCustomer(email);
		int size= (Integer)request.getSession().getAttribute("sizeClienti");	 
		request.getSession().setAttribute("sizeClienti", size-1);		 
		RequestDispatcher d= request.getRequestDispatcher("Iscrizioni");
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
