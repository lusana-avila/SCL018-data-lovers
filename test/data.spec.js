
import {filterDataDirector, filterDataProducer, sortData} from '../src/data.js';


describe('filterDataDirector', () => {
  it('is a function', () => {
    expect(typeof filterDataDirector).toBe('function');
  });

  it('should return the result to director `Hayao Miyazaki`', () => {
    const data = [
      {director:'Gorō Miyazaki'},
      {director:'Hayao Miyazaki'},
      {director:'Hiromasa Yonebayashi'},
      {director:'Hiroyuki Morita'},
      {director:'Isao Takahata'},
      {director:'Yoshifumi Kondō'}
    ]
    const result = [{director:'Hayao Miyazaki'}]
    expect(filterDataDirector(data, 'Hayao Miyazaki')).toEqual(result);
  });
});

describe('filterDataProducer', () => {
  it('is a function', () => {
    expect(typeof filterDataProducer).toBe('function');
  });

  it('should return the result to producer `Hayao Miyazaki`', () => {
    const data = [
      {producer:'Hayao Miyazaki'},
      {producer:'Isao Takahata'},
      {producer:'Toru Hara'},
      {producer:'Toshio Suzuki'},
      {producer:'Yoshiaki Nishimura'}
    ]
    const result = [{producer:'Hayao Miyazaki'}]
    expect(filterDataProducer(data, 'Hayao Miyazaki')).toEqual(result);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should order the result from A to Z',() => {
    const data = [
      {title:'Castle in the Sky'},
      {title:'My Neighbor Totoro'},
      {title:'Grave of the Fireflies'},
      {title:'Only Yesterday'},
      {title:'Porco Rosso'} 
  ]
    const result = [
      {title:'Castle in the Sky'},
      {title:'Grave of the Fireflies'},
      {title:'My Neighbor Totoro'},
      {title:'Only Yesterday'},
      {title:'Porco Rosso'} 
  ]
  expect(sortData(data,'title')).toEqual(result); 
  });

  it('should order the result from Z to A',() => {
    const data = [
      {title:'Castle in the Sky'},
      {title:'My Neighbor Totoro'},
      {title:'Grave of the Fireflies'},
      {title:'Only Yesterday'},
      {title:'Porco Rosso'} 
  ]
    const result = [
      {title:'Porco Rosso'},
      {title:'Only Yesterday'},
      {title:'My Neighbor Totoro'},
      {title:'Grave of the Fireflies'},
      {title:'Castle in the Sky'} 
  ]
  expect(sortData(data, 'title', 'titleDesc')).toEqual(result); 
  });
});

