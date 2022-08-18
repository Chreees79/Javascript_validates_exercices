//ARRAY OF BOOKS AND AUTHOR'S INFORMATIONS  ---------------------------------------------
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//ANSWERS ------------------------------------------------------
//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if(books.every(book => book.rented > 0)) {
  console.log("oui, tous les livres ont été au moins empruntés une fois");
}
//Quel est livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?");
let max = Math.max.apply(null, books.map(book => book.rented));
console.log(books.find(book => book.rented === max));

//Quel est le livre le moins emprunté ?
console.log("Quel est le livre le moins emprunté ?");
let min = Math.min.apply(null, books.map(book => book.rented));
console.log(books.find(book => book.rented === min));

//Trouver le livre avec l'ID: 873495
console.log("Quel est le livre ayant l'id: 873495")
console.log(books.find(book => book.id === 873495))

//Supprime le livre avec l'ID: 133712
console.log("Supprimer le livre avec l'id: 133712 (il sera affiché en premier et supprimé par la suite)")
console.log(books.find(book => book.id === 133712))
let index = books.indexOf(books.find(book => book.id === 133712))
books.splice(index, 1)
console.log(books)

//Trier les livres par ordre alphabétique
console.log("Trier les livres par ordre alphabétique")
console.log(books.sort((a,b) => a.title > b.title ? 1 : -1))