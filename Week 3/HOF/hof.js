const students = [
  {
    name: "Amanuel Zelalem",
    age: 20,
    id: "UGR/2723/15",
    year: 2,
    department: "Med",
    college: "Sefere Selam",
    cgpa: 3.4,
  },
  {
    name: "Marta Tesfaye",
    age: 21,
    id: "UGR/2771/15",
    year: 3,
    department: "Computer Science",
    college: "4kilo",
    cgpa: 3.6,
  },
  {
    name: "Kaleab Kassa",
    age: 22,
    id: "UGR/2772/15",
    year: 4,
    department: "Civil Engineering",
    college: "AAiT",
    cgpa: 3.2,
  },
  {
    name: "Lidia Alemu",
    age: 23,
    id: "UGR/2773/15",
    year: 1,
    department: "Mechanical Engineering",
    college: "AAiT",
    cgpa: 3.8,
  },
  {
    name: "Bereket Berhanu",
    age: 24,
    id: "UGR/2774/15",
    year: 2,
    department: "COTM",
    college: "EiABC",
    cgpa: 3.5,
  },
  {
    name: "Hana Gebre",
    age: 20,
    id: "UGR/2775/15",
    year: 3,
    department: "Economics",
    college: "Commerce",
    cgpa: 3.7,
  },
  {
    name: "Elias Alemayehu",
    age: 21,
    id: "UGR/2776/15",
    year: 4,
    department: "Law",
    college: "6 kilo",
    cgpa: 3.1,
  },
  {
    name: "Netsanet Hailu",
    age: 22,
    id: "UGR/2777/15",
    year: 1,
    department: "Math",
    college: "4 kilo",
    cgpa: 3.9,
  },
  {
    name: "Yohannes Desta",
    age: 23,
    id: "UGR/2778/15",
    year: 2,
    department: "Architecture",
    college: "EiABC",
    cgpa: 3.3,
  },
  {
    name: "Melat Mulugeta",
    age: 24,
    id: "UGR/2779/15",
    year: 3,
    department: "Computer Science",
    college: "4 kilo",
    cgpa: 3.6,
  },
  {
    name: "Samuel Gebre",
    age: 20,
    id: "UGR/2780/15",
    year: 4,
    department: "Music",
    college: "Yared",
    cgpa: 3.2,
  },
  {
    name: "Hirut Bekele",
    age: 21,
    id: "UGR/2781/15",
    year: 1,
    department: "Painting",
    college: "Art",
    cgpa: 3.8,
  },
  {
    name: "Tamrat Abebe",
    age: 22,
    id: "UGR/2782/15",
    year: 2,
    department: "Architecture",
    college: "EiABC",
    cgpa: 3.5,
  },
  {
    name: "Rahel Assefa",
    age: 23,
    id: "UGR/2783/15",
    year: 3,
    department: "Electrical Engineering",
    college: "AAiT",
    cgpa: 3.7,
  },
  {
    name: "Yared Bekele",
    age: 24,
    id: "UGR/2784/15",
    year: 4,
    department: "Chemical Engineering",
    college: "AAiT",
    cgpa: 3.1,
  },
];
// for (i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// forEach: Executes a provided function once for each array element.

// students.forEach(function (student, index, array) {
//   console.log(student.name, index, array);
// });
// filter : Creates a new array with all elements that pass the test implemented by the provided function.
// const arch = [];
// for (i = 0; i < students.length; i++) {
//   if (students[i].department === "Architecture") {
//     arch.push(students[i]);
//   }
// }

// console.log(arch);

// const arch = students.filter(function (student, index, array) {
//   return student.cgpa > 3.7;
// });
// console.log(arch);
// map : Creates a new array populated with the results of calling a provided function on every element in the calling array.

// const names = [];
// for (i = 0; i < students.length; i++) {
//   names.push(students[i].name);
// }

// console.log(names);

// const names = students.map(function (st) {
//   return st.age;
// });
// console.log(names);

// reduce : Executes a reducer function on each element of the array, resulting in a single output value.
let totoal = 0;
for (i = 0; i < students.length; i++) {
  totoal += students[i].age;
}
console.log(totoal);

const total2 = students.reduce(function (accumulator, element) {
  return accumulator + element.age;
}, 1);

console.log(total2);
