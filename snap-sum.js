function arraySum(arr) {
	let sum = 0;
	arr.forEach(function(e) {
		sum = sum + e;
	})
	return sum;
}