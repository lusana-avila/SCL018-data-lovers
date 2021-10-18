// estas funciones son de ejemplo

export const filterDataDirector = (data, selecDirector) => {
  const filterResultado = data.filter((film) => film.director === selecDirector)
  return filterResultado;
};

export const filterDataProducer = (data, selecProducer,) => { 
  const filterResultado = data.filter((film) => film.producer === selecProducer)
  return filterResultado;
};
