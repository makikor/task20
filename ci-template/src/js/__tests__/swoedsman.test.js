import { Swordsman } from "../swordsman";

test('case: object create Swordsman', () => {
  const result = new Swordsman('GOGI', 'Swordsman');
      const obraz = {
    name: 'GOGI',
    type:'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(result).toEqual(obraz);
});