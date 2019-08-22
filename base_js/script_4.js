const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//La liste des entrapreneurs nés en 70
console.log("La liste des entrepreneurs nés en 70 :");
let tab = [];
for (let count in entrepreneurs) {
  let tab = String(entrepreneurs[count].year);
  if (tab[2] === "7") {
    console.log(entrepreneurs[count].first);
  }
}

//Nom eet prénom des entrepreneurs
console.log("Prénom et Nom des entrepreneurs :");
var tab1 = [];
for (let count in entrepreneurs) {
  first_name = entrepreneurs[count].first;
  last_name = entrepreneurs[count].last;
  tab1.push(first_name + " " + last_name);
}
console.log(tab1);

//L'age de chaque entrepreneur
console.log("L'age de chaque entrepreneurs :");
for (let count in entrepreneurs) {
  let entrepreneursBirhtday = entrepreneurs[count].year;
  let dateNow = 2019;
  entrepreneursYear = dateNow - entrepreneursBirhtday;
  console.log(entrepreneurs[count].first + " has " + entrepreneursYear + " years old.");
}

//triage par alphabet du nom de famille de chaque entrepreneur
console.log("Triage par alphabet du nom de famille des entrepreneurs :");
var tab_last_name = [];
for (let count in entrepreneurs) {
  tab_last_name.push(entrepreneurs[count].last);
}
console.log(tab_last_name.sort());