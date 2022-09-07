/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

const Man = {
   species: 'human',
   name: 'Vasyl',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Nothing can stop an idea whose time has come!',
};

const Woman = {
   species: 'human',
   name: 'Oksana',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'What\'s up?',
};

const Dog = {
   species: 'dog',
   name: 'Reks',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Hav-Hav',
};

const Cat = {
   species: 'cat',
   name: 'Pushok',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Meow',
};
const tinyWorld = [Man, Woman, Dog, Cat];

let newArrayWorld = tinyWorld.map((residents) => residents.species + '; ' + residents.name + '; ' + residents.gender + '; ' + residents.legs + '; ' + residents.hands + '; ' + residents.saying);

for (key of newArrayWorld) {
   print(key);
};
