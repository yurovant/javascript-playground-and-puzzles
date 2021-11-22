({
	"then": function (resolve) {
		var values = [];
		var dfd = deferred();

		dfd.then(function (val) { values.push(val) });
		dfd.then(function (val) { values.push(val) });

		dfd.resolve(123);
		dfd.resolve('fail');

		dfd.then(function (val) { values.push(val) });
		dfd.resolve('fail');

		setTimeout(function () {
			resolve([[123, 123, 123], values]);
		}, 10);
	},

	"resolve": function (resolve) {
		var values = [];
		var dfd = deferred();

		dfd.resolve(123);
		dfd.then(function (val) { values.push(val) });

		dfd.resolve('fail');
		dfd.then(function (val) { values.push(val) });

		setTimeout(function () {
			resolve([[123, 123], values])
		}, 10);
	}
})
