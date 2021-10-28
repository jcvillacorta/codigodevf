const pokemonContainer = document.querySelector(".row")
const searchInput = document.getElementById('search');

/*function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => createPokemon(data))
}*/

const fetchPokemon = async id =>{
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const pokemon = await res.json()
  createPokemon(pokemon)
}

function fetchPokemons(number) {
    for (let i=1; i <= number; i++) {
        fetchPokemon(i)
    }
}

function createPokemon (pokemon) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("col")

    const card = document.createElement("div")
    card.classList.add("card")

    const spriteContainer = document.createElement("div")
    spriteContainer.classList.add("img-container")

    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite) //para crear un fondo de la imagen

    const contenedor = document.createElement("div")
    contenedor.classList.add("card-body")

    const number = document.createElement("p")
    number.textContent = `#${pokemon.id}`

    const name = document.createElement("p")
    name.classList.add("name")
    name.textContent = pokemon.name

    const botonmodal = document.createElement("a")
    botonmodal.innerHTML = `<a href="" data-bs-toggle="modal" data-bs-target="#pokemon${pokemon.id}"  class="btn btn-danger">Detalles</a>`

    contenedor.appendChild(name)
    contenedor.appendChild(number)
    contenedor.appendChild(botonmodal)

    card.appendChild(spriteContainer)
    card.appendChild(contenedor)

  // construyendo modal
    const modal = document.createElement("div")
    modal.setAttribute("class", "modal fade")
    modal.setAttribute("id", `pokemon${pokemon.id}`)
    modal.setAttribute("tabindex", -1)
    modal.setAttribute("aria-labelledby", "exampleModalLabel")
    modal.setAttribute("aria-hidden", "true")

    const modalDialog = document.createElement("div")
    modalDialog.setAttribute("class", "modal-dialog modal-md modal-dialog-centered")

    const modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")

    const modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")

    const modalTitle = document.createElement("h5")
    modalTitle.classList.add("modal-title")
    modalTitle.innerHTML = `${pokemon.name}`

    const modalButton = document.createElement("button")
    modalButton.setAttribute("type", "button")
    modalButton.setAttribute("class", "btn-close")
    modalButton.setAttribute("data-bs-dismiss", "modal")
    modalButton.setAttribute("aria-label", "Close")

    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(modalButton)

    const modalBody = document.createElement("div")
    modalBody.classList.add("modal-body")
    modalBody.appendChild(renderPokemonTipo(pokemon.types))
    modalBody.appendChild(progressBars(pokemon.stats))

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)

    modalDialog.appendChild(modalContent)

    modal.appendChild(modalDialog)
    
    cardContainer.appendChild(card)
    cardContainer.appendChild(modal)
    pokemonContainer.appendChild(cardContainer)

}

function progressBars(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");
  
    for (let i = 0; i < 3; i++) {
      const stat = stats[i];
  
      const statPercent = stat.base_stat + "%";
      const statContainer = document.createElement("stat-container");
      statContainer.classList.add("stat-container");
  
      const statName = document.createElement("p");
      statName.textContent = stat.stat.name;
  
      const progress = document.createElement("div");
      progress.classList.add("progress");
  
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressBar.setAttribute("aria-valuenow", stat.base_stat);
      progressBar.setAttribute("aria-valuemin", 0);
      progressBar.setAttribute("aria-valuemax", 200);
      progressBar.style.width = statPercent;
  
      progressBar.textContent = stat.base_stat;
  
      progress.appendChild(progressBar);
      statContainer.appendChild(statName);
      statContainer.appendChild(progress);
  
      statsContainer.appendChild(statContainer);
    }
  
    return statsContainer;
  }
  
// crear función para mostrar tipo de pokemon

function renderPokemonTipo (types){
    const tipoContainer = document.createElement("div");
    tipoContainer.classList.add("tipo-container");
    tipoContainer.textContent = "Tipo:"
    types.forEach(type => { // trabajar cada tipo, sea uno o dos
        const tipoTextElement = document.createElement("div")
        tipoTextElement.textContent = type.type.name
        tipoContainer.appendChild(tipoTextElement)
    })

    return tipoContainer
}

fetchPokemons(151)

  //Search function
  function search() {
    const searchvalue = searchInput.value;
    const li = document.querySelectorAll('.col');
    const filSearchValue = searchvalue.toLowerCase();
    for (let i = 0; i < li.length; i++) {
      const pokemonName = li[i].querySelector('.name').innerText.toLowerCase();
      if (pokemonName.indexOf(filSearchValue) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  //Runs the search function when an search input is detected
  searchInput.addEventListener('keyup', () => {
    search();
  });