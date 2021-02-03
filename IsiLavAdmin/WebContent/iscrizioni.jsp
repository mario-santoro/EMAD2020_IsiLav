
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Cliente"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Richieste di iscrizione</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
	integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
	crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/body.css">
	<script type="text/javascript">
 
	            $(document).ready(function() {
	            	var recupero_id;
	            	  $('.reject').click(function(){
	        		 	  recupero_id = $(this).attr("id");	
	        		 	$('#cliente').text(recupero_id);
		        		  $('#demo').show("800");
		        		  
	            	  });
	            	  
	            	  $('#no').click(function(){
		        		 	 
			        		  $('#demo').hide("800");
		            	  });
	            	  
	            	  $('#si').click(function(){
	             		 	 
	            		  window.location = "./RifiutaCliente?email="+recupero_id;
		            	  });
	            	});

	         
     
			
	</script>

</head>
<body>

	<div class="wrapper">
<%int sizeClienti=(Integer)session.getAttribute("sizeClienti");%>
		<!-- Sidebar -->
		<nav id="sidebar">
			<div class="sidebar-header">
				<div class="row">
					<img src="img/icona-bianca.png"
						style="width: 38px; height: 38px; float: left;" />
					<h2 style="margin-left: 5px;">IsiLav</h2>
				</div>

			</div>
			<div class="row">
				<div class="col-sm-12">
					<a href="Iscrizioni"> <i class="fas fa-user-plus"
						style="margin-right: 10px"></i> Richieste di iscrizione 
						<%if(sizeClienti==0){ }else{ %>
						<span  class="badge badge-danger"><%=sizeClienti %></span>
						<%} %>
					</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaClienti"><i class="far fa-address-book"
						style="margin-right: 20px"></i> Gestione clienti</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaElencoOR"><i class="fas fa-list-ul"
						style="margin-right: 20px"></i>Elenco ordini e resi</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaHub"><i class="fas fa-map-marker-alt"
						style="margin-right: 20px"></i>Gestione hub</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaPercorsi"><i class="fas fa-truck" style="margin-right: 20px"></i>Visualizza
						percorsi</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaCatalogo"><i class="fas fa-edit" style="margin-right: 20px"></i>Gestione
						catalogo</a>
				</div>

				<div class="col-sm-12"
					style="position: fixed; bottom: 0; padding-bottom: 20px; max-width: 330px;">
					<a href="Logout"><i class="fas fa-sign-out-alt"
						style="margin-right: 20px"></i>Logout</a>
				</div>
			</div>
		</nav>
	<%ArrayList<Cliente> clienti=(ArrayList<Cliente>)session.getAttribute("clientiDaConfermare");%>
		<div class="MyContainer">
			<h4>Richieste di iscrizione</h4>
			<table class="table">
				<thead>
					<tr>
						<th>Email</th>
						<th>Nome e Cognome</th>
						<th>Nome Attività</th>
						<th>Codice Fiscale</th>
						<th>P.IVA</th>
						<th>Telefono</th>
					</tr>
				</thead>
				<tbody>
				 <% if(clienti!=null){
				 for(int i=0;i<clienti.size();i++){%>
					<tr>
						<td><%=clienti.get(i).getEmail() %></td>
						<td><%=clienti.get(i).getNominativo() %></td>
						<td><%=clienti.get(i).getNomeAttivita() %></td>
						<td><%=clienti.get(i).getCodFiscale() %></td>
						<td><%=clienti.get(i).getpIVA() %></td>
						<td><%=clienti.get(i).getTelefono() %></td>
						<td><a href="ConfermaCliente?index=<%=clienti.get(i).getEmail() %>"> <i
								class="fas fa-check-circle"></i></a> 
								<a  class="reject" id="<%=clienti.get(i).getEmail() %>"> <i class="fas fa-times-circle"></i></a>
						<td>
					</tr>
					<%}} %>
					
				</tbody>
			</table>


			<div id="demo" class="collapse">
				<div class="alert alert-danger">
					<strong>Attenzione!</strong> Sei sicuro di rifiutare l'iscrizione
					per il cliente con email: <spam id="cliente"></spam>? <br>
					<button type="button" id="si" class="btn siNo">SI</button>
					<button  type="button" id="no"
						class="btn siNo">NO</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>