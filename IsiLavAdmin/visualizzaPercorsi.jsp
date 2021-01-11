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
			<h4>Visualizza percorsi</h4>
			
			<div style="margin-bottom: 20px;">
				<h6>Percorso 1: Data 07/01/2021</h6>
				<div class="box">
					<table class="table">

						<tbody>
							<tr>
								<td>1.</td>
								<td>Salerno</td>
								<td>Via Lungomare Colombo, 14</td>
								<td>ore: 09:00</td>

							</tr>
							<tr>
								<td>2.</td>
								<td>Salerno</td>
								<td>Piazza Caduti di Brescia</td>
								<td>ore: 11:00</td>

							</tr>
						</tbody>
					</table>
				</div>
				<button type="button" data-target="#demo" data-toggle="collapse"
					style="background-color: #70D0AE; border-color: #70D0AE; width: 100px; margin-left: 80%; margin-bottom: 10px;"
					class="btn btn-primary">ELIMINA</button>

				<div id="demo" class="collapse">
					<div class="alert alert-danger">
						<strong>Attenzione!</strong> Sei sicuro di voler rimuovere questo
						prodotto?
						<button type="button" class="btn siNo">SI</button>
						<button data-target="#demo" data-toggle="collapse" type="button"
							class="btn siNo">NO</button>
					</div>
				</div>
			</div>

			<div style="margin-bottom: 20px;">
				<h6>Percorso 2: Data 10/01/2021</h6>
				<div class="box">
					<table class="table">

						<tbody>
							<tr>
								<td>1.</td>
								<td>Salerno</td>
								<td>Via Roma, 7</td>
								<td>ore: 09:00</td>

							</tr>
							<tr>
								<td>2.</td>
								<td>Salerno</td>
								<td>Piazza Caduti di Brescia</td>
								<td>ore: 10:30</td>

							</tr>
						</tbody>
					</table>
				</div>
				<button type="button" data-target="#demo1" data-toggle="collapse"
					style="background-color: #70D0AE; border-color: #70D0AE; width: 100px; margin-left: 80%; margin-bottom: 10px;"
					class="btn btn-primary">ELIMINA</button>

				<div id="demo1" class="collapse">
					<div class="alert alert-danger">
						<strong>Attenzione!</strong> Sei sicuro di voler rimuovere questo
						prodotto?
						<button type="button" class="btn siNo">SI</button>
						<button type="button" class="btn siNo">NO</button>
					</div>
				</div>
				<button type="button" onclick="location.href='creaPercorso.jsp'"
					class="btn conferma">CREA PERCORSO</button>


			</div>
		</div>
</body>
</html>