const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemon.forEach(pokemon => {
    
    pokemon.addEventListener('click',() => {
        //Remover a classe aberto do cartão aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //Ao clicar no Pokémon, adicionar a classe aberto ao cartão correspondente
        //Para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //Remover a classe ativo do Pokémon selecionado
        const pokemonAtivoNaLista = document.querySelector('.ativo')
        pokemonAtivoNaLista.classList.remove('ativo')
        
        //Adicionar a classe ativo ao Pokémon selecionado
        pokemon.classList.add('ativo')

    })
})