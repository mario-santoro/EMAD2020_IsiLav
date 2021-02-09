
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
    <ul style="list-style-type: disc;">
        <ul style="list-style-type: disc;">
            <li>Configurazione risorse Azure:<ol style="list-style-type: decimal;margin-left:62px;">
                    <li><a href="https://docs.microsoft.com/it-it/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal">Database SQL</a>: &nbsp;Una volta recatosi sul portale Azure di Microsoft l&apos;utente dovr&agrave; creare la risorsa SQL, accedendo prima al pannello di creazione di un Database SQL presente nella pagina &quot;Risorse&quot; di Azure, successivamente creare la risorsa cliccando sul bottone &quot;crea risorsa&quot; e andare a settare i seguenti parametri:<ul style="list-style-type: square;">
                            <li>In Gruppo di risorse selezionare Crea nuovo, immettere myResourceGroup e quindi fare clic su OK</li>
                            <li>In Nome database immettere il nome del database</li>
                            <li>In server selezionare Crea nuovo e compilare il modulo Nuovo server con i valori seguenti:<ul style="list-style-type: disc;">
                                    <li>Nome server: immettere mysqlserver e aggiungere alcuni caratteri per l&apos;univocit&agrave;. Non &egrave; possibile specificare un nome di server esatto da usare perch&eacute; i nomi di tutti i server di Azure devono essere univoci a livello globale, non solo univoci all&apos;interno di una sottoscrizione. Immettere quindi un valore come mysqlserver12345 e il portale segnala se &egrave; disponibile o meno.</li>
                                    <li>Account di accesso amministratore server: digitare azureuser.</li>
                                    <li>Password: immettere una password che soddisfi i requisiti e immetterla di nuovo nel campo Conferma password.</li>
                                    <li>Localit&agrave;: selezionare una localit&agrave; dall&apos;elenco a discesa.</li>
                                </ul>
                            </li>
                            <li>Lasciare l&apos;opzione Usare il pool elastico SQL? impostata su No.</li>
                            <li>In Calcolo e archiviazione selezionare Configura database.</li>
                            <li>Questo argomento di avvio rapido usa un database serverless, quindi selezionare Basic e quindi Applica.</li>
                            <li>Selezionare Avanti: Rete nella parte inferiore della pagina.</li>
                            <li>In Regole del firewall impostare Aggiungi indirizzo IP client corrente su S&igrave;. Lasciare l&apos;opzione Consenti alle risorse e ai servizi di Azure di accedere a questo server impostata su No.</li>
                            <li>Selezionare Avanti: Impostazioni aggiuntive nella parte inferiore della pagina.</li>
                            <li>Selezionare Rivedi e crea nella parte inferiore della pagina.</li>
                        </ul>
                    </li>
                    <li>Web App:</li>
                    <li>Azure Functions:</li>
                </ol>
            </li>
        </ul>
        <li>Installazione dei pacchetti (inseriti nella sezione apposita) da terminale.</li>
        <li>Sostituzione key, url, database, email</li>
    </ul>
</ul>
<p><br></p>
 
## Brochure

<img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/IsiLavBrochure.png" height="500">
