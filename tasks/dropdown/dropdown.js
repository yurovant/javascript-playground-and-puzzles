/** @class Widget */
var Widget = function (el, options) {
    this.el = el;
    this.options = options || {};
};

Widget.prototype.find = function (selector) {
    return this.el.querySelector(selector);
};

/** @class Dropdown */
/** @extends Widget */
var Dropdown = function () {
    // Выполним родительский метод:
    // ...
    this.find('.js-ctrl').addEventListener('click', this.handleEvent);
};

// Тут наследуем Widget
// ...

Dropdown.prototype.handleEvent = function (evt) {
    this.toggle();
};

Dropdown.prototype.toggle = function () {
    var menu = this.find('.js-menu');
    // нужно добавить или убрать класс `collapsed`
};

// Используем
var dd = new Dropdown(menu);

// Тесты
console.log('dd is Widget:', dd instanceof Widget);
console.log('dd is Dropdown:', dd instanceof Dropdown);
