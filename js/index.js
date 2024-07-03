const pokemons = []
const findedPokemon = []

async function callApi() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=48'
  const result = await fetch(apiUrl).then((res) => res.json())
  const data = result.results

  data.forEach(res => pokemons.push(res))
  createCards(pokemons)
}

callApi()

async function renderPokemon(url) {
  const apiUrl = `${url}`
  const result = await fetch(apiUrl).then((res) => res.json())

  return result
}

async function createCards(array) {
  const container = document.querySelector('.cards-content')

  for (let i = 0; i < array.length; i++) {
    const pokemon = await renderPokemon(pokemons[i].url)
    findedPokemon.push(pokemon)

    const card = document.createElement('div')

    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image')
    const img = document.createElement('img')
    img.src = findedPokemon[i].sprites.front_default
    img.classList.add('poke-image')
    cardImage.append(img)

    const name = document.createElement('h2')
    name.innerHTML = findedPokemon[i].name
    name.classList.add('poke-name')

    const typesDiv = document.createElement('div')
    typesDiv.classList.add('types-container')

    const p = document.createElement('p')
    p.innerHTML = 'Tipos:'

    const types = document.createElement('div')
    types.classList.add('div-types')
    const objTypes = findedPokemon[i].types
    for (let i = 0; i < objTypes.length; i++) {
      const div = document.createElement('div')
      div.classList.add('child-types')
      const p = document.createElement('p')
      p.innerHTML = objTypes[i].type.name
      const icon = document.createElement('img')

      if (objTypes[i].type.name === 'grass') {
        icon.src = '../img/type-planta.webp'
      } else if (objTypes[i].type.name === 'poison') {
        icon.src = '../img/type-veneno.webp'
      } else if (objTypes[i].type.name === 'fire') {
        icon.src = '../img/type-fogo.webp'
      } else if (objTypes[i].type.name === 'flying') {
        icon.src = '../img/type-voador.webp'
      } else if (objTypes[i].type.name === 'water') {
        icon.src = '../img/type-agua.webp'
      } else if (objTypes[i].type.name === 'bug') {
        icon.src = '../img/type-inseto.webp'
      } else if (objTypes[i].type.name === 'normal') {
        icon.src = '../img/type-normal.webp'
      } else if (objTypes[i].type.name === 'electric') {
        icon.src = '../img/type-eletrico.webp'
      } else if (objTypes[i].type.name === 'ground') {
        icon.src = '../img/type-solo.webp'
      } else if (objTypes[i].type.name === 'fairy') {
        icon.src = '../img/type-fada.webp'
      } else if (objTypes[i].type.name === 'fighting') {
        icon.src = '../img/type-lutador.webp'
      } else if (objTypes[i].type.name === 'psychic') {
        icon.src = '../img/type-psiquico.webp'
      } else if (objTypes[i].type.name === 'rock') {
        icon.src = '../img/type-pedra.webp'
      } else if (objTypes[i].type.name === 'steel') {
        icon.src = '../img/type-aco.webp'
      } else if (objTypes[i].type.name === 'ice') {
        icon.src = '../img/type-gelo.webp'
      } else if (objTypes[i].type.name === 'ghost') {
        icon.src = '../img/type-fantasma.webp'
      } else if (objTypes[i].type.name === 'dragon') {
        icon.src = '../img/type-dragao.webp'
      } else if (objTypes[i].type.name === 'dark') {
        icon.src = '../img/type-sombrio.webp'
      } 

      div.append(p, icon)
      types.append(div)
    }

    const button = document.createElement('button')
    button.textContent = 'See more'
    button.classList.add('see-more-btn')
    button.dataset.pokemon = findedPokemon[i].name


    typesDiv.append(p, types)

    card.classList.add('card')
    card.append(cardImage, name, typesDiv, button)
    container.append(card)
  }
  const main = document.querySelector('main')
  main.append(container)
}

console.log(findedPokemon);
const main = document.querySelector('main')

async function getPokemonByName(pokeName) {
  showLoader()
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    const result = await fetch(url).then(res => res.json())
    const data = result

    const pokemonName = data.name
    const pokemonFrontImage = data.sprites.front_default
    const pokemonBackImage = data.sprites.back_default

    const h2 = document.createElement('h2')
    h2.innerText = pokemonName

    const divImage = document.createElement('div')
    divImage.classList.add('div-image')
    const leftImage = document.createElement('img')
    const rightImage = document.createElement('img')

    leftImage.src = pokemonFrontImage
    rightImage.src = pokemonBackImage

    divImage.append(leftImage, rightImage)

    const p = document.createElement('p')
    p.classList.add('p-types')
    p.innerHTML = 'Tipos:'

    const tipos = data.types

    const contentInfo = document.querySelector('.pokemon-infos-content')
    contentInfo.append(h2, divImage, p)
    const divEnvolvet = document.createElement('div')
    divEnvolvet.classList.add('div-envolvet')
    for (let i = 0; i < tipos.length; i++) {
      const divEl = document.createElement('div')
      divEl.classList.add('child-types-icon')
      const p = document.createElement('p')
      p.innerHTML = tipos[i].type.name
      const icon = document.createElement('img')

      if (tipos[i].type.name === 'grass') {
        icon.src = '../img/type-planta.webp'
      } else if (tipos[i].type.name === 'poison') {
        icon.src = '../img/type-veneno.webp'
      } else if (tipos[i].type.name === 'fire') {
        icon.src = '../img/type-fogo.webp'
      } else if (tipos[i].type.name === 'flying') {
        icon.src = '../img/type-voador.webp'
      } else if (tipos[i].type.name === 'water') {
        icon.src = '../img/type-agua.webp'
      } else if (tipos[i].type.name === 'bug') {
        icon.src = '../img/type-inseto.webp'
      } else if (tipos[i].type.name === 'normal') {
        icon.src = '../img/type-normal.webp'
      } else if (tipos[i].type.name === 'electric') {
        icon.src = '../img/type-eletrico.webp'
      } else if (tipos[i].type.name === 'ground') {
        icon.src = '../img/type-solo.webp'
      } else if (tipos[i].type.name === 'fairy') {
        icon.src = '../img/type-fada.webp'
      } else if (tipos[i].type.name === 'fighting') {
        icon.src = '../img/type-lutador.webp'
      } else if (tipos[i].type.name === 'psychic') {
        icon.src = '../img/type-psiquico.webp'
      } else if (tipos[i].type.name === 'rock') {
        icon.src = '../img/type-pedra.webp'
      } else if (tipos[i].type.name === 'steel') {
        icon.src = '../img/type-aco.webp'
      } else if (tipos[i].type.name === 'ice') {
        icon.src = '../img/type-gelo.webp'
      } else if (tipos[i].type.name === 'ghost') {
        icon.src = '../img/type-fantasma.webp'
      } else if (tipos[i].type.name === 'dragon') {
        icon.src = '../img/type-dragao.webp'
      } else if (tipos[i].type.name === 'dark') {
        icon.src = '../img/type-sombrio.webp'
      } 

      divEl.append(p, icon)
      divEnvolvet.append(divEl)
      contentInfo.append(divEnvolvet)
    }

    const status = document.createElement('p');
    const divpStats = document.createElement('div')
    divpStats.append(status)
    status.innerHTML = 'Status:'; 
    status.classList.add('status'); 
    const contentStatus = document.createElement('div'); 
    contentStatus.classList.add('content-status'); 
    const stats = data.stats; 
    contentStatus.appendChild(divpStats); 
    const statusDivEl = document.createElement('div')
    statusDivEl.classList.add('status-div-el')
    for (let i = 0; i < stats.length; i++) { 
      const statElement = document.createElement('p'); 
      statElement.innerHTML = `- ${stats[i].stat.name}: ${stats[i].base_stat}`.toUpperCase()
      statElement.classList.add('status-element')
      
      statusDivEl.append(statElement)
    } 
    
    contentStatus.appendChild(statusDivEl);
    contentInfo.appendChild( contentStatus);
    console.log(data);
  } catch (err) {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Nenhum resultado encontrado'
    const body = document.querySelector('body')
    body.append(h1)
    if (h1) {
      body.textContent = ''
      body.append(h1)
    }

    console.log(err);
  }

  setInterval(() => {
    removeLoader()
  }, 1000 * 1)
}

main.addEventListener('click', (event) => {
  if (event.target.classList.contains('see-more-btn')) {
    const dataSet = event.target.dataset.pokemon;
    getPokemonByName(dataSet)
  }
})

function showLoader() {
  const loader = document.querySelector('.loader')
  loader.classList.remove('display')

  const main = document.querySelector('main')
  main.classList.add('display')
}

function removeLoader() {
  const loader = document.querySelector('.loader')
  loader.classList.add('display')
}

getPokemonByName('pidgey')



