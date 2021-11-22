({
	"div.onclick": function () {
		return [null, result.firstChild.getAttribute('onclick')];
	},

	"script": function () {
		return [null, !!result.querySelector('script')];
	},

	"img": function () {
		return [null, result.querySelector('img').getAttribute('onerror')];
	},

	"a.bug.href": function () {
		var a = result.querySelector('a');
		a.click();
		return [null, a.getAttribute('href')];
	},

	"a.normal.href": function () {
		var a = result.querySelectorAll('a')[1];
		return ["/foo.html", a.getAttribute('href')];
	}
})
