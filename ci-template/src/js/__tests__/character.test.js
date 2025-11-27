import {Character} from '../character';


test('case: object create warman', () => {
  const result = new Character('GOGI', 'Bowman');
    const obraz = {
    name: 'GOGI',
    type:'Bowman',
    health: 100,
    level: 1
  }
  expect(result).toEqual(obraz);
});

test('case: length name object warman > 10', () => {
expect(() => {
     new Character('Ecsdcsdcccsdcsdcsdc', 'Bowman')}).toThrow(Error);
});


test('case: object_length name Warman <2', () => {
expect(() => {
    new Character('B', 'Bowman')}).toThrow(Error);
});



test('case: object type Warman did not type', () => {
  expect(() => {
    new Character('TOM', 'scsdc')}).toThrow(Error)
});

