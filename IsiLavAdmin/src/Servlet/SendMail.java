package Servlet;

import java.io.IOException;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
/**
 * Servlet implementation class SendMail
 */
@WebServlet("/SendMail")
public class SendMail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SendMail() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		    
		    
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  boolean debug = false;
		  String destinatario=request.getParameter("destinatario");
		  String subject="CAMBIO PASSWORD - ISILAV";
		  String message="Salve è arrivata una richiesta di cambio password dal sito Amministrativo di IsiLav, può cambiare la sua password cliccando sul link: mioIndirizzoExample/aggiornaPassw.jsp, altrimenti può ignorare questo messaggio";
		  // Impostazioni SMTP
		  Properties props = new Properties();
		  props.put("mail.smtp.host", "smtp.gmail.com");
		  props.put("mail.smtp.port", "587"); 
		  props.put("mail.smtp.auth", "true"); 
		  props.put("mail.smtp.starttls.enable", "true");
		  // istanzio un oggetto Session
		 Session session= Session.getInstance(props, new Authenticator() {
			 protected PasswordAuthentication getPasswordAuthentication() {
				 return new PasswordAuthentication("usernameExample", "passwwordExample"); 
				 
			 }
			 
			 
		 });
	 
		 
		  // creo l'oggetto Message partendo da Session
		  Message msg = new MimeMessage(session);

		    try {
		  // Definisco mittente
		  InternetAddress addressFrom = new InternetAddress("emailExample@gmail.com");
		  msg.setFrom(addressFrom);
		 
		  // Destinatari
		  InternetAddress[] addressTo = new InternetAddress[1]; 
		
				addressTo[0] = new InternetAddress(destinatario);
				 msg.setRecipients(Message.RecipientType.TO, addressTo);
		 
		  // Imposto il subject, il contenuto ed il content type (testo semplice)
		  msg.setSubject(subject);
		  msg.setContent(message, "text/plain");
		  
		  // Spedisco
		  Transport.send(msg);
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
		    RequestDispatcher dispatcher=request.getRequestDispatcher("opCompletataLogOut.jsp");
		    dispatcher.forward(request, response);
	}

}
