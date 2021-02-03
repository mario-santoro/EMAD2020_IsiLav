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
import Bean.Operazione;
import BeanDAO.ClienteDAO;
import BeanDAO.OperazioneDAO;

/**
 * Servlet implementation class DettaglioOrRes
 */
@WebServlet("/DettaglioOrRes")
public class DettaglioOrRes extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DettaglioOrRes() {
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
		
		String attivita= request.getParameter("attivita");
		String nome=request.getParameter("nome");
		Cliente c= new Cliente();
		c.setNominativo(nome);
		c.setNomeAttivita(attivita);
		request.getSession().setAttribute("cliente", c);
	
		int id_op= Integer.parseInt(request.getParameter("idOp"));	
		OperazioneDAO op=new OperazioneDAO();
		Operazione o= op.dettaglioOperazione(id_op);
		request.getSession().setAttribute("operazione",o);
		
		if(o.getReso()!=null) {
			request.getSession().setAttribute("id_reso",o.getReso().getId_reso());
		}
		
		RequestDispatcher dispatcher= request.getRequestDispatcher("dettaglioOrRes.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
