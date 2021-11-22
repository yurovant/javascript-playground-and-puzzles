({
	"isPalindrome('')": function () {
		return [isPalindrome(''), true];
	},

	"isPalindrome('abcdcba')": function () {
		return [isPalindrome('abcdcba'), true];
	},

	"isPalindrome('abcd')": function () {
		return [isPalindrome('abcd'), false];
	},

	"isPalindrome('...')": function () {
		return [isPalindrome('A man a plan a canal Panama'), true];
	}
})
