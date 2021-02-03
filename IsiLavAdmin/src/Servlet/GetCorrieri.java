package Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BeanDAO.UtenteDAO;

/**
 * Servlet implementation class GetCorrieri
 */
@WebServlet("/GetCorrieri")
public class GetCorrieri extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetCorrieri() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UtenteDAO ud= new UtenteDAO();
		String data= request.getParameter("data");
		ArrayList<String> corrieri=ud.showCorrieri(data);
		response.getWriter().append("[");
		int i=0;		
		for ( i = 0; i < corrieri.size(); i++) {
		
			if(i==corrieri.size()-1){

				response.getWriter().append("{\"corriere\":\""+corrieri.get(i)+"\"}");
			
				
			}else{
			response.getWriter().append("{\"nome\":\""+corrieri.get(i)+"\"},");
			}
			
		}
		response.getWriter().append("]");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
