//import {example} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//Accediendo a la data de las peliculas
const films = data.films;

//Creando cartas
const printCard = document.getElementById("containerFilms");
const drawCard = (films) =>{
  return `
  <section class = "containerCard">
  <img src = "${films.poster}">
  <h2>${films.title}</h2>
  </section>
  `
};
for (let i = 0; i < films.length; i++){
  printCard.innerHTML += drawCard (films[i]);
}
//console.log(films);
//console.log(example, data);
