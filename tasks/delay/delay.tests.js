({
	"xxx.delay(50)": function (resolve, reject) {
		setTimeout(reject, 100);

		(function () {
			resolve([true, true]);
		}).delay(50);
	}
})
