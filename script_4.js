//ARRAY OF INVENTORS ----------------------------------------
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

//ANSWER -----------------------------------------------------
//Filtrer les entrepreneurs qui sont nés dans les années 70
console.log("Voici les entrepreneurs qui sont nés dans les années 70 :");
console.log(entrepreneurs.filter(entrepreneur => entrepreneur.year > 1970 && entrepreneur.year < 1980));

//Sortir une array contenant le prénom et le nom des entrepreneurs
console.log("Voici les prénoms et noms des entrepreneurs :");
console.log(entrepreneurs.map(entrepreneur => entrepreneur.first + " " + entrepreneur.last));

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Voici l'âge des entrepreneurs aujourd'hui :");
console.log(entrepreneurs.map(entrepreneur => 2022 - entrepreneur.year));

//Trier les entrepreneurs par ordre alphabétique du nom de famille
console.log("Voici les entrepreneurs triés par ordre alphabétique du nom de famille :");
console.log(entrepreneurs.sort((a, b) => a.last > b.last ? 1 : -1));