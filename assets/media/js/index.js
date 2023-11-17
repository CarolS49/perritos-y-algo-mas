const perroActualElement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random";
const spinner = document.getElementById("spinner"); //selecciona el spinner
spinner.classList.add("escondido"); //agrega la clase escondido para que el spinner no se muestre
document
  .getElementById("like")
  .addEventListener("click", () => rankingPerros("+"));
document
  .getElementById("dislike")
  .addEventListener("click", () => rankingPerros("-"));
const contenedorLikePerros = document.getElementById("contenedorLikePerros");
const contenedorDislikePerros = document.getElementById(
  "contenedorDislikePerros"
);
contenedorLikePerros.classList.add("escondido");
contenedorDislikePerros.classList.add("escondido");

document.getElementById("saltear").addEventListener("click", nuevoPerro);

perroActualElement.addEventListener("load", () => {
  perroActualElement.classList.toggle("escondido", false); //oculta la imagen
  spinner.classList.toggle("escondido", true); //muestra el spinner
});

async function nuevoPerro() {
  spinner.classList.toggle("escondido", false); //oculta el spinner
  perroActualElement.classList.toggle("escondido", true); //muestra el spinner

  const res = await fetch(API); //espera la respuesta del backend antes de leer el cuerpo
  const resJson = await res.json();
  perroActualElement.src = resJson.message;
}

//FUNCION RANKING PERROS
function rankingPerros(ranking) {
  console.log(ranking);
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = perroActualElement.src;
  if (ranking === "+") {
    contenedorLikePerros.appendChild(nuevaImagen);
  } else {
    contenedorDislikePerros.appendChild(nuevaImagen);
  }
  contenedorLikePerros.classList.toggle("escondido", false);
  contenedorDislikePerros.classList.toggle("escondido", false);
  nuevoPerro();
}

//EJECUCIÓN
nuevoPerro();
