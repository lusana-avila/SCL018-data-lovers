// estas funciones son de ejemplo

export const filterDataDirector = (data, selectDirector) => {
  const filterResultado = data.filter(film => film.director === selectDirector)
  return filterResultado;
};

export const filterDataProducer = (data, selectProducer) => { 
  const filterResultado = data.filter(film => film.producer === selectProducer)
  return filterResultado;
};

export const sortData = (data, sortBy, sortOrder) => {
  const resultOrder = data.sort((a,b) => {
    if (a[sortBy]>b[sortBy]){
      return 1;
    }
    if (a[sortBy]<b[sortBy]){
      return -1;
    }
  });
  if ( sortOrder === "titleDesc") {
    return resultOrder.reverse(); 
  }
  return resultOrder;
}