define(function (require) {
	require('ace');

	var $ = require('jquery');
	var output = require('output');
	var testSuite = require('testSuite');
	var tasks = require('tasks');
	var Sandbox = require('sandbox');
	var debounce = require('debounce');
	var email = require('email');
	var lzString = require('lz-string');



	/**
	 * @class App
	 * @param {Object}  opts
	 */
	function App(opts) {
		output.el = $(opts.idOutput)[0];
		testSuite.el = $(opts.idSuite)[0];

		this.key = 'app';
		this.editor = this.initEditor(opts.idEditor);
		this.output = output;
		this.sandbox = new Sandbox();

		this.restore();

		tasks.onselect(function (code, html, tests, fiddle) {
			if (this.saving) {
				return;
			}

			if (fiddle) {
				code = lzString.decompress(code);
			}

			tasks.collapse();

			this.tests = tests;
			this.fiddle = !!fiddle;
			this.setCode(localStorage.getItem(this.getKey()) || code, html);
		}.bind(this));

		email.onclick = function () {
			email.set(this.getKey(), this.getCode());
		}.bind(this);
	}


	App.prototype = /** @lends App.prototype */ {
		initEditor: function (id) {
			var editor = ace.edit(id.substr(1));
			var runTests = debounce(this.runTests.bind(this), 100);

			editor.setTheme('ace/theme/xcode');
			editor.getSession().setMode('ace/mode/javascript');

			editor.on('change', debounce(function () {
				console.clear();

				this.save();
				this.exec(this.getCode());

				runTests();
			}.bind(this), 500));

			return editor;
		},

		runTests: function () {
			this.tests && this.sandbox.eval('testSuite.run(' + this.tests + ')');
		},

		exec: function (code) {
			this.output.clear();
			this.sandbox.set(code, this.html);
		},

		setCode: function (code, html) {
			this.html = html;

			this.editor.setValue(code);
			this.editor.clearSelection();
			this.editor.moveCursorTo(0, 0);
			this.editor.focus();
		},

		getCode: function () {
			return this.editor.getValue();
		},

		getKey: function () {
			return location.hash || this.key;
		},

		restore: function () {
			if (!this.fiddle) {
				this.setCode(localStorage.getItem(this.getKey()) || '');
			}
		},

		save: function () {
			var code = this.getCode();

			if (this.fiddle) {
				this.saving = true;
				location.hash = '!' + lzString.compress(code);
			} else {
				localStorage.setItem(this.getKey(), code);
			}
		}
	};


	return App;
});
