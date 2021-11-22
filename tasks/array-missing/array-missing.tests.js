({
	"[]": function () {
		return [missing([]), void 0];
	},

	"[1, 4, 3]": function () {
		return [missing([1, 4, 3]), 2];
	},

	"[2, 3, 4]": function () {
		return [missing([2, 3, 4]), 1];
	},

	"[5, 1, 4, 2]": function () {
		return [missing([5, 1, 4, 2]), 3];
	},

	"[1, 2, 3, 4]": function () {
		return [missing([1, 2, 3, 4]), void 0];
	}
})
