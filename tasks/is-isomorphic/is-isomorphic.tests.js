({
	"egg -> add": function () {
		return [isIsomorphic('egg', 'add'), true];
	},

	"paper -> paper": function () {
		return [isIsomorphic('paper', 'paper'), true];
	},

	"kick -> side": function () {
		return [isIsomorphic('kick', 'side'), false];
	},

	"...": function () {
		return [isIsomorphic('kick', 'pic'), false];
	}
})
