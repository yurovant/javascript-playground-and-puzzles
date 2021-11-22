({
	'result': function (resolve) {
		main().then((res) => resolve([321, res]));
	},

	'pause >= 500ms': function (resolve) {
		const ts = Date.now();
		main().then(() => resolve(Date.now() - ts >= 500));
	}
})
