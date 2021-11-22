// Реализовать паузу между командами
async function main() {
	// Какая-то логика до паузы
	let expr = 123;

	// Пауза в ~500ms секунду:
	// ...ваш код...

	// Какая-то логика после паузы
	return +expr.toString().split('').reverse().join('')
}

const ts = Date.now();
main().then((res) => {
	console.log(`result: ${res}, time: ${Date.now() - ts}ms`);
});