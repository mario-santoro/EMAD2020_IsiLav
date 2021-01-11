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
	$(document).ready(function() {
		$(".fas").click(function() {
			var recupero_id = $(this).attr("id");

			$("#check" + recupero_id).show("slow");
			$("#q" + recupero_id).prop("disabled", false);
			$("#q" + recupero_id).css({
				"background-color" : "white",
				"border-style" : "groove"
			});

			$("#check" + recupero_id).click(function() {

				$("#check" + recupero_id).hide("slow");
				var prova = $("#q" + recupero_id).val();
				$("#q" + recupero_id).prop("disabled", true);
				$("#q" + recupero_id).css({
					"background-color" : "#fafafa",
					"border-style" : "none"
				});

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
			<div class="row" style="margin-bottom: 20px;">
				<div class="col-sm-5">
					<h4>
						Hotel Ariston <br> di Giovanni Rossi
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
				<table class="table">
					<thead>
						<tr>
							<th>Nome Prodotto</th>
							<th>Quantità</th>

						</tr>
					</thead>
					<tbody>
						<tr>

							<td>Lenzuola</td>
							<td>35</td>


						</tr>
						<tr>

							<td>Federe</td>
							<td>12</td>


						</tr>
						<tr>

							<td>Accappatoio</td>
							<td>45</td>


						</tr>
					</tbody>
				</table>
			</div>
			<div id="demo1" style="display: none">
				<table class="table">
					<thead>
						<tr>
							<th>Nome Prodotto</th>
							<th>Quantità</th>

						</tr>
					</thead>
					<tbody>
						<tr>

							<td>Lenzuola</td>

							<td><input class="q" type="number" value="22" id="q0"
								disabled> <i
								style="color: green; display: none; font-size: 1.5em;"
								id="check0" class="	fas fa-check-circle"></i></td>
							<td><a href="#"><i id="0" class="modifica	fas fa-edit"></i></a>
							<td>
						</tr>
						<tr>

							<td>Federe</td>

							<td><input class="q" type="number" value="5" id="q1"
								disabled> <i
								style="color: green; display: none; font-size: 1.5em;"
								id="check1" class="	fas fa-check-circle"></i>
							<td><a href="#"><i id="2" class="modifica fas fa-edit"></i></a>
							<td>
						</tr>
						<tr>

							<td>Accappatoio</td>
							<td><input class="q" type="number" value="2" id="q2"
								disabled> <i
								style="color: green; display: none; font-size: 1.5em;"
								id="check2" class="	fas fa-check-circle"></i>
							<td><a href="#"><i id="2" class="modifica	fas fa-edit"></i></a>
							<td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>