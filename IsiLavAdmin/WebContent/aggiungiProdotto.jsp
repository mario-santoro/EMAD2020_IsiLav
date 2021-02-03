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

		$.ajax({
			type : "post",
			url : "VisualizzaCategorie",
			data : "",
			success : function(msg) {
				$('#categoria').html(msg);
			}

		});

		$('#aggiugniCate').click(function() {
			var data = new FormData();
			jQuery.each(jQuery('#fileCat')[0].files, function(i, file) {
		 
				data.append('fileCat', file);
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
			<h4>Aggiungi Prodotto</h4>

			<form action="AggiungiProdotto" method="POST"
				enctype="multipart/form-data">

				<div class="form-group">
					<label for="articolo">Articolo:</label> <input type="text"
						class="form-control" placeholder="Inserisci nome articolo"
						id="articolo" name="articolo" required>
				</div>

				<div class="form-group">
					<label for="articolo">Path immagine:</label> <br> <input
						type="file" accept="image/png, image/jpeg" name="file" id="file">
				</div>

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
							
							<button type="button" id="aggiugniCate" class="btn aggiungiCat chiudi" >Aggiungi
								Categoria</button>
						
						</div>
					</div>
					
					
				</div>

				<div class="form-group">
					<label for="descrizioneBreve">Descrizione breve:</label> <input
						type="text" class="form-control" name="descrizioneBreve"
						placeholder="Inserisci descrizione breve" id="descrizioneBreve"
						required>

				</div>

				<div class="form-group">
					<label for="prezzo">Prezzo:</label> <input name="prez"
						class="form-control" type="number" min="0.00" max="100.00"
						step="0.01" placeholder="Inserisci prezzo" id="prezzo" required>

				</div>
				<div class="form-group">
					<label for="quantità">Quantità:</label> <input type="number"
						class="form-control" name="quant" min="1"
						placeholder="Inserisci quantità" id="quantità" required>
				</div>
				<div class="form-group">
					<label for="pezzi">Pezzi nel pacco:</label> <input type="number"
						class="form-control" name="pez" min="1" max="100"
						placeholder="Inserisci pezzi compresi nel pacco" id="pezzi"
						required>
				</div>

				<div class="form-group">
					<label for="descrizione">Descrizione dettagliata:</label>
					<textarea class="form-control" name="descrizione" id="descrizione"
						required></textarea>
				</div>

				<button type="submit" class="btn conferma">CONFERMA</button>

			</form>



		</div>



	</div>
</body>
</html>