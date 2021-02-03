<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>IsiLav - Login</title>
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
<link rel="stylesheet" type="text/css" href="css/index.css">

<script type="text/javascript">
	$(document).ready(function() {

		var denied = "${denied}";
		var inputEmail = document.getElementById("usr");
		var inputPasw = document.getElementById("pwd");
		var labelCredenzialiErrate = document.getElementById("credenzialiErrate");
		
		if (denied == "true") {
						
			inputEmail.style.borderColor = "#FF6666";
			inputPasw.style.borderColor = "#FF6666";
			
			labelCredenzialiErrate.style.color = "#FF6666";
			labelCredenzialiErrate.style.display = "block";
			
		} else {
			
			inputEmail.style.borderColor = "#3E4349";
			inputPasw.style.borderColor = "#3E4349";
			
			inputEmail.style.backgroundColor = "white";
			inputPasw.style.backgroundColor = "white";
			
			labelCredenzialiErrate.style.display = "none";

		}

	});

	
	
	function validateForm() {

		var form = document.forms["Log"];

		if (!validateEmail(form.email))
			return false;

		if (!validatePassword(form.password))
			return false;

	}

	function validateEmail(Email) {
		var Regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
		if (Email.value.match(Regexp))
			return true;
		else {
			alert('Il campo Email deve contenere solo lettere, trattini e spazi!');
			Email.focus();
			return false;
		}
	}

	function validatePassword(Password) {
		var Regexp = /^[A-Za-z0-9]{5,}$/
		if (Password.value.match(Regexp))
			return true;
		else {
			alert('Il campo Password deve contenere solo lettere e numeri ed essere almeno 5 caratteri!');
			Password.focus();
			return false;
		}
	}
</script>



</head>
<body>


	<%
		session.setAttribute("denied", false);
	%>


	<div class="wrapper">


		<div class="MyContainer">
			<div class="row">
				<img src="img/icona-verde.png"
					style="width: 105px; height: 105px; float: left;" />
				<div style="font-size: 70px;">
					<label class="titolo">IsiLav</label>
				</div>
			</div>

			<form id="Log" action="Login" method="POST"
				onsubmit="return validateForm()">

				<div id="credenzialiErrate" class="form-group" style="display: none;">
					<h4 class="errore" style="font-weight: bold;">Email o password errate!</h4>
				</div>

				<div class="form-group">
					<label for="usr">Email:</label> <input type="email" name="email"
						class="form-control" id="usr" required>
				</div>

				<div class="form-group">
					<label for="pwd">Password:</label> <input type="password"
						name="password" class="form-control" id="pwd" required>
				</div>

				<div class="button-login">
					<button type="submit" class="btn ">
						Login <i class="fas fa-caret-right"></i>
					</button>
				</div>

			</form>
			<div class="form-group">
				<a href="resetPassw.jsp" style="color: #70D0AE">Password
					dimenticata?</a>
			</div>
		</div>


	</div>
</body>


</html>