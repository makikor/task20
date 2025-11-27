import { Bowman } from "../bowman";

test('case: object create bowman', () => {
  const result = new Bowman('GOGI', 'Bowman');
    const obraz = {
    name: 'GOGI',
    type:'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  expect(result).toEqual(obraz);

});