const formId = "telegramForm";
const form = document.getElementById(formId);
const subfooterForm = document.getElementById("telegramSubfooterForm");

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

function postApi(selectForm) {
	selectForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const json = toJSONString(selectForm);

		const formReq = new XMLHttpRequest();
		formReq.open(
			"POST",
			"https://youstud.herokuapp.com/api/telegram/message",
			true
		);

		formReq.onload = function (oEvent) {
			if (formReq.status === 200) {
				document.querySelector(".modal").style.display = "block";
				document.body.style.overflow = "hidden";
			}
			// if (formReq.status !== 200) {

			// }
		};

		formReq.setRequestHeader("Content-Type", "application/json");

		formReq.send(json);
	});
}
if (form) {
	postApi(form);
}
if (subfooterForm) {
	postApi(subfooterForm);
}
