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
 * Servlet implementation class ModificaCliente
 */
@WebServlet("/ModificaCliente")
public class ModificaCliente extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModificaCliente() {
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
		int premium=0;
		
		request.getSession().setAttribute("sizeClienti",clienti.size());
		String email= request.getParameter("email");
		double costoReso= Double.parseDouble(request.getParameter("costoReso"));
		int percentualeRitardo= Integer.parseInt(request.getParameter("percentualeRitardo"));
		
		String check = request.getParameter("checkPremium");
		
		if(check!=null ) {
			premium= Integer.parseInt(request.getParameter("premium"));
		}
		
		cl.modifyCustomer(email, percentualeRitardo, costoReso, premium);
		
		RequestDispatcher d= request.getRequestDispatcher("operazioneCompletata.jsp");
		d.forward(request, response);
	}

}
