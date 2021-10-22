// estas funciones son de ejemplo

export const filterDataDirector = (data, selecDirector) => {
  const filterResultado = data.filter((film) => film.director === selecDirector)
  return filterResultado;
};

export const filterDataProducer = (data, selecProducer,) => { 
  const filterResultado = data.filter((film) => film.producer === selecProducer)
  return filterResultado;
};

export const sortData = (data, sortBy, sortOrder) => {
  const resultOrder = data.sort((a,b) => {
    if (a[sortBy]<b[sortBy]){
      return -1;
    }
    if (a[sortBy]>b[sortBy]){
      return 1;
    }
  });
  if ( sortOrder === "titleDesc" || sortOrder === "releaseDateDesc" ) {
    return resultOrder.reverse(); 
  }
  return resultOrder;
}