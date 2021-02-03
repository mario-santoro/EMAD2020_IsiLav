<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Percorso"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Elenco Ordini e Resi</title>
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

<script>
	$(document)
			.ready(
					function() {
						var data = new Date();
					 
						var year = data.getFullYear();
						var month = "" + (data.getMonth() + 1);
						if (month.length == 1) {
							month = "0" + month;

						}
						var day = "" + data.getDate();

						if (day.length == 1) {
							day = "0" + day;

						}
						var dataOdierna = year + "-" + month + "-" + day;
						var dataSetting= "${data}";
						
						if(dataSetting!=""){
							$('#dataPicker').val(dataSetting);
							
						}else{
							$('#dataPicker').val(dataOdierna);
							
						}
						
					
						$("#dataPicker")
								.change(
										function() {
											var d = $("#dataPicker").val();
											window.location = "./VisualizzaElencoOR?data="
													+ d;
										})

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

			<h4>Elenco ordini e resi</h4>
			<%
				ArrayList<Percorso> percorsi = (ArrayList<Percorso>) session.getAttribute("prenotazioni");
			%>
			<input type="date" class="form-control" id="dataPicker" required>
			<%
				if (percorsi == null || percorsi.size() == 0) {
			%>
			<p>Non ci sono percorsi disponibili in questo giorno</p>
			<%
				} else {
					for (int i = 0; i < percorsi.size(); i++) {
			%>

			<div class="percorso">
				<div style="margin-top: 10px;">
					<h6><%=percorsi.get(i).getNome()%>:
					</h6>

				</div>
				<%
					if (percorsi.get(i).getOperazioni() == null || percorsi.get(i).getOperazioni().size() == 0) {
				%>
				<p>Non ci sono clienti prenotati a questo percorso</p>

				<%
					} else {
				%>
				<table class="table">
					<thead>
						<tr>
							<th>Email</th>
							<th>Nome Attività</th>
							<th>Luogo stabilito</th>
							<th>Ora</th>
						</tr>
					</thead>
					<tbody>
						<%
							for (int j = 0; j < percorsi.get(i).getOperazioni().size(); j++) {
						%>
						<tr>
							<td><%=percorsi.get(i).getOperazioni().get(j).getCliente().getEmail()%></td>
							<td><%=percorsi.get(i).getOperazioni().get(j).getCliente().getNomeAttivita()%></td>
							<td><%=percorsi.get(i).getOperazioni().get(j).getVia()%></td>
							<td>
								<%
									if (percorsi.get(i).getOperazioni().get(j).getFermata().getOre()< 10) {
								%>
								0<%=percorsi.get(i).getOperazioni().get(j).getFermata().getOre()%>
								<%
									} else {
								%> <%=percorsi.get(i).getOperazioni().get(j).getFermata().getOre()%>
								<%
									}
								%>:<%
									if (percorsi.get(i).getOperazioni().get(j).getFermata().getMinuti()<10) {
								%>
								0<%=percorsi.get(i).getOperazioni().get(j).getFermata().getMinuti()%>
								<%
									} else {
								%> <%=percorsi.get(i).getOperazioni().get(j).getFermata().getMinuti()%>
								<%
									}
								%>
							</td>
							<td><a href="BollaAccompagnamento?email=<%=percorsi.get(i).getOperazioni().get(j).getCliente().getEmail()%>"><i class="fas fa-print"></i> </a></td>
							<td><a
								href="DettaglioOrRes?idOp=<%=percorsi.get(i).getOperazioni().get(j).getId_operazione()%>&nome=<%=percorsi.get(i).getOperazioni().get(j).getCliente().getNominativo()%>&attivita=<%=percorsi.get(i).getOperazioni().get(j).getCliente().getNomeAttivita()%>">
									<i class="avanza fas fa-chevron-right"></i>
							</a></td>
						</tr>
						<%
							}
						%>

					</tbody>
				</table>
				<%
					}
				%>
			</div>

			<%
				}
				}
			%>


		</div>
	</div>
</body>
</html>