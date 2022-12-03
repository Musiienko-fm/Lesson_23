"use strict"

//№1
console.log('35' + -"22");

//№2
console.log('35' * "22");

//№3
//console.log('558' > 22++);

//№4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);

//№5
console.log(!false && 11 || 18 && !'');

//№6
let name = 0;
console.log(name ?? "Без имени");




//№1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

//№2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

//№3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//№4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}

//№1
let numWhile = 5;
while (numWhile) {
	console.log(numWhile);
	numWhile--;
}

let numDoWhile = 0;
do {
	console.log(numDoWhile);
	numDoWhile++;
} while (numDoWhile < 5);

let numFor;
for (numFor = 5; numFor > 0; numFor--) {
	console.log(numFor);
}

//№2
let num = 8;
while (num) {
	console.log(num);
	num--;
}

//№3
let numWh = 0;
while (numWh < 3) {
	console.log(`Число: ${numWh}`);
	numWh++;
}

//№4
firstFor: for (let numF = 0; numF < 2; numF++) {
	for (let size = 0; size < 2; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

//№1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

//№2
//let value = "135.58px";
let value = parseFloat("150.58px");
console.log(value);

//№3
let valueNa = 58 + "Фрилансер";
if (isNaN) {
	console.log('Результат выражения NaN');
}

//№4
let maxNumber = Math.max(10, 58, 39, -150, 0);
console.log(maxNumber);

//№5
let numbRound = Math.floor(58.858);
console.log(numbRound);

//№1
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
console.log(text);

//№2
let textT = "фрилансер";
console.log(textT.slice(-4, -3));

//№3
let textS = 123 + "456";
console.log(textS);

//№4
let textU = "фрилансер";
console.log(textU.toUpperCase());

//№5
let textLan = "фрилансер";
console.log(textLan.slice(3, 6));

//№6
let textOr = "фрилансер";
console.log(textOr.includes('лан', 4));







