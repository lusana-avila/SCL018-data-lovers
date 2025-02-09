import {filterDataDirector,filterDataProducer,sortData } from './data.js';

import data from './data/ghibli/ghibli.js';

//Accediendo a la data de las peliculas
let films = data.films;
let newMovies = films;
//Creando cartas
const printCard = document.getElementById("containerFilms");
const drawCard = (films) =>{
  return `
  <section class = "containerCard" id="${films.id}">
    <section class = "containerPoster">
      <img src= "${films.poster}" class= "poster" >
    </section>
    <section class = "containerTitle">
      <p>${films.title}</p>
    </section>
  </section>
  `
};
const forFuction = (newMovie)=>{
  printCard.innerHTML = "";
  newMovie.forEach((newFilm)=>{
    printCard.innerHTML += drawCard(newFilm);
  })
};
forFuction(newMovies);

//Llamando al elemento select que contiene las opciones de director
const selectDirector = document.getElementById("filterDirector");
selectDirector.addEventListener("change", (event)=>{
  const selectedDirector = filterDataDirector(films, event.target.value);
  newMovies = selectedDirector;
  forFuction(selectedDirector);
  addEvents();
});

//Llamando al elemento select que contiene las opciones de producer
const selectProducer = document.getElementById("filterProducer");
selectProducer.addEventListener("change", (event)=>{
  const selectedProducer = filterDataProducer(films, event.target.value);
  newMovies = selectedProducer;
  forFuction(selectedProducer);
  addEvents();
});

//llamando al elemento select que contiene las opciones para ordenar 
const selectOrder = document.querySelector("#containerOrder");
selectOrder.addEventListener("change", (event)=>{
  const selectedOrderTitle = sortData(films, event.target.value, event.target.value);
  newMovies = selectedOrderTitle;
  forFuction(selectedOrderTitle);
  addEvents();
});

//Llamando al boton que te lleva al inicio
const btHome = document.getElementById("btHome");
btHome.addEventListener("click", function (){
  location.reload();
});

//Llamando al container que contendra la informacion de la segunda pagina
const printDescription = document.getElementById("containerDescription");
//Creando funcion que muestra el contenido de la segunda pagina 
const drawDescription = (films) =>{
  return`
  
  <section id="${films.id}" class="container-description-movies">
  <section class="container-inner">
    <section class="poster2">
      <img src="${films.poster}" class="">
    </section>

  <section class="description-movies">
    <article class="movies">
      <h1 class="title-movie">${films.title}</h1>
    </article>
    <article class="description">
      <P class="description-text"> ${films.description}</P>
    </article>
    <article class="score">
      <h3 class="title">Score: </h3>
      <h3 class="subtitle"> ${'\u00A0'+ films.rt_score}/100</h3>
    </article>
    <article class="date">
      <h3 class="title">Release Date: </h3>
      <h3 class="subtitle">${'\u00A0'+ films.release_date}</h3>
    </article>
    <article class="director">
      <h3 class="title">Director: </h3>
      <h3 class="subtitle">${'\u00A0'+ films.director}</h3>
    </article>
    <article class="producer">
      <h3 class="title">Producer: </h3>
      <h3 class="subtitle">${'\u00A0'+ films.producer}</h3>
    </article>
  </section>
  </section>
</section>
  `
};

//Llamando al containerMenu
const menu = document.getElementById("containerMenu");
const addEvents = () =>{
//Llamamos a nuestro containerCard y lo guardamos en una variable
  const buttonFilms = document.querySelectorAll(".containerCard");
//Creamos una funcion que imprimira el contenido de nuestra segunda pagina 
  function buttonfilmsDescription (id) {
    menu.style.display = "none";
    printCard.style.display = "none";
    const selectedFilm = films.filter(element => element.id === id);
    printDescription.innerHTML += drawDescription(selectedFilm[0])
  }
//Generamos el evento para mostrar el contenido de la segunda pagina
  buttonFilms.forEach((element)=> {
    const id = element.getAttribute("id");
    element.addEventListener("click",function(){
    buttonfilmsDescription(id)
    },false)
  });
};
addEvents()