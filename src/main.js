import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//Accediendo a la data de las peliculas
const films = data.films;

const printCard = document.getElementById("containerCard");
const drawCard = (films) =>{
  return `
  <img src = "${films.poster}">
  <h2>${films.title}</h2>
  `
};
for (let i = 0; i < films.length; i++){
  printCard.innerHTML += drawCard (films[i]);
}



//console.log(films);
//console.log(example, data);
