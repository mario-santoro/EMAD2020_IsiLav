
# <img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/isilav-logo.png" width="200" height="100"> 

Progetto per l'esame Enterprise Mobile Application Devolopment del corso di laurea magistrale di Informatica.

## Indice
<ul>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#team">Team</a></li>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#current-system">Current System</a></li>
 	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#obiettivo">Obiettivo</a></li>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#architettura">Architettura</a></li>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#prerequisiti">Prerequisiti</a></li>
 	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#installation">Installation</a></li>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#risorse-cloud-microsoft-azure">Risorse Cloud "Microsoft Azure"</a></li>
	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#usage">Usage</a></li>
 	<li> <a href="https://github.com/mario-santoro/EMAD2020_IsiLav#brochure">Brochure</a></li>
</ul>


## Team
**Tutor**:
 - Prof.ssa Rita Francese
 - Dott. Alessandro Belmonte

**Studenti di Informatica**:
 - Davide Acanfora
 - Mario Santoro
 - Raffaele Marino
 
**Studenti di Economia**:
 - Antonio Campagna
 - Domenico D'Apice
 - Grazia Gregorio

## Current System
Attualmente la lavanderia industriale “SNB S.R.L.” è sprovvista di un applicativo per fornire i propri prodotti ai clienti online in maniera facile e veloce, senza dover usare metodi di contatto ormai obsoleti. Non avere un software che fornisce questi servizi comporta una perdita economica, di tempo per consegne e organizzazione con i clienti, nonché una perdita di interazione e scambio di informazioni con i clienti.

## Obiettivo
Lo scopo del progetto “IsiLav” è quello di realizzare un applicativo mobile, che permetta ai clienti dell’azienda in maniera rapida e user friendly di noleggiare i loro prodotti. Per la parte amministrativa invece verrà realizzato un applicativo web che permetta la gestione e amministrazione dei clienti, delle forniture e di tenere traccia degli ordini ricevuti e gli eventuali ritardi sulle restituzioni da parte dei clienti.

## Architettura
<img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/isilav-tecnologie.png" height="300">

## Prerequisiti
<ul>
	<li>Sottoscrizione Azure</li>
	<li>Key API Google Maps</li>	 
	<li>Email senza autenticazione a 2 fattori per l'invio di email automatiche</li>	
</ul>

## Installation
<b>Select</b>:
```console
$ npm install react-native-picker-select 
```
<b>React Native Element</b>: 
```console
$ npm install react-native-elements  
```
<b>Qr code</b>: 
```console
$ npm install react-native-svg --save
$ npm install react-native-qrcode-svg --save  
```
<b>Date</b>: 
```console
$ npm install @react-native-community/datetimepicker --save  
```
<b>Scanner QR code</b>:
```
$ expo install expo-camera
$ expo install expo-barcode-scanner 
```
<b>Mapp</b>: 
```console
$ expo install react-native-maps 
```
<b>GPS</b>:
```console
$ expo install expo-location
```
<b> Azure Function</b>: 
```console
$ npm install -g azure-functions-core-tools@3 
```
<b> MySQL</b>: 
```console
$ npm install sync-mysql --save
```
## Risorse Cloud "Microsoft Azure"
<ul>
	<li>Database SQL: per memorizzare in maniera persistente i dati</li>
	<li>Web App: caricamento dell'applicazione Web</li>
	<li>Azure Functions: piattaforma di elaborazione serverless basata su eventi</li>
</ul>

## Usage
<ul style="list-style-type: disc;">
    <li>Configurazione risorse Azure:<ul style="list-style-type: square;">
            <li>Database MySQL:  Una volta recatosi sul portale Azure di Microsoft l'utente dovrà creare la risorsa MySQL, accedendo prima al pannello di creazione di un Database MySQL presente nella pagina "Risorse" di Azure, successivamente creare la risorsa cliccando sul bottone "crea risorsa" e andare a settare i seguenti parametri: </li>
	<ul>
		<li>In Gruppo di risorse selezionare Crea nuovo, immettere nome del person group e quindi fare clic su OK</li>
		<li>In Nome del server immettere il nome del database</li>
		<li>In località selezionare "Europa Occidentale"</li>		
		<li>Versione 5.7</li>
		<li>Calcolo e archiviazione selezionare lo spazio e V.core che si intende utilizzare, (Basic 1vCore, 5GB al costo di 25,43 EUR al mese è stata la nostra scelta)</li>
		<li>In Nome amministratore settare il nome dell'amministratore</li>
		<li>Dopodiché settare la password del DB e confermarla</li>
		<li>Infine in rivedi e crea premere su "Crea"</li>
			
	</ul>
            </li>
            <li>Web App:
		    <ul>
		    	<li>In Gruppo di risorse selezionare un gruppo di risorse (o crearlo se inesistente) quindi fare clic su OK</li>
                    <li>In Nome immettere il nome da dare all'app web</li>
			    <li>In Pubblica lasciare selezionato "Codice"</li>
                    <li>Stack di runtime selezionare "Java 8"</li>
			    <li>Stack server Web Java selezionare "Tomcat 8.0"</li>
                    <li>Sistema operativo lasciare selezionato "Windows"</li>
			    <li>In area geografica selezionare "West Europe"</li>
                    <li>In SKU e dimensioni cliccare su "Modifica dimensioni" e selezionare il piano tariffario F1 con Infrastruttura condivisa 1GB di memoria e 60 minuti al giorno di calcolo Gratuito</li>
			    <li>Infine andare nella sezione "Rivedi e crea" e premere il bottone "Crea"</li>
			    <li>Per importare il codice dell'applicativo web, andare sulla risorsa appena creata e nella sezione "Distribuzione" premere su "Deployment Center (Classic)". In questa sezione usare tramie un software FTP client (ad esempio FileZilla) è possibile connettersi inserendo l'endpoint, nome utente e password del servizio reperibili cliccando su FTP e poi dashboard.</li>
			    <li>In FileZilla, dopo aver collegato con l'endpoint il servizio, aprire le cartelle fino a webapps e caricare il file ROOT.war e dopo pochi minuti sarà pronto al funzionamento.</li>
		    </ul>
	    </li>
            <li>Azure Functions:</li>
        </ul>
    </li>
    <li>Installazione dei pacchetti (inseriti nella sezione apposita) da terminale.</li>
    <li>Sostituzione key, url, database, email</li>
</ul>
<p><br></p>
 
## Brochure

<img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/IsiLavBrochure.png" height="500">
