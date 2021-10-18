import {filterDataDirector,filterDataProducer} from './data.js';

import data from './data/ghibli/ghibli.js';

//Accediendo a la data de las peliculas
const films = data.films;
//Creando cartas
const printCard = document.getElementById("containerFilms");
const drawCard = (films) =>{
  return `
  <section class = "containerCard">
    <section class = "containerPoster">
      <img src = "${films.poster}">
    </section>
    <section class = "containerTitle">
      <h2>${films.title}</h2>
    </section>
  </section>
  `
};
for (let i = 0; i < films.length; i++){
  printCard.innerHTML += drawCard (films[i]);
}

//Llamando al elemento select que contiene las opciones de director
const selectDirector = document.getElementById("filterDirector");
//Pasando argumentos a funcion filterDataDirector
const filterDirector = () => { 
  const OptionDirector = selectDirector.value;
  printCard.innerHTML = 0;
  const selectOptionDirector = filterDataDirector(films,OptionDirector);
  for (let i = 0; i < selectOptionDirector.length; i++){
    printCard.innerHTML += drawCard (selectOptionDirector[i]);
  }
};
//Generando evento que cambiara el total de cartas por las cartas filtradas por director
selectDirector.addEventListener("change", filterDirector);


//Llamando al elemento select que contiene las opciones de producer
const selectProducer = document.getElementById("filterProducer");
//Pasando argumentos a funcion filterDataProducer
const filterProducer = () => { 
  const OptionProducer = selectProducer.value;
  printCard.innerHTML = 0;
  const selectOptionProducer = filterDataProducer(films,OptionProducer);
  for (let i = 0; i < selectOptionProducer.length; i++){
    printCard.innerHTML += drawCard (selectOptionProducer[i]);
  }
};
//Generando evento que cambiara el total de cartas por las cartas filtradas por producer
selectProducer.addEventListener("change", filterProducer);




//console.log(example, data);
