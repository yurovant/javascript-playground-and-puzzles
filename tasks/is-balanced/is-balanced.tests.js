({
	"balanced": function () {
		return [isBalanced('{{}}-{}-{}-{{}-{}}'), true];
	},

	"not balanced (left)": function () {
		return [isBalanced('{}{{}'), false];
	},

	"not balanced (right)": function () {
		return [isBalanced('{}}{}'), false];
	}
})
