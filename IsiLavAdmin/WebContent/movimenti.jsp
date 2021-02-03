<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import=" Bean.Movimenti"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Movimenti</title>
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
						style="margin-right: 10px"></i> Richieste di iscrizione <%if(sizeClienti==0){ }else{ %>
						<span class="badge badge-danger"><%=sizeClienti %></span> <%} %>
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
					<a href="VisualizzaPercorsi"><i class="fas fa-truck"
						style="margin-right: 20px"></i>Visualizza percorsi</a>
				</div>
				<div class="col-sm-12">
					<a href="VisualizzaCatalogo"><i class="fas fa-edit"
						style="margin-right: 20px"></i>Gestione catalogo</a>
				</div>

				<div class="col-sm-12"
					style="position: fixed; bottom: 0; padding-bottom: 20px; max-width: 330px;">
					<a href="Logout"><i class="fas fa-sign-out-alt"
						style="margin-right: 20px"></i>Logout</a>
				</div>
			</div>
		</nav>
		<div class="MyContainer">
			<div class="row" style="margin-bottom: 20px;">
				<div class="col-sm-5">
					<h4>
						<%= session.getAttribute("nomeAtt") %>
						<br> di
						<%= session.getAttribute("nominativo") %>
					</h4>
				</div>
				<div class="col-sm-2">
					<h4>-</h4>
				</div>
				<div class="col-sm-5">
					<h4>Movimenti</h4>
				</div>
			</div>
			
			<%ArrayList<Movimenti> mov = (ArrayList<Movimenti>) session.getAttribute("movimenti");%>
			<%if(mov.size()==0){%>
			<br>
				<label>Non ci sono movimenti da mostrare</label>
			<%}else{ %>
			<table class="table">
				<thead>
					<tr>
						<th>Data</th>
						<th>Articolo</th>
						<th>Presi</th>
						<th>Restituiti</th>
					</tr>
				</thead>
				<tbody>
				
					<%for(Movimenti x : mov){%>

					<tr>
						<td>
							<%= x.getData() %>
						</td>
						<td>
							<%= x.getNome_prodotto() %>
						</td>
						<td>
							<%= x.getQuantita() %> <%//quantità noleggiati %>
						</td>
						<td>
							<%= x.getQuantita_resa()  %> <%//quantità restituiti %>
						</td>

					</tr>
					
					<%} %>
				</tbody>
			</table>
			<%} %>
		</div>
	</div>
</body>
</html>