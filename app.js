// URL per ottenere i dati dei Pokémon
const apiURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302';

// Riferimenti agli elementi del DOM
const pokemonListContainer = document.getElementById('pokemon-list');
const myPokemonListContainer = document.getElementById('my-pokemon-list');

// Carica i Pokémon salvati nel browser (se presenti)
let myPokemon = JSON.parse(localStorage.getItem('myPokemon')) || [];
let allPokemonData = []; // Salva i dettagli di tutti i Pokémon per la ricerca

// Funzione per ottenere i dati di tutti i Pokémon
async function fetchPokemon() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Ottieni i dettagli di ogni Pokémon
        const promises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        allPokemonData = await Promise.all(promises);

        // Crea le carte dei Pokémon solo se l'immagine è disponibile
        allPokemonData.forEach(pokemonData => {
            // Controlla se l'immagine è disponibile
            if (pokemonData.sprites.front_default) {
                const pokemonCard = createPokemonCard(pokemonData);
                pokemonListContainer.appendChild(pokemonCard);
            }
        });
    } catch (error) {
        console.error('Errore nel caricamento dei Pokémon:', error);
        alert('Errore nel caricamento dei Pokémon.');
    }
}


// Funzione per creare una carta Pokémon
function createPokemonCard(pokemonData) {
    if (!pokemonData.sprites.front_default) {
        return null; // Non creare la carta se l'immagine non esiste
    }

    const pokemonType = pokemonData.types[0]?.type.name || 'unknown';
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card', `card-${pokemonType}`); // Classe dinamica per il tipo
    pokemonCard.innerHTML = `
        <h3>${capitalize(pokemonData.name)}</h3>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" onclick="showDetails('${pokemonData.name}')">
        <button class="catch-btn ${getButtonClass(pokemonType)}" onclick="catchPokemon('${pokemonData.name}', '${pokemonData.sprites.front_default}')">Catch</button>
    `;
    return pokemonCard;
}

// Funzione per aggiungere un Pokémon alla lista
function catchPokemon(name, sprite) {
    if (!myPokemon.some(p => p.name === name)) {
        myPokemon.push({ name, sprite });
        localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
        displayMyPokemon();
        alert(`${capitalize(name)} catched.`);
    } else {
        alert(`${capitalize(name)} è già nella tua lista.`);
    }
}

// Funzione per mostrare la lista MyPokemon
function displayMyPokemon() {
    myPokemonListContainer.innerHTML = ''; // Svuota la lista
    myPokemon.forEach(pokemon => {
        // Trova il tipo del Pokémon salvato
        const pokemonData = allPokemonData.find(p => p.name === pokemon.name);
        const pokemonType = pokemonData ? pokemonData.types[0]?.type.name : 'unknown';

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card', `card-${pokemonType}`); // Aggiungi la classe per il colore del bordo
        pokemonCard.innerHTML = `
            <h3>${capitalize(pokemon.name)}</h3>
            <img src="${pokemon.sprite}" alt="${pokemon.name}" onclick="showDetails('${pokemon.name}')">
            <button class="catch-btn button-normal" onclick="releasePokemon('${pokemon.name}')">Release</button>
        `;
        myPokemonListContainer.appendChild(pokemonCard);
    });
}


// Funzione per rimuovere un Pokémon dalla lista
function releasePokemon(name) {
    myPokemon = myPokemon.filter(pokemon => pokemon.name !== name);
    localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
    displayMyPokemon();
}

// Funzione per mostrare i dettagli di un Pokémon
async function showDetails(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonData = await response.json();

        const modalDetails = document.getElementById('modal-details');
        modalDetails.innerHTML = `
            <h3>${capitalize(pokemonData.name)}</h3>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <p><strong>Tipo:</strong> ${pokemonData.types.map(t => capitalize(t.type.name)).join(', ')}</p>
            <p><strong>Abilità:</strong> ${pokemonData.abilities.map(a => capitalize(a.ability.name)).join(', ')}</p>
            <p><strong>Statistiche:</strong></p>
            <ul>
                ${pokemonData.stats.map(stat => `<li>${capitalize(stat.stat.name)}: ${stat.base_stat}</li>`).join('')}
            </ul>
        `;
        openModal();
    } catch {
        document.getElementById('modal-details').innerHTML = '<p>Errore nel caricamento dei dettagli del Pokémon.</p>';
        openModal();
    }
}

// Funzione per cercare Pokémon
function searchPokemon() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();

    // Filtra i Pokémon in base ai criteri (nome, tipo, statistiche, abilità)
    const filteredPokemon = allPokemonData.filter(pokemon => {
        const nameMatches = pokemon.name.toLowerCase().includes(searchQuery);
        const typeMatches = pokemon.types.some(t => t.type.name.toLowerCase().includes(searchQuery));
        const statMatches = pokemon.stats.some(stat => stat.base_stat.toString().includes(searchQuery));
        const abilityMatches = pokemon.abilities.some(ability => ability.ability.name.toLowerCase().includes(searchQuery));

        // La ricerca è valida se una delle condizioni è vera (nome, tipo, statistiche, abilità)
        return nameMatches || typeMatches || statMatches || abilityMatches;
    });

    // Aggiorna l'elenco visualizzato
    pokemonListContainer.innerHTML = ''; // Svuota l'elenco attuale
    if (filteredPokemon.length === 0) {
        pokemonListContainer.innerHTML = '<p>Nessun Pokémon trovato.</p>';
    } else {
        filteredPokemon.forEach(pokemon => {
            const pokemonCard = createPokemonCard(pokemon);
            pokemonListContainer.appendChild(pokemonCard);
        });
    }
}

// Funzione per scorrere direttamente alla lista My Pokémon
function scrollToMyPokemon() {
    // Scorri fino al contenitore della lista "My Pokémon"
    myPokemonListContainer.scrollIntoView({ behavior: 'smooth' });
}


// Funzione per aprire il modale
function openModal() {
    const modal = document.getElementById('pokemon-modal');
    modal.style.display = 'block';
}

// Funzione per chiudere il modale
function closeModal() {
    const modal = document.getElementById('pokemon-modal');
    modal.style.display = 'none';
}

// Chiudi il modale cliccando fuori dalla finestra
window.onclick = function (event) {
    const modal = document.getElementById('pokemon-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Funzione per ottenere la classe del pulsante in base al tipo del Pokémon
function getButtonClass(type) {
    const typeClasses = {
        fire: 'button-fire',
        water: 'button-water',
        grass: 'button-grass',
        electric: 'button-electric',
        psychic: 'button-psychic',
        bug: 'button-bug',
        normal: 'button-normal',
    };
    return typeClasses[type] || 'button-normal';
}

// Funzione per capitalizzare una stringa
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Inizializza l'applicazione
fetchPokemon();
displayMyPokemon();
