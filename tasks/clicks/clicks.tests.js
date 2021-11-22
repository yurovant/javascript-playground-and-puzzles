({
	"check": function () {
		var sandbox = isolate(function () {
			var btn = document.querySelector('button'), i = 10;

			while (i--) {
				simulateEvent(btn, 'click');
			}

			return btn.innerHTML;
		});

		return ['Click me (3)', sandbox.getResult()];
	}
})
