({
	"[0, 1, 2].size": function () {
		var a =  [0, 1, 2];
		return [a.length, a.size];
	},

	"([0, 1, 2, 3].size = 2)": function () {
		var a = [0, 1, 2];
		a.size = 2;
		return [[0, 1], a];
	}
})
