const hobbies = ["Sports", "Cooking"];
const age = 32;

hobbies.push("Reading");
console.log(hobbies);

const person = { age: 32 };
function getAdultYears(p) {
  p.age -= 18;
  return p.age;
}

console.log(getAdultYears({ ...person }));
console.log(person);
