
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
<ul style="list-style-type: disc;margin-left:8px;">
    <li>Installazione dei pacchetti (inseriti nella sezione apposita) da terminale per l&rsquo;app mobile</li>
    <li>Sostituzione key, url, database, email:<ol style="list-style-type: circle;">
            <li>Inserire le proprie credenziali del DB MySQL nel progetto IsiLavAdmin (pannello amministrativo) nella classe &ldquo;IsiLavAdmin\src\BeanDAO\DriverManagerConnectionPool.java&rdquo;</li>
            <li>Inserire le proprie credenziali del DB MySQL nel progetto IsiLavBackend (backend applicativo mobile) in &ldquo;IsiLavBackend\database\database.ts&rdquo;</li>
            <li>Nel progetto IsiLavApp sostituire l&rsquo;URL API per le azure function in &ldquo;IsiLavApp\src\cliente\services\API.js&rdquo;</li>
            <li>Nel progetto IsiLav App inserire in &ldquo;IsiLav\app.json&rdquo; le proprie Google API key</li>
            <li>Sostituire nel progetto IsiLavAdmin nella classe &ldquo;IsiLavAdmin\src\Servlet\SendMail.java&rdquo; l&rsquo;email e la password mittente</li>
            <li>Sostituire nel progetto IsiLavAdmin nella classe &ldquo;IsiLavAdmin\src\Servlet\InserimentoCliente.java&rdquo; l&rsquo;email e la password mittente</li>
        </ol>
    </li>
    <li>Configurazione risorse Azure:<ol style="list-style-type: circle;">
            <li>Database MySQL: &nbsp; Una volta recatosi sul portale Azure di Microsoft l&apos;utente dovr&agrave; creare la risorsa MySQL, accedendo prima al pannello di creazione di un Database MySQL presente nella pagina &quot;Risorse&quot; di Azure, successivamente creare la risorsa cliccando sul bottone &quot;crea risorsa&quot; e andare a settare i seguenti parametri:<ul class="decimal_type" style="list-style-type: square;">
                    <li>In Gruppo di risorse selezionare Crea nuovo, immettere nome del person group e quindi fare clic su OK</li>
                    <li>In Nome del server immettere il nome del database</li>
                    <li>In localit&agrave; selezionare &quot;Europa Occidentale&quot;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</li>
                    <li>Versione 5.7</li>
                    <li>Calcolo e archiviazione selezionare lo spazio e V.core che si intende utilizzare, (Basic 1vCore, 5GB al costo di 25,43 EUR al mese &egrave; stata la nostra scelta)</li>
                    <li>In Nome amministratore settare il nome dell&apos;amministratore</li>
                    <li>Dopodich&eacute; settare la password del DB e confermarla</li>
                    <li>Infine in rivedi e crea premere su &quot;Crea&quot;</li>
                    <li>Per fare l&rsquo;import del Database &ldquo;isilav.sql&rdquo; presente in questo progetto, recarsi nella risorsa e&hellip;</li>
                </ul>
            </li>
            <li>Web App:&nbsp; &nbsp;<ul class="decimal_type" style="list-style-type: square;">
                    <li>In Gruppo di risorse selezionare un gruppo di risorse (o crearlo se inesistente) quindi fare clic su OK</li>
                    <li>In Nome immettere il nome da dare all&apos;app web</li>
                    <li>In Pubblica lasciare selezionato &quot;Codice&quot;</li>
                    <li>Stack di runtime selezionare &quot;Java 8&quot;</li>
                    <li>Stack server Web Java selezionare &quot;Tomcat 8.0&quot;</li>
                    <li>Sistema operativo lasciare selezionato &quot;Windows&quot;</li>
                    <li>In area geografica selezionare &quot;West Europe&quot;</li>
                    <li>In SKU e dimensioni cliccare su &quot;Modifica dimensioni&quot; e selezionare il piano tariffario F1 con Infrastruttura condivisa 1GB di memoria e 60 minuti al giorno di calcolo Gratuito</li>
                    <li>Infine andare nella sezione &quot;Rivedi e crea&quot; e premere il bottone &quot;Crea&quot;</li>
                    <li>Per importare il codice dell&apos;applicativo web, andare sulla risorsa appena creata e nella sezione &quot;Distribuzione&quot; premere su &quot;Deployment Center (Classic)&quot;</li>
                    <li>&nbsp;In questa sezione usare tramite un software FTP client (ad esempio FileZilla) &egrave; possibile connettersi inserendo l&apos;endpoint, nome utente e password del servizio reperibili cliccando su FTP e poi dashboard</li>
                    <li>In FileZilla, dopo aver collegato con l&apos;endpoint il servizio, aprire le cartelle fino a webapps e caricare il file ROOT.war presente in questa repository e dopo pochi minuti sar&agrave; pronto al funzionamento</li>
                </ul>
            </li>
            <li>Azure Functions:<ul style="list-style-type: square;">
                    <li>In Gruppo di risorse selezionare un gruppo di risorse (o crearlo se inesistente) quindi fare clic su OK</li>
                    <li>In nome immettere il nome dell&rsquo;app funzioni</li>
                    <li>In Pubblica lasciare selezionato &quot;Codice&quot;</li>
                    <li>Stack di runtime selezionare &quot;Node.js&quot;</li>
                    <li>In versione lasciare selezionato 14LTS</li>
                    <li>aerea geografica selezionare Europa occidentale</li>
                    <li>Infine andare nella sezione &quot;Rivedi e crea&quot; e premere il bottone &quot;Crea&quot;</li>
                    <li>In Visual studio code, nell&apos;estensione di Azure (loggare con l&apos;account Azure)e cliccare Deploy the function App (icona: blu freccia su), selezionare la risorsa Azure function creata, premere su deploy</li>
                </ul>
            </li>
        </ol>
    </li>
</ul>

## Brochure

<img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/IsiLavBrochure.png" height="500">
