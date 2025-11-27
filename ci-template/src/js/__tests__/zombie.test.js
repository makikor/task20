import { Zombie } from "../zombie";

test('case: object create Undead', () => {
  const result = new Zombie('GOGI', 'Zombie');
      const obraz = {
    name: 'GOGI',
    type:'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(result).toEqual(obraz);
});