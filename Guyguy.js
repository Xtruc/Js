var bool = true, result, ope;
while(bool)
{
	ope = prompt("Quelle genre d'opérations ? (+,-,*,/,%");
	switch (ope) {
		case '+':
		result = parseInt(prompt("Nombre 1")) + parseInt(prompt("Nombre 2"));
		break;
		case '-':
		result = prompt("Nombre 1") - prompt("Nombre 2");
		break;
		case '*':
		result = prompt("Nombre 1") * prompt("Nombre 2");
		break;
		case '/':
		result = prompt("Nombre 1") / prompt("Nombre 2");
		break;
		case '%':
		result = prompt("Nombre 1") % prompt("Nombre 2");
		break;
		default:
		alert("Cette opération n'existe pas");
	}
	alert(result);
	bool = confirm("Voulez vous effectuer un autre calcul ?");
	}