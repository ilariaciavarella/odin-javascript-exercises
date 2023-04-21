const today = new Date().getFullYear();
console.log(today);

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        //yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(objArr) {
  let mapped = objArr.map(person => {
    if (person.hasOwnProperty('yearOfDeath')) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return today - person.yearOfBirth;
    }});
  return mapped;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
