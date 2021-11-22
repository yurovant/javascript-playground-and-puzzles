({
	"empty": function () {
		return [rle(''), ''];
	},

	"A": function () {
		return [rle('A'), 'A'];
	},

	"ABABBAAAAAB": function () {
		return [rle('ABABBAAAAAB'), 'ABAB2A5B'];
	}
})
