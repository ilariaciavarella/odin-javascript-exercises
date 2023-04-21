const today = new Date().getFullYear();
console.log(today);

const findTheOldest = function(objArr) {
  objArr.map(person => {
    if (person.hasOwnProperty('yearOfDeath')) {
      return person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      return person.age = today - person.yearOfBirth;
    }});

  objArr.sort((a, b) => a.age < b.age ? 1 : -1);
  return objArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;