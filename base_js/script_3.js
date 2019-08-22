number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var space = " ";
var star = "*";
i = 1;
while(i <= number) {
	space = space * (number-i);
	star *= i;
	i += 1;
}