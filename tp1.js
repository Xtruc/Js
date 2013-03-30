function convertor(number) {
    var numberfinished;
    var number1 = number % 10;
    var number2 = Math.floor((number % 100) / 10);
    var number3 = Math.floor(number / 100);
    var first = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    var second = ["dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    var third = ["cent", "deux-cent", "trois-cent", "quatre-cent", "cinq-cent", "six-cent", "sept-cent", "huit-cent", "neuf-cent"];
    var special = ["onze", "douze", "treize", "quatorze", "quinze", "seize"];
    if (number2 === 1 && number1 <= 6) {
        numberfinished = third[number3 - 1] + "-" + special[number1 - 1];
    } else if (number2 === 9 && number1 <= 6) {
        numberfinished = third[number3 - 1] + "-" + second[number2 - 2] + "-" + special[number1 - 1];
    } else {
        numberfinished = third[number3 - 1] + "-" + second[number2 - 1] + "-" + first[number1 - 1];
    }
    return numberfinished;

}
var compter = true;
while (compter) {
var number = prompt("Donnez un nombre entre 0 et 999");
if (number < 0 || number > 999 || isNaN(number) === true) {
    alert("Ce nombre n'est pas valable");
} else {
    numberFinished = convertor(number);
    alert("Votre nombre s'ecrit :" + numberFinished);
}
compter = confirm("Voulez vous traduire un autre chiffre ?");
}