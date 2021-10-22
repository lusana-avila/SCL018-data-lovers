import {filterDataDirector,filterDataProducer,sortData } from './data.js';

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
  const optionDirector = selectDirector.value;
  printCard.innerHTML = 0;
  const selectOptionDirector = filterDataDirector(films,optionDirector);
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
  const optionProducer = selectProducer.value;
  printCard.innerHTML = 0;
  const selectOptionProducer = filterDataProducer(films,optionProducer);
  for (let i = 0; i < selectOptionProducer.length; i++){
    printCard.innerHTML += drawCard (selectOptionProducer[i]);
  }
};
//Generando evento que cambiara el total de cartas por las cartas filtradas por producer
selectProducer.addEventListener("change", filterProducer);

//llamando al elemento select que contiene las opciones para ordenar 
const selectOrder = document.getElementById("order");
//Pasando argumentos a funcion sortData para que ordene por title
const selectOrderTitle = () => {
  const dataMovie =  films;
  const dataTitle = "title";
  const optionOrderTitle = selectOrder.value;
  printCard.innerHTML = 0;
  const selectOptionOrderTitle = sortData(dataMovie, dataTitle, optionOrderTitle,)
  for (let i = 0; i < selectOptionOrderTitle.length; i++){
    printCard.innerHTML += drawCard (selectOptionOrderTitle[i]);
  }
};
//Generando evento que cambiara el orden actual de las cartas por el orden seleccionado por el usuario
selectOrder.addEventListener("change", selectOrderTitle);

//Pasando argumentos a funcion sortData para que ordene por año
const selectOrderDate = () => {
  const dataMovie =  films;
  const dataDate = "release_date";
  const optionOrderDate = selectOrder.value;
  printCard.innerHTML = 0;
  const selectOptionOrderDate = sortData(dataMovie, dataDate, optionOrderDate,)
  for (let i = 0; i < selectOptionOrderDate.length; i++){
    printCard.innerHTML += drawCard (selectOptionOrderDate[i]);
  }
};
//Generando evento que cambiara el orden actual de las cartas por el orden seleccionado por el usuario
selectOrder.addEventListener("change", selectOrderDate);
//hola