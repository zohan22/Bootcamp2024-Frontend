const url = "https://pokeapi.co/api/v2/pokemon";

const contenedorBotones = document.querySelector(".contenedor-botones");
const contenedorScore = document.querySelector(".contenedor-score");

const numero = document.getElementById("numero");
const limite = document.getElementById("limite");
const cuentaRegresiva = document.getElementById("cuenta-regresiva");

const imagenPokemon = document.querySelector('.img-pokemon');
const infoPokemon = document.querySelector('.contenido-pokemon');
const adivina = document.getElementById('adivina');

const siguiente = document.querySelector("siguiente");
// let temp, contador=11;

//Paso 7: Inicializar las variables
let idPokemonUsados = [];
let contador = 10;
let puntos = 0;
let temp;
let limitePokemons = 5;
let tiempoActivo = true;

//Paso:1 Creamos la funcion fetch para obtener los datos del pokemon
async function obtenerPokemon(id) {
    const respuesta = await fetch(`${url}/${id}`);
    const datos = await respuesta.json();
    return datos;
}

//Paso 4: creamos funcion random
function obtenerIdAleatorioDelPokemon() {
    return Math.floor(Math.random() * 999) + 1;
}

//Paso 11 crear funcion que barajeara 
function mezclarArray(array) {
    return array.sort(() => Math.random() - 0.5)
}

// function obtenertImagenId(id) {
//     const imageString = '00' + id;
//     return imageString.slice (-3);
// }

// 15 funcion para actualizar el resultado 
function mostrarResultado(resultado) {
    adivina.textContent = resultado;
}

function temporizador() {
    clearInterval(temp);
    contador = 10;
    cuentaRegresiva.textContent = contador;
    tiempoActivo = true;
    temp = setInterval(() => {
        contador--;
        cuentaRegresiva.textContent = contador;
        if(contador === 0) {
            clearInterval(temp);
            mostrarResultado("¡Se acabó el tiempo!");
            tiempoActivo = false;
            setTimeout(siguientePokemon, 1000);
        }
    }, 1000);
}

// Paso 5: funcion para cargar preguntas con opciones
async function cargarPreguntasConOpciones() {
    if(idPokemonUsados.length >= limitePokemons) {
        mostrarResultado("¡Juego terminado!");
        return;
    }

    //paso 6: buscar la respuesta correcta
    let pokemonId = obtenerIdAleatorioDelPokemon();

    //7.2: Verificar si la pregunta ya ha sido utilizado
    while(idPokemonUsados.includes(pokemonId)) {
        pokemonId = obtenerIdAleatorioDelPokemon();
    }

    //7.3: Si un pokemon aun no ha sido mostrado se agrega a las id  y se configura como un nuevo pokemon id 
    idPokemonUsados.push(pokemonId);
    const pokemon = await obtenerPokemon(pokemonId);

    //paso 8: Crear un array de opciones
    const opciones = [pokemon.name];
    const idOpciones = [pokemon.id];
    //Paso 9: buscar nombres de pokemon adicionales para usar como opciones
    while(opciones.length < 4) {
        let idPokemonAleatorio = obtenerIdAleatorioDelPokemon();
        // Paso 10: 
        while(idOpciones.includes(idPokemonAleatorio)) {
            idPokemonAleatorio = obtenerIdAleatorioDelPokemon();
        }
        idOpciones.push(idPokemonAleatorio);

        //Paso 10.1
        const pokemonAleatorio = await obtenerPokemon(idPokemonAleatorio);
        const opcionAleatoria = pokemonAleatorio.name;
        opciones.push(opcionAleatoria);
    }

    mezclarArray(opciones);

    //12 limpiar los resultados previos y actualizar la imagen del pokemon buscado
    infoPokemon.innerHTML = `
                <h3 class="dato">---DESCRIPTION---</h3>
                
                <p class="dato">Weight: ${pokemon.weight}</p>
                <p class="dato">height: ${pokemon.height}</p>
                <p class="dato">Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                <p class="dato">Abilities: ${pokemon.abilities.map(abilitiesInfo => abilitiesInfo.ability.name).join(',')}</p>
            `;

    imagenPokemon.innerHTML = `
                <img class="hide" alt="${pokemon.name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png">
            `;
    //13 crear elementos html desde las opciones del array 
    contenedorBotones.innerHTML = "";
    opciones.forEach((opcion) => {
        const boton = document.createElement('button');
        boton.className = "btn-nombre";
        boton.textContent = opcion;
        boton.onclick = (evento) => verificarRespuesta(opcion === pokemon.name, evento);
        contenedorBotones.appendChild(boton);
    })

    temporizador();
}  

//Paso 14 crear funcion de verificar
function verificarRespuesta(esCorrecto, evento) {
    // 14.1 verificar si el boton es seleccionado y si es falso retarnamos falso
    const seleccionadoBoton = document.querySelector(".seleccionado");

    //14.2 seleccionado no podemos hacer nada
    if(seleccionadoBoton) {
        return;
    }

    evento.target.classList.add("seleccionado");

    const imagen = document.querySelector('.img-pokemon img');
    if(imagen) {
        imagen.classList.remove('hide');
    }


    if(esCorrecto) {
        clearInterval(temp);
        mostrarResultado("¡Respuesta Correcta!");
        puntos++;
        numero.textContent = puntos;
        evento.target.classList.add("correcto");
    } else {
        mostrarResultado("¡Respuesta Incorrecta...!");
        contador = Math.max(0, contador-2);
        cuentaRegresiva.textContent = contador;
        evento.target.classList.add("incorrecto");
    }
}

function siguientePokemon() {
    mostrarResultado("Who's that Pokemon?");
    cargarPreguntasConOpciones();
}

cargarPreguntasConOpciones();


