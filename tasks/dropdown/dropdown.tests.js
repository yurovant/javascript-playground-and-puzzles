({
	"dd is Widget": function () {
		return new Dropdown(menu.cloneNode(true)) instanceof Widget;
	},

	"dd is Dropdown": function () {
		return new Dropdown(menu.cloneNode(true)) instanceof Dropdown;
	},

	"dd.toggle": function () {
		var sandbox = isolate(function () {
			var ctrl = dd.find('.js-ctrl');
			var menu = dd.find('.js-menu');
			var res = [];

			res.push(menu.offsetHeight > 0);

			simulateEvent(ctrl, 'click');
			res.push(menu.offsetHeight > 0);

			simulateEvent(ctrl, 'click');
			res.push(menu.offsetHeight > 0);

			return res;
		});

		return [[false, true, false], sandbox.getResult()];
	}
})
