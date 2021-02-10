package Servlet;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import Bean.Prodotto;
import BeanDAO.ProdottoDAO;

/**
 * Servlet implementation class AggiungiCategoria
 */
@MultipartConfig
@WebServlet("/AggiungiCategoria")
public class AggiungiCategoria extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AggiungiCategoria() {
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


		ProdottoDAO p = new ProdottoDAO();
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");

		String nuovaCategoria =  request.getParameter("nuovaCategoria");

		//in filePart carichiamo il file inviato dal form
		String applicationPath = request.getServletContext().getRealPath("");

		Part filePart =request.getPart("fileCat");
		//salviamo in nomeFIle in nome del file
		String nomeFile = getFilename(filePart);
		//indirizzo della cartella dove salvare il file 
		/* se si vuole utilizzare un diverso indirizzo per salvarle, 
		 * inizializzare diversamente la viariabile applicationPath
		 */
		File uploads = new File(applicationPath+"/img",nomeFile); 
		// File uploads = new File("../1",nomeFile);
		//carichiamo il file in stream
		InputStream is = filePart.getInputStream();
		//parte scrittura file
		FileOutputStream fos = new FileOutputStream(uploads);
		BufferedOutputStream bos= new BufferedOutputStream(fos);
		int read = -1;

		while ((read = is.read()) != -1) {
			bos.write(read);
		}
		bos.flush();
		bos.close();
		is.close();
		
		
		p.addCategoria(nuovaCategoria,"https://isilav.azurewebsites.net/img/"+nomeFile);

		ArrayList<String> categorie = p.getCategorie();
		
		
		out.print("<select name=\"categoria\" class=\"form-control\" id=\"categoria\">");
		for(String x : categorie) {
			if(x.equals(nuovaCategoria)) {
				
				out.print(
						"<option value='"+x+"' selected>"+x+"</option>"
						);
				
			}else {
			
			out.print(
					"<option value='"+x+"'>"+x+"</option>"
					);
			}
		} 
		out.print("</select>");
	}
	
	
	
	
	private static String getFilename(Part part) {
		for (String cd : part.getHeader("content-disposition").split(";")) {
			if (cd.trim().startsWith("filename")) {
				String filename = cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
				return filename.substring(filename.lastIndexOf('/') + 1).substring(filename.lastIndexOf('\\') + 1); // MSIE fix.
			}
		}

		return null;
	}
}
