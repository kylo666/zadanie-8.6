// script.js

var a = 1;
var b = 2;

var value = (a * a) - (2 * a * b) + (b * b);
console.log('Wynik:', value);

if(value > 0){
	console.log('Wynik dodatni');
} else if(value < 0){
	console.log('Wynik ujemny');
}
