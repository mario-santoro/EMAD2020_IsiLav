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
	$(document).ready(
			function() {
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
				$('#dataPicker').val(dataOdierna);
				$('#dataPicker').attr("min", dataOdierna);

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

			<h4>Elenco ordini e resi</h4>

			<input type="date" class="form-control" id="dataPicker" required>

			<div class="percorso">
				<div style="margin-top: 10px;">
					<h6>Percorso 1:</h6>

				</div>

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
						<tr>
							<td>john@example.com</td>
							<td>Hotel Ariston</td>
							<td>Piazza Caduti di Brescia</td>
							<td>09:00</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="dettaglioOrRes.jsp"> <i class="avanza fas fa-chevron-right"></i></a></td>
						</tr>
						<tr>
							<td>mary@example.com</td>
							<td>B&B La Conchiglia</td>
							<td>Via Roma, 5</td>
							<td>10:30</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="#"> <i class="avanza fas fa-chevron-right"></i></a></td>
						</tr>
						<tr>
							<td>july@example.com</td>
							<td>Novotel</td>
							<td>Via Roma, 5</td>
							<td>10:30</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="#"> <i class="avanza fas fa-chevron-right"></i></a></td>
						</tr>
					</tbody>
				</table>
			</div>


			<div class="percorso">
				<div style="margin-top: 10px;">
					<h6>Percorso 2:</h6>

				</div>

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
						<tr>
							<td>john@example.com</td>
							<td>Hotel Ariston</td>
							<td>Piazza Caduti di Brescia</td>
							<td>09:00</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="#"> <i class="avanza fas fa-chevron-right"></i></a></td>
						</tr>
						<tr>
							<td>mary@example.com</td>
							<td>B&B La Conchiglia</td>
							<td>Via Roma, 5</td>
							<td>10:30</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="#"> <i class="avanza fas fa-chevron-right"></i></a></td>
						</tr>
						<tr>
							<td>july@example.com</td>
							<td>Novotel</td>
							<td>Via Roma, 5</td>
							<td>10:30</td>
							<td><a href="#"><i class="fas fa-print"></i> </a></td>
							<td><a href="#"> <i class=" avanza fas fa-chevron-right"></i></a></td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>
</body>
</html>