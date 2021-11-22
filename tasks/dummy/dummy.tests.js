({
	"foo === bar": function () {
		return new Dummy() === new Dummy();
	},

	"bar.setValue(123)": function () {
		var bar = new Dummy();
		bar.setValue(123);
		return [bar.getValue(), new Dummy().getValue()];
	},

	"bonus": function () {
		return Dummy() === new Dummy();
	}
})
