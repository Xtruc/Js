var nick = [];
for (var i = 0; true ;i++) {
	nick.push(prompt("Quel est le nom de votre frére ou soeur ?(Laissez vide si non)"));
		if (nick[i] !== '') {
			continue;
		}
		else {
			if(nick[0] === '') {
				alert("Vous n'avez pas de famille ?");
				break;
			}
			alert("Votre famille est composée de " + nick.join(','));
			break;
		}
}