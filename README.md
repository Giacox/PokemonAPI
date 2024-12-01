# Documentazione Tecnica per il Progetto Pokémon Web App
Creare una web app in cui gli utenti possano visualizzare e "catturare" Pokémon, gestire la loro collezione personale (MyPokemon) e ottenere informazioni dettagliate sui Pokémon stessi.
----------------------------------------------------------------------------------------------------------------------------


Introduzione

Questa documentazione fornisce una panoramica tecnica del progetto
Pokémon Web App, che consente agli utenti di
visualizzare, catturare e gestire Pokémon utilizzando i dati della
Pokémon API.
L'applicazione è stata sviluppata in Visual Studio Code,
i file sono gestiti in un repository GitHub, e il
deployment è stato effettuato tramite Vercel.

---

Architettura del Progetto


Struttura dei File

La struttura del progetto è organizzata come segue:


```
/PokemoAPI
│
├── index.html   # File HTML principale
├── style.css    # File CSS per il design
├── app.js       # File JavaScript per la logica dell'app
└── README.md    # Documentazione del progetto
```

Tecnologie Utilizzate

- HTML: Struttura
  	dell'applicazione.
- CSS: Stile e
  	design responsivo.
- JavaScript:
  	Logica e interazioni dinamiche.
- Pokémon API:
  	Fonte dei dati.
- LocalStorage:
  	Persistenza dei dati utente lato client.
- GitHub:
  	Versionamento del codice.
- Vercel: Deployment e hosting del progetto.
---

Requisiti Funzionali

1. Visualizzazione dei Pokémon
	- Lista dei Pokémon recuperata
	  		tramite la Pokémon API.
	- Ogni Pokémon è rappresentato da
	  		una card contenente:
		- Nome.
		- Sprite (immagine).
		- Pulsante Catch
		  			per catturare il Pokémon.
2. Cattura dei Pokémon
	- Un Pokémon può essere aggiunto
	  		alla collezione personale My Pokémon.
	- I Pokémon catturati vengono
	  		salvati in LocalStorage per garantire persistenza.
3. Visualizzazione dettagliata
	- Cliccando sull'immagine di un
	  		Pokémon, vengono mostrati:
		- Tipo.
		- Abilità.
		- Statistiche di base.
4. Gestione della collezione My Pokémon
	- Visualizzazione della lista dei
	  		Pokémon catturati.
	- Rimozione di Pokémon dalla
	  		collezione tramite il pulsante Release.
5. Ricerca Avanzata
	- Filtro per nome, tipo, abilità o statistiche.
---

Configurazione dell'Ambiente di Sviluppo

1. Prerequisiti
	- Installare Visual Studio
	  		Code.
	- Creare un account su GitHub
	  		e Vercel.
2. Clone del Repository
	- Clona il progetto dal repository GitHub:
	- Sostituisci username/repository
	  		con il nome del repository.
3. Strumenti Utilizzati
	- Estensioni consigliate per Visual
	  		Studio Code:
		- Live Server:
		  			Per visualizzare l'app in locale.
		- Prettier: Per
		  			la formattazione del codice.
4. Comandi Locali
	- Avviare un server locale con Live Server.
---

Deployment su Vercel

1. Collegamento del Repository
	- Accedi a Vercel.
	- Importa il repository GitHub
	  		cliccando su Import Project.
	- Configura le impostazioni e
	  		clicca su Deploy.
2. Verifica del Deployment
	- Dopo il deployment, verifica che l'applicazione sia
	  		accessibile tramite l'URL fornito da Vercel.
---

Descrizione dei File


index.html

Questo file contiene la struttura principale dell'applicazione:

- Barra di ricerca con il campo
  	input e pulsante.
- Lista dei Pokémon (dinamicamente
  	popolata tramite app.js).
- Sezione dedicata ai Pokémon
  	catturati (My Pokémon).
- Modale per mostrare i dettagli del Pokémon.

style.css

Definisce lo stile e il layout dell'applicazione:

- Classi dinamiche per i tipi di
  	Pokémon.
- Stile personalizzato per i
  	pulsanti in base al tipo.
- Design responsivo e supporto per interazioni (hover, focus).

app.js

Gestisce la logica dell'applicazione:

- Fetch dei dati dalla Pokémon API.
- Creazione dinamica delle card per
  	Pokémon e My Pokémon.
- Persistenza dei dati tramite
  	LocalStorage.
- Interazione con il DOM per le funzionalità di ricerca e
  	modale.
---

Funzionamento Dettagliato


1. Fetch dei Pokémon

Viene effettuata una richiesta a
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302.
I
dettagli dei Pokémon sono poi memorizzati in allPokemonData
per permettere funzionalità come la ricerca e l'accesso rapido.


2. Creazione delle Card

Ogni card di Pokémon è generata dinamicamente con le seguenti
proprietà:

- Nome e immagine.
- Classe CSS dinamica basata sul
  	tipo.
- Pulsante Catch o Release.

3. Persistenza con LocalStorage

I Pokémon catturati sono salvati in LocalStorage. Durante
l'inizializzazione (displayMyPokemon()),
i dati vengono caricati per popolare la lista My Pokémon.


4. Ricerca

La funzione searchPokemon() filtra i
Pokémon in base ai criteri inseriti (nome, tipo, statistiche,
abilità).


5. Visualizzazione dei Dettagli

Quando l'utente clicca sull'immagine di un Pokémon, la funzione
showDetails() mostra un modale con le
informazioni dettagliate.

---

Deployment Finale

L'applicazione è disponibile su Vercel all'URL:
pokemon-api.vercel.app.
Verifica
che tutte le funzionalità siano operative:

- Fetch dei Pokémon.
- Catch/Release.
- Ricerca.
- Dettagli.
---

Miglioramenti Futuri

- Paginazione per la lista dei
  	Pokémon. 
  	
- Autenticazione utente per
  	personalizzare la collezione.
- Supporto per temi scuri/chiari.



