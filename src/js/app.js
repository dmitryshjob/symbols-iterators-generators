import Person from './Person.js';
import Team from './Team.js';
import canIterate from './canIterate.js';

const newTeam = new Team();

const player1 = new Person('Zombie', 'Ivan', 100, 1, 40, 30);
const player2 = new Person('Bowman', 'Oleg', 100, 1, 60, 20);
const player3 = new Person('Magician', 'Vasya', 100, 1, 30, 50);

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
