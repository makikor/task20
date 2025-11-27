import { Magician } from "../magician";

test('case: object create Magician', () => {
  const result = new Magician('GOGI', 'Magician');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Magician');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
});