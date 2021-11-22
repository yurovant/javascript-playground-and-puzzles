var graph = new function () {
	this.items = 'abcde'.split('');
	this.matrix = this.items.map(() => Array(this.items.length).fill(0));

	this.link = (v, deps) => {
		const row = this.items.indexOf(v);

		deps.forEach(v => {
			this.matrix[row][this.items.indexOf(v)] = 1;
		});
	};
};

graph.link('a', ['b', 'c']);
graph.link('b', ['a', 'e', 'd']);
graph.link('c', ['a', 'd']);
graph.link('d', ['a', 'b', 'c']);
graph.link('e', ['b']);

console.log(graph);
