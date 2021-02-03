<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import=" Bean.Stock"%>
<%@page import=" Bean.ProdottiOrdinati"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Stock</title>
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
		<%
			int sizeClienti = (Integer) session.getAttribute("sizeClienti");
		%>
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
						style="margin-right: 10px"></i> Richieste di iscrizione <%
 	if (sizeClienti == 0) {
 	} else {
 %> <span class="badge badge-danger"><%=sizeClienti%></span> <%
 	}
 %>
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
						<%=session.getAttribute("nomeAtt")%>
						<br> di
						<%=session.getAttribute("nominativo")%>
					</h4>
				</div>
				<div class="col-sm-2">
					<h4>-</h4>
				</div>
				<div class="col-sm-5">
					<h4>Stock</h4>
				</div>
			</div>
			
			<%	ArrayList<Stock> stocks = (ArrayList<Stock>) session.getAttribute("stocks"); %>
			<% if (stocks.size() == 0) { %>
				<br> <label>Non ci sono prodotti in stock da mostrare</label>
			
			<% } else { %>
				<table class="table">
					<thead>
						<tr>
							<th>Nome Prodotto</th>
							<th>Quantità totale</th>
	
						</tr>
					</thead>
	
				</table>
				<% int j=0;
				for (Stock x : stocks) { %>
					<div class="row"
						style="margin-left: 5px; border-bottom: 2px solid #E9EBED; margin-bottom: 15px; width: 99%">
						<div class="col-sm-6">
							<p><%= x.getNome_prodotto() %></p>
						</div>
						<div class="col-sm-4">
							<p><%= x.getQuantita_rimasta() %></p>
						</div>
						<div class="col-sm-1">
							<a href="#demo<%=j %>" data-toggle="collapse"> <i
								class="fas fa-chevron-down"></i>
							</a>
						</div>
		
						<div id="demo<%=j %>" class="collapse" style="width: 100%;">
							<table class="table"
								style="background-color: #E9EBED; border-radius: 3px; width: 80%">
								<thead>
									<tr>
										<th>Data Scadenza</th>
										<th>Quantità ordine</th>
		
									</tr>
								</thead>
								<tbody>
								<% ArrayList<ProdottiOrdinati> y = x.getProdotti_ordinati(); %>
								<%for( int i=0; i<y.size();i++ ){ %>
									<tr>
										<td><%= y.get(i).getData_scadenza() %></td>
		
										<td><%= y.get(i).getQuantità_ordine() %></td>
										
										<td>
										
										<% if(y.get(i).isRitardo()){ %> <%//qui devo fare la cosa delle date %>
											<i style="color: red; font-size: 1.5em;"
												class="fas fa-exclamation-circle"></i>
										<%}else{%>	
											
										<%} %>
										
										</td>
										
									</tr>
								<%} %>									
								</tbody>
							</table>
						</div>
					</div>
				<%j++;} %>

			<% } %>

		</div>
	</div>
</body>
</html>