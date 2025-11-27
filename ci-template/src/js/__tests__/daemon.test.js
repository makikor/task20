import { Daemon } from "../daemon";

test('case: object create daemon', () => {
  const result = new Daemon('GOGI', 'Daemon');
      const obraz = {
    name: 'GOGI',
    type:'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  expect(result).toEqual(obraz);
});