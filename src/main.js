import {example} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//Accediendo a la data de las peliculas
const films = data.films;

//Accediendo a las imagenes
const filmPosters = films.map((film) => film.poster);

console.log(filmPosters)


//console.log(dataFilms);
//console.log(example, data);
