// Доработать функцию


function getRange(length, callback) {
	var values = [];

	for (var i = 0; i < length; i++) {
		setTimeout(function () {
			values.push(i);
		}, i * 10);
	}

	callback(values);
}


getRange(5, function (values) {
	console.log(values);
});
