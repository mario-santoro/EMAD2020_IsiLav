<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Hub"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="iso-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Crea Percorso</title>
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
	$(document).ready(
			function() {
			
				
				var array_ore = [];
				var i;
				for (i = 0; i <= 23; i++) {

					$('.ore').append(new Option("" + i, i));
				}

				var array_minuti = [];
				for (i = 0; i <= 59; i++) {
					$('.minuti').append(new Option("" + i, i));
				}
		

			
				 $(".form-check-input").click(function(){
					  var recupero_id = $(this).attr("id");	
						if(this.checked){ 
					
							$("#ore"+recupero_id).prop( "disabled", false );
							$("#minuti"+recupero_id).prop( "disabled", false );
						} else {	
							
							$("#ore"+recupero_id).prop( "disabled", true );
							$("#minuti"+recupero_id).prop( "disabled", true );
						} 
				 })
				 
				 
		
					
					var denied= "${denied}"
						 
					if(denied=="true"){
					  
							$("#demo").show("800");
						
    
					}
							
					 $("#close").click(function(){
					        $("#demo").hide("800");
					 })
					 
					  $("#cnf").prop( "disabled", true );
									
					 $(".giorni").change(function(){
						  $("#cnf").prop( "disabled", false );
									
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
			<h4>Crea percorso</h4>
			<%session.setAttribute("denied", false); %>
			<%ArrayList<Hub> hubs=(ArrayList<Hub>)session.getAttribute("hubs");%>
			<form action="InserimentoPercorso?size=<%=hubs.size()%>" method="POST">
			<h6>Percorso:<input class="inputPercorso" type="text" placeholder="Inserisci nome percorso" name="nome_percorso" required></h6>
			
			<div class="box">
				<table class="table">
					<thead>
						<tr>
							<th>Citta'</th>
							<th>Via</th>

						</tr>
					</thead>
					<tbody>
					<%for(int i=0; i<hubs.size();i++){ %>
						<tr>

							<td id="citta<%=i%>"><%=hubs.get(i).getCitta()%></td>
							<td id="via<%=i%>"><input class="inputVia" name="via<%=i%>" value="<%=hubs.get(i).getVia() %>" readonly></td>
							<td >ore: <select  id="ore<%=i %>" disabled name="ore<%=i%>" class="ore" ></select></td>	
							<td  >minuti: <select  id="minuti<%=i %>" name="minuti<%=i%>" disabled class="minuti"></select>
							<td><input class="form-check-input" id="<%=i%>" name="check<%=i%>" type="checkbox"></td>
						</tr>
					<%} %>
						
					</tbody>
				</table>
 
			</div>
				<div>
				<table id ="tabella_giorni" class="table">
				<tr>
					<th>	 <input class="giorni form-check-input" id="lunedi" name="lunedì" type="checkbox">Lunedì</th>
					<th>  <input class="giorni form-check-input" id="martedi" name="martedì" type="checkbox">Martedì</th>
					<th>  <input class="giorni form-check-input" id="mercoledi" name="mercoledì" type="checkbox">Mercoledì</th>
					<th>    <input class="giorni form-check-input" id="giovedi" name="giovedì" type="checkbox">Giovedì</th>
					<th>  <input class="giorni form-check-input" id="venerdi" name="venerdì" type="checkbox">Venerdì</th>
					<th>      <input class="giorni form-check-input" id="sabato" name="sabato" type="checkbox">Sabato</th>
					<th> <input class="giorni form-check-input" id="domenica" name="domenica" type="checkbox">Domenica</th>
				 
				</tr>
				</table>
			
	 
				</div>
			<div id="ContenitoreCorrieri">
			
			</div>
			
				<div id="demo" class="collapse">
						<div class="alert alert-danger alert-dismissible">
							<button type="button" id="close" class="close" >&times;</button>
							<label for="Errore">Non hai selezionato nessuna fermata</label> 

							
						</div>
					</div>
			<div class="percorso" style="padding: 20px; margin-top: 50px;">
				
					
					<button type="submit" class="btn conferma" id="cnf" >CONFERMA</button>
				
			</div>
			</form>
		</div>
	</div>
</body>
</html>