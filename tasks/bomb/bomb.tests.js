({
	"delay": function (resolve, reject) {
		var XBomb = function () {
			Bomb.apply(this, arguments);
		};

		XBomb.prototype = Object.create(Bomb.prototype);
		XBomb.prototype.blowUp = reject.bind({}, "fail");

		setTimeout(resolve.bind({}, true), 0);
		new XBomb("OK", .01);
	},

	"message": function (resolve) {
		var XBomb = function () {
			Bomb.apply(this, arguments);
		};

		XBomb.prototype = Object.create(Bomb.prototype);

		XBomb.prototype.blowUp = function () {
			resolve(["Wow!", this.message]);
		};

		new XBomb("Wow!", .01);
	}
})
