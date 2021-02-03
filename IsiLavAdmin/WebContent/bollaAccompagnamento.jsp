<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.DateFormat"%>
<%@page import=" java.text.SimpleDateFormat"%>
<%@page import="Bean.Cliente"%>
<%@page import="Bean.Operazione"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>HTML to PDF Eample</title>
<meta name="viewport" content="widtd=device-widtd, initial-scale=1" />
<script src="script/html2pdf.bundle.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/bollaAccompagnamento.css">
 
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 

    
   
</head>

<body>
	 
	<div style="display:none;">
	<div id="invoice">
	<%
	Cliente c = (Cliente) session.getAttribute("cliente");
	Operazione o = (Operazione) session.getAttribute("operazione");
%>
		<table id="tabellaSup">
	  		<tr>
				<td>
					<div id="header" class="row">
						<img src="img/icona-verde.png" id="icona" />
						<div id="titolo">
							<label>S.N.B. SRL</label>
							<br>
							<label>Sede legale e Stabilimenti :</label>
							<br>
							<label>Via Brodolini 2/F</label>
							<br>
							<label>84091 Battipaglia (SA) - Italia</label>
							<br>
							<label>Tel : 0828/342311</label>
							<br>
							<label>P.iva : 03543660652</label>
						</div>
					</div>
				</td>
			</tr>
		
			<tr>
				<td>
					<div id="contenitore">
					
						<div id="consegna">
							<label><b>Indirizzo di consegna</b></label>
							<br>
							<label><%=c.getNomeAttivita()%></label>
							<br>
							<br>
							<label><%=o.getFermata().getHub().getVia() %></label>
							<br>
							<label><%=o.getFermata().getHub().getCap() %> <%=o.getFermata().getHub().getCitta() %></label>
						</div>
						
						<div id="intestatario">
							<label><b>Intestatario documento</b></label>
							<br>
							<label><%=c.getRagSociale() %></label>
							<br>
							<br>
							<label><%=c.getSede() %></label>
							<br>
							<label><%=c.getCAP() %> <%=c.getCitta() %></label>
							<br>
							<label>P.IVA / COD. FISCALE : <%=c.getpIVA() %></label>
						</div>
					
					</div>
				</td>
			</tr>
		
			
			<tr>
				<td>
					<div id="numDoc">
						<div id="contNumDoc">
							<label><b>Tipo documento</b></label>
							<br>
							<label>Documento di trasporto (DDT)</label>
						</div>
						
						<div id="infoNumDoc">
							<label><b>Nr.documento</b></label>
							<br>
							<label><%=o.getId_operazione() %></label>
						</div>
					</div>
				</td>
			</tr>
			
			<tr>
				<td>
					<div id="dataDoc">
						<div id="contDataDoc">
							<label><b>Causale del trasporto</b></label>
							<br>
							<label>Biancheria Nolo</label>
						</div>
						
						<div id="infoDataDoc">
							<label><b>Data documento</b></label>
							<br>
							<label><%=o.getDataScelta().substring(8,10)%>/<%=o.getDataScelta().substring(5,7)%>/<%=o.getDataScelta().substring(0,4) %> </label>
						</div>
					</div>
				</td>
			</tr>
			
			<tr>
				<td>
					<div id="pag">
						<div id="contPag">
							<label><b>Consegna / porto</b></label>
							<br>
							<label>//</label>
						</div>
						
						<div id="infoPag">
							<label><b>Pagina</b></label>
							<br>
							<label>00</label>
						</div>
					</div>
				</td>
			</tr>
			
		</table>
		
		<div id="centrale">
		
			<table id="listaArticoli">
				<tr>
					<td>
						<div class="lsitaArt">
							<label><b>Articolo</b></label>
						
							<%for(int i=0;i<o.getOrdine().getNoleggiati().size();i++){ %>
							<br>
							<label><%=o.getOrdine().getNoleggiati().get(i).getNomeArticolo() %></label>
						
							<%} %>
						</div>
						
					</td>
					<td>
						<div class="lsitaArt">
							<label><b>Descrizione</b></label>
							<%for(int i=0;i<o.getOrdine().getNoleggiati().size();i++){ %>
							<br>
							<label><%=o.getOrdine().getNoleggiati().get(i).getDescBreve() %></label>
						
							<%} %>
						</div>
						
					</td>
					<td>
						<div class="lsitaArt">
							<label><b>UM</b></label>
								<%for(int i=0;i<o.getOrdine().getNoleggiati().size();i++){ %>
							<br>
							<label>PZ</label>
						
							<%} %>
						</div>
					</td>
					<td>
						<div class="lsitaArt">
							<label><b>Quantità</b></label>
						<%for(int i=0;i<o.getOrdine().getNoleggiati().size();i++){ %>
							<br>
							<label><%=o.getOrdine().getNoleggiati().get(i).getQuant() %></label>
						
							<%} %>
						</div>
					</td>
				</tr>
			</table>
		
		</div>
		
		<table id="tabellaInf">		
	  			<tr>
					<td>
						<div id="beni">
							<label><b>Aspetto esteriore dei beni</b></label>
							<br>
							<label>A vista</label>
						</div>
					</td>	
					<td>	
						<div id="mezzo">
							<label><b>Trasporto a mezzo</b></label>
							<br>
							<label>MITTENTE</label>
						</div>
					</td>
					<td>
						<div id="nColli">
							<label><b>Nr. colli</b></label>
							<br>
							<label>00</label>
						</div>
					</td>
					<td>
						<div id="pColli">
							<label><b>Peso colli</b></label>
							<br>
							<label>0kg</label>
						</div>
					</td>
					
					<td>
						<div id="data">
							<label><b>Data e ora trasporto</b></label>
							<br>
							<label><%=o.getDataScelta().substring(8,10)%>/<%=o.getDataScelta().substring(5,7)%>/<%=o.getDataScelta().substring(0,4) %> 08:00</label>
						</div>
					</td>
				
				</tr>
		</table>
		
		<table id="firme">
			<tr>
				<td>
					<div id="vettore">
						<label><b>Firma vettore</b></label>
						<br>
						<label>____________</label>
					</div>
				</td>

				<td>
					<div id="conducente">
						<label><b>Firma conducente</b></label>
						<br>
						<label>____________</label>
					</div>
				</td>

				<td>
				<div id="destinatario">
						<label><b>Firma destinatario</b></label>
						<br>
						<label>____________</label>
					</div>
				</td>
			</tr>		
		</table>

	</div>
	</div>
<script>
$(document).ready(function() {
      p();
    async function p(){
    	
    	 // Choose tde element tdat our invoice is rendered in.
        const element = document.getElementById("invoice");
        // Choose tde element and save tde PDF for our user.
     
    await html2pdf().from(element).save("bollaAccompagamento")
      
       
    	    var dataSetting= "${data}";
	 
			window.location = "./VisualizzaElencoOR?data="+dataSetting;
    }

        
		});
		

</script>
</body>
</html>