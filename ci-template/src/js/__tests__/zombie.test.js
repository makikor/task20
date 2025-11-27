import { Zombie } from "../zombie";

test('case: object create Undead', () => {
  const result = new Zombie('GOGI', 'Zombie');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Zombie');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
});