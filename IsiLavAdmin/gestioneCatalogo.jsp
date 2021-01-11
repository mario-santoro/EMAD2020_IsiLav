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
						style="margin-right: 10px"></i> Richieste di iscrizione <span  class="badge badge-danger">3</span>
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
					<a href="visualizzaPercorsi.jsp"><i class="fas fa-truck" style="margin-right: 20px"></i>Visualizza
						percorsi</a>
				</div>
				<div class="col-sm-12">
					<a href="gestioneCatalogo.jsp"><i class="fas fa-edit" style="margin-right: 20px"></i>Gestione
						catalogo</a>
				</div>

				<div class="col-sm-12"
					style="position: fixed; bottom: 0; padding-bottom: 20px; max-width: 330px;">
					<a href="index.html"><i class="fas fa-sign-out-alt"
						style="margin-right: 20px"></i>Logout</a>
				</div>
			</div>
		</nav>

		<div class="MyContainer">
			<h4>Gestione Catalogo</h4>
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
					<tr>
						<td>Letto</td>
						<td>Lenzuola</td>
						<td>100</td>
						<td>35 &euro;</td>
						<td><a href="modificaProdotto.jsp"><i class="modifica fas fa-edit"></i></a> 
							<a href="#demo"
							data-toggle="collapse"> <i class="	fas fa-trash-alt"></i></a>
						<td>
					</tr>
					<tr>
						<td>Letto</td>
						<td>Federe</td>
						<td>50</td>
						<td>40 &euro;</td>
						<td><a href="modificaProdotto.jsp"> <i class="modifica fas fa-edit"></i></a> <a href="#demo"
							data-toggle="collapse"> <i class="	fas fa-trash-alt"></i></a>
						<td>
					</tr>
					<tr>
						<td>Bagno</td>
						<td>Accappatoio</td>
						<td>150</td>
						<td>150 &euro;</td>
						<td><a href="modificaProdotto.jsp"><i class="modifica fas fa-edit"></i></a> <a href="#demo"
							data-toggle="collapse"> <i class="	fas fa-trash-alt"></i></a>
						<td>
					</tr>
				</tbody>
			</table>
			

			<div id="demo" class="collapse">
				<div class="alert alert-danger">
					<strong>Attenzione!</strong> Sei sicuro di voler rimuovere questo prodotto?
					<button	type="button" class="btn siNo">SI</button>
					<button data-target="#demo" data-toggle="collapse" type="button" class="btn siNo">NO</button>
				</div>
			</div>
				<button onclick="location.href='aggiungiProdotto.jsp'" type="button" class="btn aggiugniProd">Aggiungi Prodotto</button>
		</div>
	</div>
</body>
</html>