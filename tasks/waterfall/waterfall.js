// Реализовать waterfall


function waterfall() {
}


waterfall(
	function () {
		return 10;
	},
	function (val, done) {
		setTimeout(function () {
			done(val + 5);
		}, 100);
	},
	function (val) {
		return val * 2;
	},
	function (val) {
		console.log(val); // 30
	}
);
