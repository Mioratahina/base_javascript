console.log("****** Détermination du nom de chaque codon ******");
var ARN = prompt("enter le nombre d'acide aminé :")
var codon = [];
var aminoAcidName = [];
i = 0;
while (i < ARN.length){
	codon.push(ARN[i] + ARN[i+1] + ARN[i+2]);
	i += 3;
}
console.log(codon);
for (let count in codon){
	if (codon[count] == "UCU" || codon[count] == "UCC" || codon[count] == "UCA" || codon[count] == "UCG" || codon[count] == "AGU" || codon[count] == "AGC"){
		aminoAcidName.push("Sérine");
	}
	if (codon[count] == "CCU" || codon[count] == "CCC" || codon[count] == "CCA" || codon[count] == "CCG"){
		aminoAcidName.push("Proline");		
	}
	if (codon[count] == "UUA" || codon[count] == "UUG") {
		aminoAcidName.push("Leucine");
	}
	if (codon[count] == "UUU" || codon[count] == "UUC"){
		aminoAcidName.push("Phénylalanine");
	}
	if (codon[count] == "CGU" || codon[count] == "CGC" || codon[count] == "CGA" || codon[count] == "CGG" || codon[count] == "AGA" || codon[count] == "AGG"){
		aminoAcidName.push("Arginine");
	}
	if (codon[count] == "UAU" || codon[count] == "UAC"){
		aminoAcidName.push("Tyrosine");
	}
}
console.log(aminoAcidName);