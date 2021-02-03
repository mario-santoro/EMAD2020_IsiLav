<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Password Dimenticata</title>
<!-- jQuery CDN - Slim version (=without AJAX) -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
	crossorigin="anonymous"></script>
<!-- Popper.JS -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
	integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
	crossorigin="anonymous"></script>
<!-- Bootstrap JS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
	integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
	crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/resetPassw.css">


</head>
<body>

	<div class="wrapper">


		<div class="MyContainer">

			<div class="row">
				<a href="index.html"><img src="img/icona-verde.png"
					style="width: 105px; height: 105px; float: left;" /> </a>
				<div style="font-size: 70px;">
					<a href="index.html"> <label class="nomelogo">IsiLav</label></a>
				</div>

			</div>

			<div style="font-size: 40px;">
				<label class="titolo">Password Dimenticata?</label>
			</div>

			<div class="form-group">
				<p>Se hai dimenticato la password del tuo account, quest'area ti
					permette di recupearla. Ti verra' inviata una email con le
					istruzioni da seguire.</p>

			</div>
			<form action="SendMail" method="POST">
				<div class="form-group">
					<label for="usr">Email:</label> <input type="email"
						class="form-control" name="destinatario" id="usr" required>
				</div>

				<div class="button-login">
					<button type="submit" class="btn ">Prosegui</button>
				</div>

			</form>
		</div>


	</div>
</body>
</html>