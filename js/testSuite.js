define(function () {
	var stringify = JSON.stringify;


	// Export
	return {
		run: function (suite) {
			var el = this.el,
				init = true;

			Object.keys(suite).forEach(function (text) {
				var fn = suite[text], res;

				try {
					if (fn.length > 0) {
						res = new Promise(function (resolve, reject) {
							try {
								fn(resolve, reject);
							} catch (err) {
								resolve(err);
							}
						});
					}
					else {
						res = fn();
					}
				} catch (err) {
					res = err;
				}


				function add(res) {
					if (el) {
						if (init) {
							init = false;
							el.innerHTML = '';
						}

						if (res == null || res === false) {
							el.innerHTML += '<div class="false">' + text + ': ' + res + '</div>';
						} else if (res && res.message != null && /Error/.test(res.name)) {
							el.innerHTML += '<div class="false">' + text + ': ' + res.message + '</div>';
						} else {
							var state = (res === true || stringify(res[0]) === stringify(res[1]));

							el.innerHTML += '<div class="' + state + '">'
								+ text
								+ ': ' + (res === true || (res && res.join && res.map(function (val) {
									return val === null ? 'null' : stringify(val);
								}).join(' === ')))
								+ '</div>'
						}
					}
				}

				this._cancel = function () {
					el = null;
				};

				if (res && res.then) {
					res.then(add, function (err) {
						add(err instanceof Error ? err : new Error(err));
					});
				} else {
					add(res);
				}
			});
		},

		cancel: function () {
			this._cancel && this._cancel();
		}
	};
});
