package Servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BeanDAO.ProdottoDAO;
import BeanDAO.UtenteDAO;

/**
 * Servlet implementation class EliminaProdotto
 */
@WebServlet("/EliminaProdotto")
public class EliminaProdotto extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EliminaProdotto() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String nome_prodotto= request.getParameter("nome_prodotto");
		
		
			ProdottoDAO p = new ProdottoDAO();
			p.doDelete(nome_prodotto);

			RequestDispatcher requestDispatcher = request.getRequestDispatcher("VisualizzaCatalogo");//pagina corrente
			requestDispatcher.forward(request, response);
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		
		
		
	}

}
