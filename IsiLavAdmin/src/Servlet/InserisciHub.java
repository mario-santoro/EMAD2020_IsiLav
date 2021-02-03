package Servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.URL;
import java.net.URLConnection;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 

import Bean.Hub;
import BeanDAO.HubDAO;


 

/**
 * Servlet implementation class InserisciHub
 */
@WebServlet("/InserisciHub")
public class InserisciHub extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InserisciHub() {
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
		String citta=request.getParameter("citta");
		String via= request.getParameter("via");
		String cap= request.getParameter("cap");
		URL url = new URL("https://nominatim.openstreetmap.org/search?q="+via+","+citta+", "+cap+"&format=json&polygon=1&addressdetails=1");
	       

	        //make connection
	        URLConnection urlc = url.openConnection();

	        //use post mode
	        urlc.setDoOutput(true);
	        urlc.setAllowUserInteraction(false);

	        //send query
	        PrintStream ps = new PrintStream(urlc.getOutputStream());
	        ps.close();

	        //get result
	        BufferedReader br = new BufferedReader(new InputStreamReader(urlc
	            .getInputStream()));
	      
	        String l = null;
	        String lat="", lon ="";
	       String[] coordinate=null;
	       String[] coordinate2=null;
	        while ((l=br.readLine())!=null) {
	         
	            coordinate=l.split("lat\":\"");
	            l=coordinate[1];
	            coordinate2=l.split("\",\"lon\":\"");
	            l= coordinate2[1];
	            coordinate=l.split("\"");
	        }
	        lon=coordinate2[0];
	        lat=coordinate[0];	     
	   
	        br.close();

	    Hub h=new Hub(citta, via,cap, lat, lon);
		HubDAO hd=new HubDAO();
		hd.insertHub(h);
		RequestDispatcher requestDispatcher= request.getRequestDispatcher("VisualizzaHub"); 
		requestDispatcher.forward(request, response);
		
	}
	
}
