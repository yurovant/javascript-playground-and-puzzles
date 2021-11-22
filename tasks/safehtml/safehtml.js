// Получить безопасный HTML
//  * #source — элемент, в котором лежит исходный HTML
//  * #result — элемент, куда нужно вставить безопасный HTML

function getSafeHTML(html) {
	// ...
	return html;
}


// Используем
var html = source.innerHTML.slice(4, -3).trim();
var res = getSafeHTML(html);

result.innerHTML = res;

console.log('source:', html);
console.log('result:', res);
