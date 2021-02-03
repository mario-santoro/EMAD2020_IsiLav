package Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Bean.Cliente;
import Bean.Utente;
import BeanDAO.ClienteDAO;
import BeanDAO.UtenteDAO;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Login() {
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

		request.getSession().setAttribute("sizeClienti",clienti.size());
		String password=request.getParameter("password");
		String email=request.getParameter("email");



		UtenteDAO ubd = new UtenteDAO();				
		Utente ub = ubd.doRetrieveByKey(email, password);
		if (ub==null) {    // login e/o password sbagliati -> chiamo login form  con messaggio errore
			// il nome login.jsp non si vedrà nel browser
			request.getSession().setAttribute("denied", true);
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("index.jsp");//pagina corrente
			requestDispatcher.forward(request, response);
		}else {
			// l'utente è ammesso al sito: inserisco dati di login in cookies e do risposta
			/*
			Cookie emcookie = new Cookie("email", ub.getEmail());
			Cookie pswcookie = new Cookie("psw", ub.getPassword());
			response.addCookie(emcookie);
			response.addCookie(pswcookie);
			HttpSession s=request.getSession();
			s.setAttribute("userBean", ub);  // l'output ha bisogno di queste informazioni
			*/
			request.getSession().setAttribute("denied", false);
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("home.jsp");//pagina corrente
			requestDispatcher.forward(request, response);



		}
	}
}


