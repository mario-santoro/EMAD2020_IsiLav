<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Prodotto"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Aggiungi Prodotto</title>
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
	$(document).ready(function() {
		
		var prodotto="${nomeProdotto}";
		
		$.ajax({
			type : "post",
			url : "VisualizzaCategorie",
			data : "prodotto="+prodotto,
			success : function(msg) {
				$('#categoria').html(msg);
			}

		});


		$('#aggiugniCate').click(function() {
			var data = new FormData();
			
			jQuery.each(jQuery('#fileCat')[0].files, function(i, fileCat) {
		 
				data.append('fileCat', fileCat);
				data.append('nuovaCategoria',$('#newCat').val());
			});
			
			$.ajax({
				type : "post",
				cache : false,
				contentType : false,
				method : 'POST',
				enctype : 'multipart/form-data',
				processData : false, // Important!		      
				url : "AggiungiCategoria",
				data : data,
				success : function(msg) {
					$('#listaCategoria').html(msg);
				}
			});
		});
		
		
		$('#nomImmagine').click(function() {
			$("#confImg").show("800");
			
		});
		
		 $(".chiudi").click(function(){
		 	$("#demo").hide("800");
		 })
		
		 $("#apri").click(function(){
		 	$("#demo").show("800");
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

			<%
				Prodotto p = (Prodotto) session.getAttribute("prodotto");
				session.setAttribute("nomeProdotto",p.getNomeArticolo());
			
			%>

			
			<h4>
				Modifica Prodotto -
				<%=p.getNomeArticolo()%></h4>

			<form action=ModificaImmagine method="POST"
				enctype="multipart/form-data">

				<div class="form-group">


					<label for="articolo">Path immagine:</label> <br>

					<div id="imgContainer" class="col-sm-8 text-left"
						style="width: 100%; height: 50%;">
						<img width=50% height=50% src='img/<%=p.getPathImg()%>'
							id="visualizzaImg" />
					</div>

					<input type="file" accept="image/png, image/jpeg"
						value="<%=p.getPathImg()%>"
						placeholder="Inserisci percorso immagine" id="nomImmagine"
						name="file">
						
					<button type="submit" style="display: none" id="confImg"
						class="btn conferma">Conferma immagine</button>

				</div>
				<div class="alert alert-warning">
					<strong>Nota!</strong> Non selezionando nessuna immagine, rimarrà
					quella visualizzata.

				</div>
			</form>
			
			
			<form action="ModificaProdotto" method="POST">
				<div class="form-group">
					<label for="categoria">Categoria:</label> 
					
					
					<div id="listaCategoria">
						<select name="categoria" class="form-control" id="categoria">
	
						</select> 
					</div>
					
					<a href="#demo" id="apri" style="color: #70D0AE">Vuoi
						inserire una nuova categoria?</a>


					<div id="demo" class="collapse">
						
						<div class="alert alert-light alert-dismissible">
							<button type="button" class="close chiudi" >&times;</button>
							<label for="nuovaCategoria">Nuova Categoria:</label>
							
							<input
								type="text" class="form-control"
								placeholder="Inserisci nuova categoria" id="newCat"
								name="newCat">
								
							<div class="form-group">
								<label for="immagine">Path immagine:</label> <br> <input
									type="file" accept="image/png, image/jpeg" name="fileCat"
									id="fileCat">
							</div>
							<button type="button" id="aggiugniCate" class="btn aggiungiCat chiudi">Aggiungi
								Categoria</button>
						</div>
					</div>
					
				</div>

				<div class="form-group">
					<label for="descrizioneBreve">Descrizione breve:</label> <input
						value="<%=p.getDescBreve()%>" type="text" class="form-control"
						name="descrizioneBreve" placeholder="Inserisci descrizione breve"
						id="descrizioneBreve" required>

				</div>
				<div class="form-group">
					<label for="prezzo">Prezzo:</label> <input
						value="<%=p.getPrezzo()%>" type="number" min="0.00" max="100.00"
						step="0.01" name="prezzo" class="form-control"
						placeholder="Inserisci prezzo" id="prezzo" required>

				</div>
				<div class="form-group">
					<label for="quantità">Quantità:</label> <input
						value="<%=p.getQuant()%>" type="number" class="form-control"
						name="quantità" placeholder="Inserisci quantità" id="quantità"
						min="1" required>
				</div>
				<div class="form-group">
					<label for="pezzi">Pezzi nel pacco:</label> <input
						value="<%=p.getPezzi()%>" type="number" class="form-control"
						name="pezzi" placeholder="Inserisci pezzi compresi nel pacco"
						id="pezzi" min="1" max="100" required>
				</div>
				<div class="form-group">
					<label for="descrizione">Descrizione dettagliata:</label>
					<textarea class="form-control" name="descrizione" id="descrizione"
						required><%=p.getDesc()%></textarea>
				</div>

				<button type="submit" class="btn conferma">MODIFICA</button>

			</form>



		</div>



	</div>
</body>
</html>