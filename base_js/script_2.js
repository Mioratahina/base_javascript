function factorielle(n) {
let factoriel = 1;
let i = 1
while (i <= n) {
	factoriel = factoriel * i;
	i += 1;
}
console.log('Le résultat est : ' + factoriel);
}
var number = prompt('Entrer le nombre à calculer : ')
console.log(factorielle(number));