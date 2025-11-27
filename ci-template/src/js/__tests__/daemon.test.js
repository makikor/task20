import { Daemon } from "../daemon";

test('case: object create daemon', () => {
  const result = new Daemon('GOGI', 'Daemon');
  expect(result.name).toBe('GOGI');
  expect(result.type).toBe('Daemon');
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
});