/**
 * Асинхронный reduce
 * @param  {any[]}    input
 * @param  {Function} iterator
 * @param  {any} initialValue
 * @return {Promise}
 */
function asyncReduce(input, iterator, initialValue) {
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

asyncReduce(
	[a, c, b],
	(acc, value) => [...acc, value],
	['d']
).then(results => {
	console.log(results); // ['d', 'a', 'c', 'b'];
});
