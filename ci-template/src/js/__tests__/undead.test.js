import { Undead } from "../undead";

test('case: object create Undead', () => {
  const result = new Undead('GOGI', 'Undead');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Undead');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
});