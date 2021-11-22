({
	"getRange(5)": function (resolve, reject) {
		var pid = setTimeout(reject.bind(null, 'timeout'), 100);

		getRange(5, function (values) {
			clearTimeout(pid);

			var result = values.join(', ');
			var expected = '1, 2, 3, 4, 5';

			resolve([result, expected]);
		});
	},
})
