
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Percorso"%>
<%@page import="Bean.Fermata"%>
<%@page import="Bean.Hub"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Visualizza Percorsi</title>
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
	            	  $('.canc').click(function(){
	        		 	  recupero_id = $(this).attr("id");		        		 	
		        		  $('#demo').show("800");
		        		  
	            	  });
	            	  
	            	  $('#no').click(function(){
		        		 	 
			        		  $('#demo').hide("800");
		            	  });
	            	  
	            	  $('#si').click(function(){
	             		 	 
	            		  window.location = "http://localhost:8080/IsiLavAd/CancellaPercorso?id_percorso="+recupero_id;
		            	  });
	            	  
	            	  
	            	  
	            	  var data = new Date();
	  				var year=data.getFullYear();
	  				var month=""+ (data.getMonth() + 1);
	  				if (month.length==1)
	  				{
	  					month="0"+month;
	  					
	  				}
	  				var day=""+ data.getDate();
	  				 
	  				if (day.length==1)
	  				{
	  					day="0"+day;
	  					
	  				}
	  				var dataOdierna = year+ "-"+month+ "-" + day;	  			
	  				var dataSetting= "${data}";
					
					if(dataSetting!=""){
						$('#dataPicker').val(dataSetting);
						
					}else{
						$('#dataPicker').val(dataOdierna);
						
					}
	  				$('#dataPicker').attr("min", dataOdierna);

	  				 $("#dataPicker").change(function(){
							var d= $("#dataPicker").val();  
							 window.location = "http://localhost:8080/IsiLavAd/VisualizzaPercorsi?data="+d;
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
			<h4>Visualizza percorsi</h4>
			<%ArrayList<Percorso> percorsi=(ArrayList<Percorso>)session.getAttribute("percorsi");%>
			<input type="date" class="form-control" id="dataPicker" name="data_percorso" required>
			<%if(percorsi==null || percorsi.size()==0){ %>
			<div style="margin-bottom: 20px;">
				<p>Non ci sono percorsi da visualizzare al momento</p>
			</div>
			<%}else{ for(int i=0;i<percorsi.size();i++){ %>
			<div style="margin-bottom: 20px;">
				
				<br>
				<h6><%=percorsi.get(i).getNome() %>: </h6>
				
				<div class="box">
					<table class="table">

						<tbody>
							<%for(int j=0;j<percorsi.get(i).getFermate().size();j++){ %>
							<tr>
								<td><%=(j+1)+"." %></td>
								<td> <%=percorsi.get(i).getFermate().get(j).getHub().getCitta() %></td>
								<td><%=percorsi.get(i).getFermate().get(j).getHub().getVia() %></td>
								<td>ore: <%if(percorsi.get(i).getFermate().get(j).getOre()<10){%>
									0<%=percorsi.get(i).getFermate().get(j).getOre() %>
								<%}else{ %>
								<%=percorsi.get(i).getFermate().get(j).getOre()%>
								<%} %>:<%if(percorsi.get(i).getFermate().get(j).getMinuti()<10){%>
									0<%=percorsi.get(i).getFermate().get(j).getMinuti() %>
								<%}else{ %>
								<%=percorsi.get(i).getFermate().get(j).getMinuti() %>
								<%} %></td>

							</tr>
							<%} %>

						</tbody>
					</table>
				</div>
				<button type="button"  class="btn canc"
					id="<%=percorsi.get(i).getId_percorso() %>"
					style="background-color: #70D0AE; border-color: #70D0AE; width: 100px; margin-left: 80%; margin-bottom: 10px;"
					class="btn btn-primary">ELIMINA</button>

				<div id="demo" class="collapse">
					<div class="alert alert-danger">
						<strong>Attenzione!</strong> Sei sicuro di voler rimuovere il percorso: <%=percorsi.get(i).getNome() %> ?
						<button type="button" id="si" class="btn siNo">SI</button>
						<button id="no" type="button" class="btn siNo">NO</button>
					</div>
				</div>
			</div>
			<%} }%>
			<button type="button" onclick="location.href='CreaPercorso'"
					class="btn conferma">CREA PERCORSO</button>
			
		</div>
	</div>
</body>
</html>