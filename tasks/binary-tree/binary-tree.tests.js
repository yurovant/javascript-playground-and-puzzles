({
	'all': function () {
		var tree = new BinaryTree();

		tree.add(2, 1, 3, 2.5, 4);
		tree.add(5);

		var has2 = tree.has(2);
		var has5 = tree.has(5);
		var has3 = tree.has(3);
		var len5 = tree.size();

		tree.remove(3);

		return [
			[
				len5,
				has2, has5, has3,
				tree.has(3), tree.has(2.5),
				tree.size(),
				tree.toArray()
			],
			[
				6,
				true, true, true,
				false, true,
				5,
				[1, 2, 2.5, 4, 5]
			],
		];
	}
})
