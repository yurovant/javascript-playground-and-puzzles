/**
 * Реализовать класс
 * @constructor
 */
function BinaryTree() {
}

var tree = new BinaryTree();

tree.add(2, 1, 3, 2.5, 4);
tree.add(5);

console.log('2:', tree.has(2)); // true
console.log('5:', tree.has(5)); // true

tree.remove(3);

console.log('3:', tree.has(3)); // false
console.log('2.5:', tree.has(2.5)); // true

console.log('size:', tree.size()); // 5
console.log('toArray:', tree.toArray()); // [1, 2, 2.5, 4, 5]
