({
	"0": function () {
		return r_sign09.test('0');
	},

	"-123": function () {
		return r_sign09.test('-123');
	},

	"+345": function () {
		return r_sign09.test('+345');
	},

	"123+345": function () {
		return [false, r_sign09.test('123+345')];
	},

	"345+": function () {
		return [false, r_sign09.test('345+')];
	},

	"x123": function () {
		return [false, r_sign09.test('x123')];
	}
})
