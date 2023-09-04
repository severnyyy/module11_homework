let arr = [1, 11, 12, true, 'false', 10, 14, null, 0];
function getElements() {
	for (var i=0, e=0, o=0, z=0; i<arr.length; i++) {
	if (typeof(arr[i]) ==='number') {
		if (arr[i] === 0) {
			z++;
		} else if (arr[i] % 2 === 0) {
			e++;
		} else {
			o++;
		}
	}
}
console.log('Четных элементов ' + e);
console.log('Нечетных элементов ' + o);
console.log('Нулевых элементов ' + z);
};
getElements();