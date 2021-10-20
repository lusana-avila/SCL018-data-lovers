
import { filterDataDirector, filterDataProducer } from '../src/data.js';


describe('filterDataDirector', () => {
  it('is a function', () => {
    expect(typeof filterDataDirector).toBe('function');
  });

  it('should return the result to director `Hayao Miyazaki`', () => {
    const data = [
      { director: 'Gorō Miyazaki' },
      { director: 'Hayao Miyazaki' },
      { director: 'Hiromasa Yonebayashi' },
      { director: 'Hiroyuki Morita' },
      { director: 'Isao Takahata' },
      { director: 'Yoshifumi Kondō' }
    ]
    const result = [{ director: 'Hayao Miyazaki' }]
    expect(filterDataDirector(data, 'Hayao Miyazaki')).toEqual(result);
  });
});

describe('filterDataProducer', () => {
  it('is a function', () => {
    expect(typeof filterDataProducer).toBe('function');
  });

  it('should return the result to producer `Hayao Miyazaki`', () => {
    const data = [
      { producer: 'Hayao Miyazaki' },
      { producer: 'Isao Takahata' },
      { producer: 'Toru Hara' },
      { producer: 'Toshio Suzuki' },
      { producer: 'Yoshiaki Nishimura' },
    ]
    const result = [{ producer: 'Hayao Miyazaki' }]
    expect(filterDataProducer(data, 'Hayao Miyazaki')).toEqual(result);
  });
});

