({
	"xmap": function () {
		const map = new XMap();
		const objKey = {foo: true};

		map.set(123, 'ok');

		map.set(objKey, 'fail');
		map.has(objKey) && map.set(objKey, 'wow');

		const a = map.get(123);
		const b = map.get(objKey);

		map.remove(123);
		map.remove(objKey);

		return [
			[a, b, map.has(123), map.has(objKey)],
			['ok', 'wow', false, false]
		];
	}
})
