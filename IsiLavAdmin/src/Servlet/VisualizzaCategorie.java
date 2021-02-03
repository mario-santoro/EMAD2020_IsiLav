package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BeanDAO.ProdottoDAO;

/**
 * Servlet implementation class VisualizzaCategorie
 */
@WebServlet("/VisualizzaCategorie")
public class VisualizzaCategorie extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public VisualizzaCategorie() {
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
		doGet(request, response);

		ArrayList<String> categorie = new ArrayList<String>();

		PrintWriter out = response.getWriter();

		response.setContentType("text/html");

		ProdottoDAO p = new ProdottoDAO();

		categorie = p.getCategorie();

		String nomeProdotto = request.getParameter("prodotto");

		for(String x : categorie) {
			
			if(nomeProdotto!=null) {
				
				String cat = p.getCategorieSelected(nomeProdotto);
				
				if(cat.equals(x)) {
					out.print(
							"<option value='"+x+"' selected>"+x+"</option>"
							);
				}else {
					out.print(
							"<option value='"+x+"'>"+x+"</option>"
							);
				}
				
			}else {

				out.print(
						"<option value='"+x+"'>"+x+"</option>"
						);

			}
		}


	}

}
