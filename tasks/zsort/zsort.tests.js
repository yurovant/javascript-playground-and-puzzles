({
	"zsort([0, 0])": function () {
		return [zsort([0, 0]), [0, 0]];
	},

	"zsort([0, 0, 1])": function () {
		return [zsort([0, 0, 1]), [1, 0, 0]];
	},

	"zsort([1, 0, 2])": function () {
		return [zsort([1, 0, 2]), [1, 2, 0]];
	},

	"zsort([1, 0, 2, 3, 0, 4, 0])": function () {
		return [zsort([1, 0, 2, 3, 0, 4, 0]), [1, 2, 3, 4, 0, 0, 0]];
	}
})
