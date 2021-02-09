
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
	<li>Java</li>
	<li>Node.js</li>
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
$ npm install sync-mysql --save</br>
```
## Risorse Cloud "Microsoft Azure"
<ul>
	<li>Database SQL: per memorizzare in maniera persistente i dati</li>
	<li>Web App: caricamento dell'applicazione Web</li>
	<li>Azure Functions: piattaforma di elaborazione serverless basata su eventi<li>
</ul>

## Usage
<ul>
	<li>Configurazione risorse Azure:</li>
	
	<li>Installazione pacchetti</li>
	
	<li>Sostituzione key, url, database, email</li>
</ul>

## Brochure

<img src="https://github.com/mario-santoro/EMAD2020_IsiLav/blob/main/Documentazione/IsiLavBrochure.png" height="500">
