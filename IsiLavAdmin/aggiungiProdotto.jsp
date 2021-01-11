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
	$(document).ready(
			function() {

				var categorie = [ 'Bagno', 'Letto', 'Tavola' ];
				var i;
				for (i = 0; i < categorie.length; i++) {

					$('#categoria').append(
							new Option("" + categorie[i], categorie[i]));
				}

			});
</script>
</head>
<body>

	<div class="wrapper">

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
					<a href="iscrizioni.jsp"> <i class="fas fa-user-plus"
						style="margin-right: 10px"></i> Richieste di iscrizione <span
						class="badge badge-danger">3</span>
					</a>
				</div>
				<div class="col-sm-12">
					<a href="gestioneClienti.jsp"><i class="far fa-address-book"
						style="margin-right: 20px"></i> Gestione clienti</a>
				</div>
				<div class="col-sm-12">
					<a href="elencoOrRes.jsp"><i class="fas fa-list-ul"
						style="margin-right: 20px"></i>Elenco ordini e resi</a>
				</div>
				<div class="col-sm-12">
					<a href="gestioneHub.jsp"><i class="fas fa-map-marker-alt"
						style="margin-right: 20px"></i>Gestione hub</a>
				</div>
				<div class="col-sm-12">
					<a href="visualizzaPercorsi.jsp"><i class="fas fa-truck"
						style="margin-right: 20px"></i>Visualizza percorsi</a>
				</div>
				<div class="col-sm-12">
					<a href="gestioneCatalogo.jsp"><i class="fas fa-edit"
						style="margin-right: 20px"></i>Gestione catalogo</a>
				</div>

				<div class="col-sm-12"
					style="position: fixed; bottom: 0; padding-bottom: 20px; max-width: 330px;">
					<a href="index.html"><i class="fas fa-sign-out-alt"
						style="margin-right: 20px"></i>Logout</a>
				</div>
			</div>
		</nav>
		<div class="MyContainer">
			<h4>Aggiungi Prodotto</h4>

			<form action="operazioneCompletata.jsp">
				<div class="form-group">
					<label for="articolo">Articolo:</label> <input type="text"
						class="form-control" placeholder="Inserisci nome articolo"
						id="articolo" name="articolo" required>
				</div>
				<div class="form-group">
					<label for="categoria">Categoria:</label> <select name="categoria"
						class="form-control" id="categoria">

					</select> <a href="#demo" data-toggle="collapse" style="color: #70D0AE">Vuoi
						inserire una nuova categoria?</a>
					<div id="demo" class="collapse">
						<div class="alert alert-light alert-dismissible">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
							<label for="nuovaCategoria">Nuova Categoria:</label> <input
								type="text" class="form-control"
								placeholder="Inserisci nuova categoria" id="articolo"
								name="articolo">

							<button type="button" class="btn aggiungiCat">Aggiungi
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
					<label for="prezzo">Prezzo:</label> <input type="number" min="0.00"
						max="100.00" step="0.01" name="prezzo" class="form-control"
						placeholder="Inserisci prezzo" id="prezzo" required>

				</div>
				<div class="form-group">
					<label for="quantità">Quantità:</label> <input type="number"
						class="form-control" name="quantità"
						placeholder="Inserisci quantità" id="quantità" min="1" max="100"
						required>
				</div>
				<div class="form-group">
					<label for="pezzi">Pezzi nel pacco:</label> <input type="number"
						class="form-control" name="pezzi"
						placeholder="Inserisci pezzi compresi nel pacco" id="pezzi"
						min="1" max="100" required>
				</div>
				<div class="form-group">
					<label for="descrizione">Descrizione dettagliata:</label>
					<textarea class="form-control" name="descrizione" id="descrizione"
						required>
							</textarea>
				</div>

				<button type="submit" class="btn conferma">CONFERMA</button>

			</form>



		</div>



	</div>
</body>
</html>