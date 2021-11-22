/**
 * Реализовать функцию для формирования дерева категорий
 *
 * @param  {[{title: string, left: number, right: number}]} inputData
 * @return {string}
 */
function getCategoriesAsHTML(inputData) {
}

var container = document.getElementById('result-container');

container.innerHTML = getCategoriesAsHTML(getInputData());
// <ul>
//   <li>
//       Одежда
//       <ul>
//          <li>
//              Мужская
//              <ul>
//              <!-- И так далее -->
//       </ul>
//   </li>
// </ul>

// Входные данные, их трогать не надо
function getInputData() {
	return [
		{
			title: "Одежда",
			left: 1,
			right: 22
		},
		{
			title: "Мужская",
			left: 2,
			right: 9
		},
		{
			title: "Женская",
			left: 10,
			right: 21
		},
		{
			title: "Костюмы",
			left: 3,
			right: 8
		},
		{
			title: "Платья",
			left: 11,
			right: 16
		},
		{
			title: "Юбки",
			left: 17,
			right: 18
		},
		{
			title: "Блузы",
			left: 19,
			right: 20
		},
		{
			title: "Брюки",
			left: 4,
			right: 5
		},
		{
			title: "Жакеты",
			left: 6,
			right: 7
		},
		{
			title: "Вечерние",
			left: 12,
			right: 13
		},
		{
			title: "Летние",
			left: 14,
			right: 15
		}
	];
}
