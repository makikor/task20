import { Bowman } from "../bowman";

test('case: object create bowman', () => {
  const result = new Bowman('GOGI', 'Bowman');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Bowman');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
});