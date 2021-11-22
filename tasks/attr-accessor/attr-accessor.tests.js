({
	"foo": function () {
		return get(fixture, 'foo') === fixture.foo;
	},

	"unknown.foo.bar": function () {
		return get(fixture, 'unknown.foo.bar') === void 0;
	},

	"foo.bar.0.qux": function () {
		return get(fixture, 'foo.bar.0.qux') === 'bingo';
	}
})
