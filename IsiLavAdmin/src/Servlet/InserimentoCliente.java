package Servlet;

import java.io.IOException;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Bean.Cliente;
import BeanDAO.ClienteDAO;

/**
 * Servlet implementation class InserimentoCliente
 */
@WebServlet("/InserimentoCliente")
public class InserimentoCliente extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public InserimentoCliente() {
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

		double costoReso= Double.parseDouble(request.getParameter("costoReso"));
		int percentualeRitardo= Integer.parseInt(request.getParameter("percentualeRitardo"));
		int premium=0;
		String check = request.getParameter("checkPremium");	
		 
		if(check!=null) {
			 
				premium= Integer.parseInt(request.getParameter("premium"));
		}
			ClienteDAO cl=new ClienteDAO();
			Cliente c=  (Cliente) request.getSession().getAttribute("cliente");
			c.setAccettato(true);
			c.setPercentualeRitardo(percentualeRitardo);
			c.setCostoReso(costoReso);
			c.setPremium(premium);
			System.out.println("wewe");
			cl.customerConfirmation(c);
			mandaMail(c.getEmail(),c.getNominativo(),c.getNomeAttivita());
			RequestDispatcher d= request.getRequestDispatcher("operazioneCompletata.jsp");
			d.forward(request, response);
		 
	}


	private void mandaMail(String email, String nome, String attività) {

		String destinatario=email;//request.getParameter("destinatario");
		String subject="Iscrizione confermata - IsiLav";
		String message="Salve " + nome + ",\nCon questa mail, la informiamo che è stata "
				+ "confermata dal sito Amministrativo di IsiLav la sua iscrizione alla piattaforma.\n"
				+ "Da oggi con la sua attività ("+ attività +") potrà usufruire dei servizi offerti "
						+ "da SNB IsiLav s.r.l.\n\n Grazie per averci scelti.\n Cordiali Saluti.\n Il Team IsiLav.";
		// Impostazioni SMTP
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587"); 
		props.put("mail.smtp.auth", "true"); 
		props.put("mail.smtp.starttls.enable", "true");
		// istanzio un oggetto Session

		Session session= Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("usernameMittente@example", "passwordExample****");  
			}
		});

		// creo l'oggetto Message partendo da Session
		Message msg = new MimeMessage(session);

		try {
			// Definisco mittente
			InternetAddress addressFrom = new InternetAddress("usernameMittente@example");
			msg.setFrom(addressFrom);
			// Destinatari
			InternetAddress[] addressTo = new InternetAddress[1]; 
			addressTo[0] = new InternetAddress(destinatario);
			msg.setRecipients(Message.RecipientType.TO, addressTo);
			// Imposto il subject, il contenuto ed il content type (testo semplice)
			msg.setSubject(subject);
			msg.setContent(message, "text/plain");
			// Invio
			Transport.send(msg);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
