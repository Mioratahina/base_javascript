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

//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("******** Est-ce que tous les livres ont été au moins empruntés une fois ? ********");
var tabYes = [];
var tabNo = [];
for ( let count in books){
  if (books[count].rented > 1) {
    tabYes.push(books[count].rented);
  } else {
    tabNo.push(books[count].rented);
  }
  if (tabNo.length === 1){
    console.log("NON, Certain(s) ont été empruntés une fois.");
  } else {
    console.log("OUI, Tous les livres ont déjà été empruntés plus d'une fois.");
  }
}

//Le livre le plus emprunté
console.log("******** Le livre le plus emprunté : ********");
var max = 1;
var tabBookMostRented = [];
for (let count in books){
  if (books[count].rented > max) {
    max = books[count].rented;
    tabBookMostRented.push("Titre :" + books[count].title + ", id : " + books[count].id + ", nombre d'emprunte : " + books[count].rented);
    } else {
    max = max;
  }
}
console.log(tabBookMostRented[tabBookMostRented.length - 1]);

//Le livre le moins emprunté
console.log("******** Le livre le moins emprunté : ********");
var min = 50;
var tabBookLessRented = [];
for (let count in books){
  if (books[count].rented < min) {
    min = books[count].rented;
    tabBookLessRented.push("Titre :" + books[count].title + ", id : " + books[count].id + ", nombre d'emprunte : " + books[count].rented);
    } else {
    min = min;
  }
}
console.log(tabBookLessRented[tabBookLessRented.length - 1]);

//Trouvons le livre avec l'ID : 873495
console.log("******** Le livre avec l'ID : 873495 ********");
var tabBookId = [];
for (let count in books){
  if (books[count].id == 873495){
    tabBookId.push("Titre : " + books[count].title + ", id : " + books[count].id + ", nombre d'emprunte : " + books[count].rented);
    break;
  }
}
console.log(tabBookId);

//Suppression du livre avec l'ID: 133712
console.log("******** Suppression du livre avec l'ID : 133712 ********");
var tabNew = [];
for (let count in books){
  if (books[count].id == 133712){
    tabNew = tabNew;
  } else {
    tabNew.push("Titre : " + books[count].title + ", id : " + books[count].id + ", rented : " + books[count].rented);
  }
}
console.log(tabNew);

//Triage par alphabet des livres sans celui avec l'id : 133712
console.log("******** Triage des titres de livre par alphabet : ********");
