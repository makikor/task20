import { Magician } from "../magician";

test('case: object create Magician', () => {
  const result = new Magician('GOGI', 'Magician');
  const obraz = {
    name: 'GOGI',
    type:'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  expect(result).toEqual(obraz);
});