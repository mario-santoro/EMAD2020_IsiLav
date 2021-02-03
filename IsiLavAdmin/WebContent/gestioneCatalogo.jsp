<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Prodotto"%>
<%@page import="java.text.DecimalFormat"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Gestione Catalogo</title>
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
<link rel="stylesheet" type="text/css" href="css/gestioneCatalogo.css">


<script type="text/javascript">
	$(document)
			.ready(
					function() {
						var recupero_id;
						$('.delete').click(function() {
							recupero_id = $(this).attr("id");
							
							$('#canc_prod').text(recupero_id);
							$('#canc').show("800");

						});

						$('#no').click(function() {
							$('#canc').hide("800");
						});

						$('#si')
								.click(
										function() {
											window.location = "./EliminaProdotto?nome_prodotto=" + recupero_id;
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

		<div class="MyContainer">
			<h4>Gestione Catalogo</h4>
			
			<%ArrayList<Prodotto> prodotti=(ArrayList<Prodotto>) session.getAttribute("prodotti");%>
			
			<%if(prodotti==null || prodotti.size()==0){ %>
				<p>Non ci sono prodotti nel catalogo</p>
			<%}else{ %>
				<table class="table">
					<thead>
						<tr>
							<th>Categoria</th>
							<th>Articolo</th>
							<th>Quantita'</th>
							<th>Prezzo</th>
						</tr>
					</thead>
					<tbody>
						<%
							for (int i = 0; i<prodotti.size(); i++) {
								DecimalFormat df = new DecimalFormat("0.00");
						%>
						<tr>
							<td><%=prodotti.get(i).getCategoria()%></td>
							<td><%=prodotti.get(i).getNomeArticolo()%></td>
							<td><%=prodotti.get(i).getQuant()%></td>
							<td><%=df.format(prodotti.get(i).getPrezzo())%> &euro;</td>
							<td><a href="GetProdotto?nome_prodotto=<%=prodotti.get(i).getNomeArticolo()%>"><i class="modifica fas fa-edit"></i></a> 
							<a href="#" id="<%=prodotti.get(i).getNomeArticolo()%>" class="delete"> <i class="fas fa-trash-alt"></i></a>
							<td>
						</tr>
						<%
							}
						%>
					</tbody>
				</table>
			<%} %>

			<div id="canc" class="collapse">
				<div class="alert alert-danger">
					<strong>Attenzione!</strong> Sei sicuro di voler rimuovere il
					prodotto: <span id="canc_prod"> </span> ? <br>
					<button id="si" type="button" class="btn siNo">SI</button>
					<button id="no" type="button" class="btn siNo">NO</button>
				</div>
			</div>

			<button onclick="location.href='aggiungiProdotto.jsp'" type="button"
				class="btn aggiugniProd">Aggiungi Prodotto</button>
		</div>
	</div>
</body>




</html>