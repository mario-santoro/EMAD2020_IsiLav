<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
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
				var data = new Date();
				var dataOdierna = data.getFullYear() + "-"
						+ (data.getMonth() + 1) + "-" + data.getDate();
				$('#dataPicker').val(dataOdierna);
				$('#dataPicker').attr("min", dataOdierna);

				var array_ore = [];
				var i;
				for (i = 0; i <= 23; i++) {

					$('.ore').append(new Option("" + i, i));
				}

				var array_minuti = [];
				for (i = 0; i <= 59; i++) {
					$('.minuti').append(new Option("" + i, i));
				}

			});

	function myFunction(id, citta, via) {

		var checkBox = document.getElementById("myCheck0");
	 
		 if (checkBox.checked == true){
			 var text = document.getElementById("table");
				var ht = "<tbody>	<tr><td id=\"id\">1.</td>	<td id=\"citta0\">Salerno</td>	<td id=\"via0\">Via Lungomare Colombo, 14</td>	<td>ore: <select name=\"ore\" class=\"ore\"></select></td>	<td>minuti: <select name=\"minuti\" class=\"minuti\"></select></td></tr>"
				text.innerHTML += ht;
			  } else {
			     text.style.display = "none";
			  }
		

	}
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
					<a href="elencoOrRes.js"><i class="fas fa-list-ul"
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
			<h4>Crea percorso</h4>
			<div class="container">
				<h6>Percorso 3:</h6>
				<input type="date" class="form-control" id="dataPicker" required>
				<div class="box">
					<table class="table" style="width: 700px;">
						<thead>
							<tr>
								<th>Città</th>
								<th>Via</th>

							</tr>
						</thead>
						<tbody>
							<tr>

								<td id="citta0">Salerno</td>
								<td id="via0">Via Lungomare Colombo, 14</td>
								<td><input class="form-check-input" id="myCheck0"
									type="checkbox" onclick="myFunction(1, citt0, via0)"></td>

							</tr>
							<tr>

								<td>Salerno</td>
								<td>Via Roma, 5</td>
								<td><input class="form-check-input" type="checkbox"
									id="myCheck1" onclick="myFunction()"></td>

							</tr>
						</tbody>
					</table>
				</div>

				<div class="percorso" style="padding: 20px; margin-top: 50px;">
					<form action="operazioneCompletata.jsp">
						<table class="table" id="table">

							<tbody>
								<tr>
									<td id="id">1.</td>
									<td id="citta0">Salerno</td>
									<td id="via0">Via Lungomare Colombo, 14</td>
									<td>ore: <select name="ore" id="ore" class="ore">

									</select></td>
									<td>minuti: <select name="minuti" id="minuti"
										class="minuti">

									</select></td>


								</tr>

							</tbody>
						</table>

						<button type="submit"
							style="background-color: #70D0AE; border-color: #70D0AE; width: 300px; margin-left: 65%;"
							class="btn btn-primary">CONFERMA</button>
					</form>
				</div>


			</div>





		</div>
	</div>
</body>
</html>