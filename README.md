# PokemonAPI
Creare una web app in cui gli utenti possano visualizzare e "catturare" Pokémon, gestire la loro collezione personale (MyPokemon) e ottenere informazioni dettagliate sui Pokémon stessi.
----------------------------------------------------------------------------------------------------------------------------
Sommario

1. Introduzione
2. Architettura del Progetto
3. Installazione e Configurazione
4. Componenti del Progetto
5. Deployment su Vercel
6. Note Finali

1. Introduzione

Questa documentazione fornisce una guida tecnica per lo sviluppo e
l'esecuzione della web app che permette agli utenti di:

- Visualizzare e cercare Pokémon
  	utilizzando la PokémonAPI.
- "Catturare" Pokémon e
  	gestire una lista personale (MyPokemon).
- Visualizzare informazioni dettagliate sui Pokémon.

Tecnologie Utilizzate

- Frontend: HTML,
  	CSS, JavaScript
- Persistenza Dati:localStorage
- API: Pokémon REST API
- Ambiente di Sviluppo: Visual Studio Code
- Deployment: Vercel

2. Architettura del Progetto


Struttura File

```
/root
├── index.html          # File principale HTML
├── app.js              # Logica JavaScript per interazione e gestione dell'app
├── style.css           # Stile CSS per l'app
├── README.md           # Documentazione
```

Interazione con la Pokémon API

L'app utilizza l'endpoint /pokemon/?offset=0&limit=1302per recuperare l'elenco completo dei Pokémon. Per ogni Pokémon,vengono recuperati i dettagli tramite il campo urlspecifico.

Persistenza dei Dati

La lista MyPokemon è salvata nel localStoragedel browser, garantendo che i dati siano persistenti tra i refreshdella pagina.

---

3. Installazione e Configurazione


Prerequisiti

- Browser moderno per eseguire l'app
- Editor di testo come Visual Studio Code

Configurazione del Progetto

1. Clonare il repository del progetto:
2. Aprire il progetto con Visual Studio Code.
3. Testare l'app in locale:
	- Aprire index.htmldirettamente nel browser.
	- Utilizzare l'estensione Live Server di VSCode per l'anteprima live.
---

4. Componenti del Progetto


4.1 index.html

- Struttura principale dell'app.
- Include:
	- Barra di ricerca per filtrare iPokémon.
	- Due contenitori per lavisualizzazione dei Pokémon disponibili e catturati.
	- Modale per i dettagli del Pokémon.

4.2 app.js

Gestisce:
- Fetch dati dall'API:Funzione fetchPokemon() per ottenerel'elenco completo dei Pokémon.
- Cattura Pokémon:Funzione catchPokemon() per aggiungereun Pokémon alla lista MyPokemon, salvandolo nel localStorage.
- Gestione MyPokemon:Funzione displayMyPokemon() permostrare la lista e releasePokemon()per rimuovere un Pokémon.
- Ricerca Pokémon:Funzione searchPokemon() per filtrare iPokémon in base a nome, abilità, mosse e statistiche.
- Modale Dettagli: Funzioni showDetails(),openModal(), e closeModal()per mostrare informazioni dettagliate sui Pokémon.

4.3 style.css

- Stile visivo delle card e pulsanti.
- Utilizzo di classi dinamiche basate sul tipo del Pokémon (card-fire, button-grass, ecc.).
- Modale per i dettagli dei Pokémon.
---

5. Deployment su Vercel


Prerequisiti

- Creare un account su Vercel.

Procedura di Deployment


Aggiornamenti Successivi

---

6. Note Finali


Test e Debug

- Verificare che l'app funzioni correttamente nei principali browser (Chrome, Firefox, Edge).
- Testare la persistenza dei dati e il caricamento delle immagini dei Pokémon.

Possibili Estensioni

- Autenticazione Utenti:
  	Utilizzare una piattaforma per creare profili personalizzati.
- Leaderboard Pokémon:
  	Aggiungere una sezione per mostrare i Pokémon catturati da altri
  	utenti.
- Grafica Avanzata: Integrare librerie come TailwindCSS per migliorare l'interfaccia.
Grazie per aver utilizzato questa documentazione!



