//  Variables
const favoritosSeccion = document.getElementById('section-fav')
const listaDigimon = document.getElementById("container-digimon");
const listaFavoritos = document.getElementById("favoritos");
const digimons = document.querySelectorAll(".card");
let favoritos = []

cargarEventListeners();
function cargarEventListeners() {
  // Agregar digimon presionan 'Agregar a fav' 
  listaDigimon.addEventListener("click", agregarFav);

  // Elimina digimon de la lista
  favoritosSeccion.addEventListener('click', eliminarDigimon)
}

// Funciones

function agregarFav(e) {
  e.preventDefault();

  if (e.target.classList.contains("btn")) {
    const cardSeleccionada = e.target.parentElement.parentElement;
    leerDatos(cardSeleccionada);
  }
}

function eliminarDigimon(e){
  e.preventDefault()

  if(e.target.classList.contains('borrar')){
  const idDigimon = e.target.getAttribute('id') 
  
  // Eliminar del arreglo favoritos por el id

  favoritos = favoritos.filter(card => card.id !== idDigimon)
  console.log(favoritos)
  
  favoritosHTML()
}
}


// leer datos

function leerDatos(card) {
  // objeto con contenido
  const digimonInfo = {
    imagen: card.querySelector('img').src,
    titulo: card.querySelector('h5').textContent,
    id: card.querySelector('a').getAttribute('id')
    
  }
  // Agregar elementos a fav
  favoritos = [...favoritos, digimonInfo]
  console.log(favoritos)
  
  favoritosHTML()
}



function favoritosHTML(){
  limpiarHTML()
  favoritos.forEach(card => {
    const div = document.createElement('div')
    div.innerHTML = `<div class="card" style="width: 18rem; margin: 1rem;" >
    <img src="${card.imagen}" class="card-img-top" alt="...">
    <div class="card-body d-flex justify-content-center flex-column">
        <h5 class="card-title" style="text-align: center;">${card.titulo}</h5>
      <a href="#" class="btn btn-danger borrar" id="${card.id}">Eliminar de Favoritos</a>
    </div>
  </div>`

  // Agrega el html en la lista de favs
  listaFavoritos.appendChild(div)
  })
}

function limpiarHTML(){
  while(listaFavoritos.firstChild){
    listaFavoritos.removeChild(listaFavoritos.firstChild)
  }
}