console.log("Bienvenue dans le chat-bot");
var question = prompt("Your question: ");
if (question[question.length-1] == "?"){
	console.log("Ouais Ouais...");	
}
else {
	if (question.length === 0) {
		console.log("t'es en PLS ?");
	}
	else {
		if (question == question.toUpperCase()){
			console.log("Pwa, calme-toi...");
		}
		else {
			let quest = question.split(" ");
			for (let count in quest){
				if (quest[count] === "Fortnite") {
					value = 1;
					break;
				}
				else{
					value = 0;
				}
			}
			if (value === 1){
				console.log("on s' fait une partie soum-soum ?");
			}
			else {
				console.log("Balek");
			}
		}
	}
}