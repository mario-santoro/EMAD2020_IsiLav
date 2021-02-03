package Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Bean.Utente;
import BeanDAO.UtenteDAO;

/**
 * Servlet implementation class CambioPassword
 */
@WebServlet("/CambioPassword")
public class CambioPassword extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CambioPassword() {
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
		// TODO Auto-generated method stub
		String email= request.getParameter("email");
		String password= request.getParameter("password");

		try{
			UtenteDAO ud = new UtenteDAO();
			ud.changePassword(email, password);

			RequestDispatcher requestDispatcher = request.getRequestDispatcher("opCompletataLogOut.jsp");//pagina corrente
			requestDispatcher.forward(request, response);
		}
		catch(Exception e)
		{  
			request.setAttribute("exception", e);

			RequestDispatcher requestDispatcher = request.getRequestDispatcher("aggiornaPassw.jsp"); //pagina exception
			requestDispatcher.forward(request, response);
		}

	}

}
