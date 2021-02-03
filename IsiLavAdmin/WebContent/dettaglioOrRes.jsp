<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Operazione"%>
<%@page import="Bean.Cliente"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Dettaglio Ordine e Reso</title>
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
<link rel="stylesheet" type="text/css" href="css/dettaglioOrRes.css">
<script>
	$(document)
			.ready(
					function() {
						$(".modifica").click(function() {

							var recupero_id = $(this).attr("id");
							
							$("#q" + recupero_id).prop("disabled", false);
							$("#q" + recupero_id).css({
								"background-color" : "white",
								"border-style" : "groove"
							});

						});
					
										
										
						
						$("#or").click(function() {
							$("#demo1").hide();
							$("#demo").show("slow");
						});

						$("#res").click(function() {
							$("#demo").hide();
							$("#demo1").show("slow");
						});

					});
	
	function test( prodotto, i){
		 
		 
		
		var reso = "${id_reso}";
	
		var q = document.getElementById("q"+i);
		var quant= q.value;
		
		q.disabled = true;
		q.style.backgroundColor = "#fafafa";
		q.style.borderStyle  = "hidden";
		
		 var xmlHttp = new XMLHttpRequest();
		    xmlHttp.open( "GET", "ModificaQRestituita?quant="
				+ quant + "&prodotto="
				+ prodotto, false ); // false for synchronous request
		    xmlHttp.send( null );
		   
		 	if (xmlHttp.responseText.errore == "false") {
				alert("Quantità superiore alla quantità nello stock del cliente");

			} else {
				alert("Quantità settata correttamente");
				document.getElementById("check"+i).style.display = "none";
				document.getElementById(""+i).style.display = "none";
			}
		
	}
</script>


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
 %>
						<span class="badge badge-danger"><%=sizeClienti%></span> <%
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
			<%
				Operazione o = (Operazione) session.getAttribute("operazione");
				Cliente c = (Cliente) session.getAttribute("cliente");
			%>
			<div class="row" style="margin-bottom: 20px;">
				<div class="col-sm-5">
					<h4>
						<%=c.getNomeAttivita()%><br> di
						<%=c.getNominativo()%>
					</h4>
				</div>
				<div class="col-sm-2">
					<h4>-</h4>
				</div>
				<div class="col-sm-5">
					<h4>Dettaglio ordine e reso</h4>
				</div>
			</div>


			<div class="btn-group">
				<button id="or" type="button" class="btn">Ordinati</button>
				<button id="res" type="button" class="btn ">Da restituire</button>

			</div>


			<div id="demo" style="display: none">
				<%
					if (o.getOrdine() == null || o.getOrdine().getNoleggiati().size() == 0) {
				%>
				<p>Il cliente non ha ordinato nulla</p>
				<%
					} else {
				%>
				<table class="table">
					<thead>
						<tr>
							<th>Nome Prodotto</th>
							<th>Quantità</th>

						</tr>
					</thead>
					<tbody>
						<%
							for (int i = 0; i < o.getOrdine().getNoleggiati().size(); i++) {
						%>
						<tr>

							<td><%=o.getOrdine().getNoleggiati().get(i).getNomeArticolo()%></td>
							<td><%=o.getOrdine().getNoleggiati().get(i).getQuant()%></td>

							<%
								}
							%>
						
					</tbody>
				</table>
				<%
					}
				%>
			</div>
			<div id="demo1" style="display: none">
				<%
					if (o.getReso() == null || o.getReso().getRestituiti().size() == 0) {
				%>
				<p>Il cliente non ha restituito nulla</p>
				<%
					} else {
				%>
				<table class="table">
					<thead>
						<tr>
							<th>Nome Prodotto</th>
							<th>Quantità</th>

						</tr>
					</thead>
					<tbody>
						<%
							for (int i = 0; i < o.getReso().getRestituiti().size(); i++) {
						%>
						<tr>

							<td><input class="q" style="width: 300px" type="text"
								value="<%=o.getReso().getRestituiti().get(i).getNomeArticolo()%>"
								id="p<%=i%>" disabled></td>  

							<td><input class="q" type="number" min="1"
								value="<%=o.getReso().getRestituiti().get(i).getQuant()%>"
								id="q<%=i%>" disabled> 
								<%if(o.getReso().isConfermato()==false){ %>
								<i onclick="return test('<%=o.getReso().getRestituiti().get(i).getNomeArticolo()%>','<%=i %>')"
								 id="check<%=i%>"
								class="fas fa-check-circle"></i></td>
							<td><a href="#"><i id="<%=i%>"
									class="modifica	fas fa-edit"></i></a>
							<td>
							<%} %>
						</tr>
						<%
							}
						%>
					</tbody>
				</table>

				<div class="alert alert-warning">
					<strong>Nota!</strong> La quantità restituita dal cliente deve
					essere accetatta o modificata dopo il controllo con gli RFID, una
					volta modificata non sarà più possibile modificarla.

				</div>
				<%
					}
				%>
			</div>
		</div>
	</div>
</body>
</html>