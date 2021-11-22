// Параллельные вычисления

function parallel() {
}


parallel([
	function (resolve) {
		setTimeout(function () {
			resolve(10);
		}, 50);
	},
	function () {
		return 5;
	},
	function (resolve) {
		setTimeout(function () {
			resolve(0);
		}, 10)
	}
], function (results) {
	console.log(results); // [10, 5, 0]
});
