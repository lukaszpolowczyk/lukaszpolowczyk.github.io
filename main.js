function changeVariable (name, value) {
	console.log(value);
	document.documentElement.style.setProperty(`--${name}`, value);
	
	document.querySelector("#css-vars").textContent = `html{${document.documentElement.getAttribute("style")}}`;
}

const ns = [
	"screen-edge-margin-width",
	"content-width",
	"bg-color",
	"bg-patter-url-left",
	"bg-patter-url-right",
	"bg-squares-url-left",
	"bg-squares-url-right",
	"bg-fade-width-start",
	"bg-fade-width-end",
	"bg-pattern-size",
	"bg-fade-point"
];

ns.forEach((name)=>{
	const value = getComputedStyle(document.body).getPropertyValue(`--${name}`);
	console.log(value);
	document.querySelector(`#${name}`).value = value;
});

(()=>{
	const name = "mirror";
	const value1 = getComputedStyle(document.body).getPropertyValue(`--bg-mirror-val1`);
	const value2 = getComputedStyle(document.body).getPropertyValue(`--bg-mirror-val2`);
	console.log("value1",value1,  " -1", value1 == " -1");
	if (value1 == " -1") {
		document.querySelector(`#${name}`).checked = true;
	} else {
		document.querySelector(`#${name}`).checked = false;
	}
})();
(()=>{
	const name = "bg-fade-point";
	const value1 = getComputedStyle(document.body).getPropertyValue(`--${name}`);
	const value2 = getComputedStyle(document.body).getPropertyValue(`--screen-edge-margin`);
	const value3 = getComputedStyle(document.body).getPropertyValue(`--content-edge`);
	
	if (value1.includes(value2)) {
		document.querySelector(`#${name}`).options[0].selected = "selected";
	}
	if (value1.includes(value3)) {
		document.querySelector(`#${name}`).options[1].selected = "selected";
	}
})();
(()=>{
	const name = "bg-fade-color";
	const value1 = getComputedStyle(document.body).getPropertyValue(`--${name}`);
	
	console.log("value1",value1,  " var(--bg-color)", value1 == " var(--bg-color)");
	if (value1 == " transparent") {
		document.querySelector(`#${name}`).checked = false;
		document.querySelector(`#bg-fade-width-start`).setAttribute("disabled", "disabled");
		document.querySelector(`#bg-fade-width-end`).setAttribute("disabled", "disabled");
		document.querySelector(`#bg-fade-point`).setAttribute("disabled", "disabled");
	} else {
		document.querySelector(`#${name}`).checked = true;
		document.querySelector(`#bg-fade-width-start`).removeAttribute("disabled");
		document.querySelector(`#bg-fade-width-end`).removeAttribute("disabled");
		document.querySelector(`#bg-fade-point`).removeAttribute("disabled");
	}
})();
(()=>{
	const name = "bg-repeat";
	const value1 = getComputedStyle(document.body).getPropertyValue(`--${name}`);
	
	console.log("value1",value1,  " repeat", value1 == " repeat");
	if (value1 == " repeat") {
		document.querySelector(`#${name}`).checked = true;
	} else {
		document.querySelector(`#${name}`).checked = false;
	}
})();
(()=>{
	const name = "bg-pattern-size";
	const value1 = getComputedStyle(document.body).getPropertyValue(`--${name}`);
	const value2 = getComputedStyle(document.body).getPropertyValue(`--screen-edge-margin-width`);
	
	if (value1.includes(document.querySelector(`#${name}`).options[0].value)) {
		document.querySelector(`#${name}`).options[0].selected = "selected";
	} else
	if (value1.includes(value2)) {
		document.querySelector(`#${name}`).options[1].selected = "selected";
	} else
	if (value1.includes("calc(100% -")) {
		document.querySelector(`#${name}`).options[2].selected = "selected";
	}
})();

document.querySelector(`#${ns[0]}`).addEventListener("change", (event)=>changeVariable(ns[0], event.target.value));
document.querySelector(`#${ns[1]}`).addEventListener("change", (event)=>changeVariable(ns[1], event.target.value));
document.querySelector(`#${ns[2]}`).addEventListener("change", (event)=>changeVariable(ns[2], event.target.value));
document.querySelector(`#${ns[3]}`).addEventListener("change", (event)=>changeVariable(ns[3], event.target.value));
document.querySelector(`#${ns[4]}`).addEventListener("change", (event)=>changeVariable(ns[4], event.target.value));
document.querySelector(`#${ns[5]}`).addEventListener("change", (event)=>changeVariable(ns[5], event.target.value));
document.querySelector(`#${ns[6]}`).addEventListener("change", (event)=>changeVariable(ns[6], event.target.value));

document.querySelector(`#mirror`).addEventListener("change", (event)=>{
	if (event.target.checked) {
		changeVariable("bg-mirror-val1", "-1");
		changeVariable("bg-mirror-val2", "left");
	} else {
		changeVariable("bg-mirror-val1", "1");
		changeVariable("bg-mirror-val2", "right");
	}
});
document.querySelector(`#bg-fade-color`).addEventListener("change", (event)=>{
	if (event.target.checked) {
		changeVariable("bg-fade-color", "var(--bg-color)");
		document.querySelector(`#bg-fade-width-start`).removeAttribute("disabled");
		document.querySelector(`#bg-fade-width-end`).removeAttribute("disabled");
		document.querySelector(`#bg-fade-point`).removeAttribute("disabled");
	} else {
		changeVariable("bg-fade-color", "transparent");
		document.querySelector(`#bg-fade-width-start`).setAttribute("disabled", "disabled");
		document.querySelector(`#bg-fade-width-end`).setAttribute("disabled", "disabled");
		document.querySelector(`#bg-fade-point`).setAttribute("disabled", "disabled");
	}
});
document.querySelector(`#bg-repeat`).addEventListener("change", (event)=>{
	if (event.target.checked) {
		changeVariable("bg-repeat", "repeat");
	} else {
		changeVariable("bg-repeat", "repeat-y");
	}
});

document.querySelector(`#${ns[7]}`).addEventListener("change", (event)=>changeVariable(ns[7], event.target.value));
document.querySelector(`#${ns[8]}`).addEventListener("change", (event)=>changeVariable(ns[8], event.target.value));

document.querySelector(`#${ns[9]}`).addEventListener("change", (event)=>changeVariable(ns[9], event.target.value));
document.querySelector(`#${ns[10]}`).addEventListener("change", (event)=>changeVariable(ns[10], event.target.value));



document.querySelector(`#css-vars`).addEventListener("click", (event)=>{
	const range = document.createRange();
	range.selectNode(document.getElementById("css-vars"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);

	/* Copy the text inside the text field */
	document.execCommand("copy");
})