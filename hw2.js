let num = +prompt('Введите любое число до 1000');
function printNum(num) {
	let result
	if (num > 1000) {
		result = 'Слишком большое число';
	} else if (num === 1 || num === 0) {
		result = 'Число ни простое, ни составное';
	} else {
		defineNum(num) ? result = `${num} простое число` : result = `${num} составное число`;
	}
	return result;
}

function defineNum(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	} return true;
}

console.log(printNum(num));