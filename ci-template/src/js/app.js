import sum from './basic';
import { Bowman } from './bowman';
import { Daemon } from './daemon';
import { Magician } from './magician';
import { Swordsman } from './swordsman';
import { Undead } from './undead';
import { Zombie } from './zombie';


console.log('worked');

console.log(sum([1, 2]));

const a = new Bowman('MAS', 'Bowman');
console.log(a)
const b = new Daemon('TUK', 'Daemon');
console.log(b)
const c = new Magician('NON', 'Magician');
console.log(c)
const d = new Swordsman('POP', 'Swordsman');
console.log(d)
const f = new Undead('GAS', 'Undead');
console.log(f)
const h = new Zombie('VAW', 'Zombie');
console.log(h)

