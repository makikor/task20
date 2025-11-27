import { Undead } from "../undead";

test('case: object create Undead', () => {
  const result = new Undead('GOGI', 'Undead');
      const obraz = {
    name: 'GOGI',
    type:'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  expect(result).toEqual(obraz);
});