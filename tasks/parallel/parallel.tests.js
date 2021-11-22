({
	"sync": function (resolve, reject) {
		parallel([
			function (resolve) { resolve(10); },
			function () { return 5; },
			function (resolve) { resolve(0); }
		], function (results) {
			resolve([[10, 5, 0], results]);
		});

		setTimeout(reject, 1);
	},

	"async": function (resolve, reject) {
		parallel([
			function (resolve) { setTimeout(function () { resolve(10); }, 50); },
			function () { return 5; },
			function (resolve) { setTimeout(function () { resolve(0); }, 10) }
		], function (results) {
			resolve([[10, 5, 0], results]);
		});

		setTimeout(reject, 100);
	}
})
