define(function (require) {
	var $ = require('jquery'),
		output = {},
		console = window.console;


	// Extend
	'error info warn'.split(' ').forEach(function (name) {
		output[name] = function () {
			return console[name].apply(console, arguments);
		};
	});


	output.append = function (el, attrs) {
		if (typeof el == 'string') {
			el = document.createElement(el);
		}

		if (attrs) {
			if (attrs.text) {
				el.appendChild(document.createTextNode(attrs.text));
				delete attrs.text;
			}

			$.extend(el, attrs);
		}

		this.el.appendChild(el);
		return el;
	};


	output.clear = function () {
		this.el.innerHTML = '';
	};


	output.dir = function (value) {
		this.append('pre', { text: JSON.stringify(value, null, 2), className: 'log' });
	};


	output.log = function () {
		try {
			var text = $.map(arguments, function (val) {
				return val && val.nodeType
					? ('&lt;' + val.nodeName.toLowerCase() + '/&gt;')
					: (val === void 0
							? "undefined"
							: JSON.stringify(val)
					)
					;
			}).join(' ');

			this.append('div', {text: text, className: 'log'});
		} catch (err) {}

		console.log.apply(console, arguments);
	};


	output.error = function (msg) {
		this.append('div', { text: msg, className: 'log' }).style.color = 'red';
	};


	output.htmlBlock = function (el) {
		this.append(el);
	};


	// Export
	return output;
});
