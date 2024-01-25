
        async function getPokemonData(pokemonId) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data = await response.json();
            return data;
        }

        async function showPokemonCard() {
            let pokemon
            if (localStorage.getItem('pokemon')) {
                pokemon = JSON.parse(localStorage.getItem('pokemon'));
            } else {
                
                pokemon = await getPokemonData(1);

                localStorage.setItem('pokemon', JSON.stringify(pokemon));
            }

            const pokemonCardDiv = document.getElementById('pokemonCard');
            const cardHTML = `${pokemon.name} ${pokemon.sprites.front_default}" alt="${pokemon.name} Altura: ${pokemon.height} Peso: ${pokemon.weight} hg`;
            pokemonCardDiv.innerHTML = cardHTML;
        }
        showPokemonCard();
  
