define(['text!../tasks/tasks.json'], function (list) {
	var tasks = JSON.parse(list);
	var path = '../tasks';


	// Export
	return ({

		init: function () {
			var el = this.el = document.createElement('div');

			this.el = el;

			el.id = 'tasks';
			el.innerHTML = Object.keys(tasks).map(function (name) {
				var task = tasks[name];
				return '<a href="#' + name + (task.rev ? '-' + task.rev : '') + '">' + task.name + '</a>';
			}).join('<br/>');

			el.addEventListener('click', function () {
				el.classList.toggle('collapse');
			}, false);

			document.body.appendChild(el);

			window.addEventListener('hashchange', this, false);

			return this;
		},

		collapse: function () {
			this.el.classList.add('collapse');
		},

		handleEvent: function () {
			var name = location.toString().split('#')[1];

			if (tasks[name]) {
				require('.js .html .tests.js'.split(' ').map(function (ext) {
					return 'text!' + path + '/' + name + '/' + name + ext;
				}), this._onselect);
			}
			else if (name && name.charAt(0) === '!') {
				this._onselect(name.substr(1), '', [], true);
			}
		},

		onselect: function (callback) {
			this._onselect = callback;
			this.handleEvent();
		}

	}).init();
});
