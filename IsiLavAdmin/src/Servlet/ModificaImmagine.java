package Servlet;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
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
 * Servlet implementation class ModificaImmagine
 */
@MultipartConfig
@WebServlet("/ModificaImmagine")
public class ModificaImmagine extends HttpServlet {
	private static final long serialVersionUID = 1L;
       


	private static String getFilename(Part part) {
		for (String cd : part.getHeader("content-disposition").split(";")) {
			if (cd.trim().startsWith("filename")) {
				String filename = cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
				return filename.substring(filename.lastIndexOf('/') + 1).substring(filename.lastIndexOf('\\') + 1); // MSIE fix.
			}
		}

		return null;
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
	 
		ProdottoDAO pd = new ProdottoDAO();
	 
		response.setContentType("text/html");
		Prodotto p=(Prodotto)request.getSession().getAttribute("prodotto");
		
		String nomeFile=null;
		String applicationPath = request.getServletContext().getRealPath("");
		Part filePart = request.getPart("file");
		nomeFile = getFilename(filePart);
	 
		
		 if(!nomeFile.equals("")) {
			p.setPathImg(nomeFile);
			//indirizzo della cartella dove salvare il file 
			/* se si vuole utilizzare un diverso indirizzo per salvarle, 
			 * inizializzare diversamente la viariabile applicationPath
			 */
			File uploads = new File(applicationPath+"/img",nomeFile); 

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
			pd.doUpdateImage("https://isilav.azurewebsites.net/img/"+nomeFile, p.getNomeArticolo());
	}
	
		
		p=pd.getProdotto(p.getNomeArticolo());
		request.getSession().setAttribute("prodotto",p);
		RequestDispatcher disp=request.getRequestDispatcher("modificaProdotto.jsp");
		disp.forward(request, response);
	
	}

}
