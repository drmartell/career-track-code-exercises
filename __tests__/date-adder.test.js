const add = require('../challenges/date-adder');

describe('add to date function', () =>{
  it('adds seconds to a date', () => { expect(add(new Date('2020-01-01'), '30s')).toEqual(new Date('2020-01-01T00:00:30.000Z')); });
  it('adds minutes to a date', () => { expect(add(new Date('2020-01-01'), '30m')).toEqual(new Date('2020-01-01T00:30:00.000Z')); });
  it('adds hours to a date', () => { expect(add(new Date('2020-01-01'), '30h')).toEqual(new Date('2020-01-02T06:00:00.000Z')); });
  it('adds days to a date', () => { expect(add(new Date('2020-01-01'), '30d')).toEqual(new Date('2020-01-31T00:00:00.000Z')); });
  it('adds weeks to a date', () => { expect(add(new Date('2020-01-01'), '30w')).toEqual(new Date('2020-07-29T00:00:00.000Z')); });
  it('adds months to a date', () => { expect(add(new Date('2020-01-01'), '30M')).toEqual(new Date('2022-07-01T23:00:00.000Z')); });
  it('adds years to a date', () => { expect(add(new Date('2020-01-01'), '30y')).toEqual(new Date('2050-01-01T00:00:00.000Z')); });
});
