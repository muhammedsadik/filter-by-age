const people = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Al",
    age: 15
  },
  {
    id: 2,
    firstName: "Mert",
    lastName: "Siyah",
    age: 18
  },
  {
    id: 3,
    firstName: "Ayşe",
    lastName: "Sarı",
    age: 19
  },
  {
    id: 4,
    firstName: "Canan",
    lastName: "Beyaz",
    age: 33
  },
  {
    id: 5,
    firstName: "Kadir",
    lastName: "Turuncu",
    age: 19
  },
];

const filteredAge = people.filter(p => p.age > 18);

console.log(filteredAge);