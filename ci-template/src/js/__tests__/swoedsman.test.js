import { Swordsman } from "../swordsman";

test('case: object create Swordsman', () => {
  const result = new Swordsman('GOGI', 'Swordsman');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Swordsman');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
});