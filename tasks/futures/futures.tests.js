({
	"#1: foo.resolved": function (resolve, reject) {
		var foo = new Futures(function (resolve) {
			resolve(123);
		});

		foo.then(function (val) {
			resolve([123, val]);
		}, function () {
			reject();
		});

		setTimeout(reject.bind(null, 'Maximum execution time'), 1000);
	},

	"#2: bar.rejected": function (resolve, reject) {
		var bar = new Futures(function (resolve, reject) {
			setTimeout(resolve.bind(null, "fail"), 300);
			setTimeout(reject.bind(null, "ok"), 200);
		});

		bar.then(function () {
			reject()
		}, function (val) {
			resolve(["ok", val]);
		});

		setTimeout(reject.bind(null, 'Maximum execution time'), 1000);
	}
})
