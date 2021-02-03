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
 * Servlet implementation class BollaAccopagnamento
 */
@WebServlet("/BollaAccompagnamento")
public class BollaAccompagnamento extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BollaAccompagnamento() {
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
		String email=request.getParameter("email");
		ClienteDAO cd= new ClienteDAO();
		Cliente c= cd.doRetrieveByEmail(email);
		request.getSession().setAttribute("cliente", c);
		RequestDispatcher requestDIspatcher= request.getRequestDispatcher("bollaAccompagnamento.jsp");
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
