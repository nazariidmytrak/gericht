/* Календарь */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';


let picker;

if (document.querySelector('[data-datepicker]')) {
	picker = datepicker('[data-datepicker]', {
		customDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		overlayButton: 'Accept',
		overlayPlaceholder: 'Year (4 digits)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
}






flsModules.datepicker = picker;
