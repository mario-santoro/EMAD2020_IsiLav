package Servlet;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import Bean.Prodotto;
import Bean.Utente;
import BeanDAO.ProdottoDAO;
import BeanDAO.UtenteDAO;

/**
 * Servlet implementation class ModificaProdotto
 */

@WebServlet("/ModificaProdotto")
public class ModificaProdotto extends HttpServlet {
	private static final long serialVersionUID = 1L;


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub



	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 
		String categoria = request.getParameter("categoria");
		String descBreve = request.getParameter("descrizioneBreve");
		double prezzo = Double.parseDouble( request.getParameter("prezzo"));
		int quant =  Integer.parseInt( request.getParameter("quantità"));
		int pezzi = Integer.parseInt(request.getParameter("pezzi"));
		String desc = request.getParameter("descrizione");
		
		Prodotto p = (Prodotto) request.getSession().getAttribute("prodotto");
		
		Prodotto p2 = new Prodotto(p.getNomeArticolo(),categoria,descBreve,prezzo,quant,pezzi,desc,false);


		ProdottoDAO pDAO = new ProdottoDAO();
	 
		pDAO.doUpdate(p2);
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("VisualizzaCatalogo");//pagina corrente
		requestDispatcher.forward(request, response);
	}

}
