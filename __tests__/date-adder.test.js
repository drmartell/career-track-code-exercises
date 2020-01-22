const add = require('../challenges/date-adder');

describe('add to date function', () =>{
  it('adds seconds to a date', () =>{ expect(add(new Date('2020-01-01'), '30s')).toEqual(new Date('2020-01-01T00:00:30.000Z')); });
});
