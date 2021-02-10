package Servlet;

import java.io.IOException;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
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
import BeanDAO.ProdottoDAO;

/**
 * Servlet implementation class AggiugniProdotto
 */
@MultipartConfig
@WebServlet("/AggiungiProdotto")


public class AggiungiProdotto extends HttpServlet {
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
	 

		String nomeArticolo = request.getParameter("articolo");
		String categoria = request.getParameter("categoria");
		String descBreve = request.getParameter("descrizioneBreve");
		String desc = request.getParameter("descrizione");
		
		int quant =  Integer.parseInt(request.getParameter("quant"));
		int pezzi = Integer.parseInt(request.getParameter("pez"));
		double prezzo = Double.parseDouble( request.getParameter("prez"));
		
		//in filePart carichiamo il file inviato dal form
    	String applicationPath = request.getServletContext().getRealPath("");
    	  
         Part filePart =request.getPart("file");
         
       
    	 
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

		Prodotto p = new Prodotto(nomeArticolo,categoria,descBreve,prezzo,"https://isilav.azurewebsites.net/img/"+nomeFile,quant,pezzi,desc,false);

	
			ProdottoDAO pDAO = new ProdottoDAO();
			Boolean b = pDAO.doSave(p); 
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("VisualizzaCatalogo");//pagina corrente
			requestDispatcher.forward(request, response);

	
		

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
