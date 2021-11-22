({
	"sync": function (resolve, reject) {
		waterfall(
			function () { return 10; },
			function (val) { return val + 5; },
			function (val) { resolve([15, val]); }
		);

		setTimeout(reject, 1);
	},

	"async": function (resolve, reject) {
		waterfall(
			function () { return 10; },
			function (val, next) { setTimeout(function () { next(val + 5); }, 10); },
			function (val) { return val * 2; },
			function (val) { resolve([30, val]); }
		);

		setTimeout(reject, 50);
	}
})
