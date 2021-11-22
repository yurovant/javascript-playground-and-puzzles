/**
 * Реализовать свой Map
 * @constructor
 */
function XMap() {
}

// Проверка
const map = new XMap();
const objKey = {foo: true};

map.set(123, 'ok');
map.set(objKey, 'fail');
map.has(objKey) && map.set(objKey, 'wow');

console.log(map.get(123)); // "ok"
console.log(map.get(objKey)); // "wow"

map.remove(123);
console.log(map.has(123)); // false
