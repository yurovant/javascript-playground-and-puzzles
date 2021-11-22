define(function () {
	return function debounce(func, delay, immediate) {
		var timeout;

		return function() {
			var context = this,
				args = arguments;

			clearTimeout(timeout);

			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) {
					func.apply(context, args);
				}
			}, delay);

			if (immediate && !timeout) {
				func.apply(context, args);
			}
		};
	};
});
