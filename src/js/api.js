const formId = "telegramForm";
const form = document.getElementById(formId);
const subfooterForm = document.getElementById("telegramSubfooterForm");
//функция для захвата данных из тегов формы и синтеза JSON-обьекта
function toJSONString(form) {
	var obj = {};
	var elements = form.querySelectorAll("input, select, textarea");
	for (var i = 0; i < elements.length; ++i) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;
		if (name) {
			obj[name] = value;
		}
	}
	return JSON.stringify(obj);
}
function toJSONStringSubfooter(subfooterForm) {
	var obj = {};
	var elements = subfooterForm.querySelectorAll("input, select, textarea");
	for (var i = 0; i < elements.length; ++i) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;
		if (name) {
			obj[name] = value;
		}
	}
	return JSON.stringify(obj);
}
if (form) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		//получаем данные из формы
		const json = toJSONString(form);
		console.log("json: ", json);
		//создаем соединение
		const formReq = new XMLHttpRequest();
		formReq.open(
			"POST",
			"https://you-stud-back.herokuapp.com/api/telegram/message",
			true
		);

		//обрабатываем ответ сервера
		formReq.onload = function (oEvent) {
			if (formReq.status === 200) {
				// swal({
				// 	title: "Успешно отправлено!",
				// 	icon: "success",
				// 	timer: 2000,
				// });
				document.querySelector(".modal").style.display = "block";
				document.body.style.overflow = "hidden";
			}
			// if (formReq.status !== 200) {
			// 	swal({
			// 		title: "Произошла ошибка!",
			// 		icon: "error",
			// 		timer: 2000,
			// 	});
			// 	document.querySelector(".sa-error").style.display = "block";
			// 	document.querySelector(".sa-button-container").style.opacity =
			// 		"0";
			// }
		};
		////////////////////////////
		////////////////////////////
		formReq.setRequestHeader("Content-Type", "application/json");
		//отправляем
		formReq.send(json);
	});
}
if (subfooterForm) {
	subfooterForm.addEventListener("submit", (event) => {
		event.preventDefault();
		//получаем данные из формы
		const json = toJSONStringSubfooter(subfooterForm);
		console.log("json: ", json);
		//создаем соединение
		const formReq = new XMLHttpRequest();
		formReq.open(
			"POST",
			"https://you-stud-back.herokuapp.com/api/telegram/message",
			true
		);

		//обрабатываем ответ сервера
		formReq.onload = function (oEvent) {
			if (formReq.status === 200) {
				// swal({
				// 	title: "Успешно отправлено!",
				// 	icon: "success",
				// 	timer: 2000,
				// });
				document.querySelector(".modal").style.display = "block";
				document.body.style.overflow = "hidden";
			}
			// if (formReq.status !== 200) {
			// 	swal({
			// 		title: "Произошла ошибка!",
			// 		icon: "error",
			// 		timer: 2000,
			// 	});
			// 	document.querySelector(".sa-error").style.display = "block";
			// 	document.querySelector(".sa-button-container").style.opacity =
			// 		"0";
			// }
		};
		////////////////////////////
		////////////////////////////
		formReq.setRequestHeader("Content-Type", "application/json");
		//отправляем
		formReq.send(json);
	});
}
