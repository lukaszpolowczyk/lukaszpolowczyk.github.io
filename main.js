// @ ts-check
'use strict';

const bodyClassEl = document.querySelector(".body");
const mainEl = document.querySelector("main");
const sidebarEl = document.querySelector(".sidebar");
const slidesEl = document.querySelector(".slides");

/*
const runSlideAnimation = (slideEl) => {
	// coś css animation/gif/wideo slideEl
};

let showedSlideEl = slidesEl.querySelectorAll(".slide")[0];
showedSlideEl.setAttribute("data-showed", true);
runSlideAnimation(showedSlideEl);

const runSlides = () => {
	// coś
	// then
	// coś
};

const showSlide = (slideName) => {
	const slideEl = document.querySelector(`.${slideName}`);
	const slideButEl = document.querySelector(`.${slideName}-but`);
	
};

const stopSlides = ()=> {
	
};
*/



const donateEl = sidebarEl.querySelector(".donate");
const donateSlideEl = slidesEl.querySelector(".donate-slide");
const addonSlideEl = slidesEl.querySelector(".addon-slide");
	
const donateTypeShow = (donateType) => {
	donateSlideEl.querySelector(`.donate-type-button[data-showed="true"]`).setAttribute("data-showed", "false");
	donateSlideEl.querySelector(`.donate-type-button.${donateType}-donate-type`).setAttribute("data-showed", "true");
	
	donateSlideEl.querySelector(`.donate-type[data-showed="true"]`).setAttribute("data-showed", "false");
	donateSlideEl.querySelector(`.donate-type.${donateType}-donate`).setAttribute("data-showed", "true");
};
donateTypeShow("paypal");

donateSlideEl.querySelectorAll(".donate-type-button").forEach((donateTypeButtonEl)=>{
	donateTypeButtonEl.addEventListener("mousedown", (e)=>{
		donateTypeShow(e.target.getAttribute("data-donate-type"));
	});
});

const playAddonPresentation = (addonId)=> {
	// pause/stop/remove before presentation
	
	// play current presensation
	
	// show donate slide
};

let animation;
const startDonate = ()=> {
	if (document.hidden) { return false; }
	
	const donateStartButtonEl = document.querySelector(".donate-start-button");
	const heartXEl = document.querySelector(".heart-x");
	
	let delay = 1700;
	if (hasAfterInstall) {
		delay = 0;
	}
	
	setTimeout(()=>{
		if (!document.hidden) {
			donateStartButtonEl.setAttribute("data-pulse-heart", "true");
			heartXEl.setAttribute("data-hide-heart", "false");
		}
	}, delay);
	
	if (hasAfterInstall) {
		setTimeout(()=>{
			if (!document.hidden) {
				slidesEl.setAttribute("donate-mode", "true");
			}
		}, 2400+850);
	}
}
window.addEventListener("visibilitychange", startDonate);
window.addEventListener("focus", startDonate);
window.addEventListener("mouseenter", startDonate);
window.addEventListener("DOMContentLoaded", startDonate);
	// const arrowEl = bodyClassEl.querySelector("arrow");
	// animation = arrowEl.animate(
	// 	[
	// 		{ transform: 'rotate(0) translate3D(-50%, -50%, 0)'},
	// 		{ transform: 'rotate(360deg) translate3D(-50%, -50%, 0)'}
	// 	],
	// 	{
	// 		duration: 1700,
	// 		iterations: 1
	// 	}
	// );
	
	
	// animation.onfinish = function () {
	// };
	
		//const heartEl = document.querySelector(".heart");
		//const donateStartButtonEl = document.querySelector(".donate-start-button");
		//donateStartButtonEl.style.background = "#ffe7eb";
		//donateStartButtonEl.setAttribute("data-pulse-heart", "true");
		//heartXEl.setAttribute("data-hide-heart", "false");
		
		//addonSlideEl.style.left = "-100%";
		//donateSlideEl.style.left = "-100%";
	
	// let anibef;
	// heartXEl.setAttribute("data-hide-heart", "false");
	// anibef = heartXEl.animate(
	// 	[
	// 		{ transform: 'translate(0, 100%)'},
	// 		{ transform: 'translate(0, 0%)'}
	// 	],
	// 	{
	// 		delay: 1700,
	// 		duration: 2000,
	// 		iterations: 1,
	// 		fill: "forwards"
	// 	}
	// );
	// anibef.onfinish = ()=> {
	// 	//heartXEl.setAttribute("data-hide-heart", "false");
	// };
	
	/*let pulse;
	const heartEl = document.querySelector(".heart");
	pulse = heartEl.animate(
		[
			{ transform: "scale(1.3)"},
			{ transform: "scale(1.3)" },
			{ transform: "scale(1)" },
			{ transform: "scale(1)" },
			{ transform: "scale(1.3)" }
		],
		{
			duration: 2000,
			easing: "easy",
			iterations: "infinite"
		}
	);*/
//startDonate();
// window.addEventListener("blur", ()=> {
// 	animation.pause();
// });


donateEl.addEventListener("mouseenter", ()=>{
	//const donateSlideEl = slidesEl.querySelector(".donate-slide");
	//const addonSlideEl = slidesEl.querySelector(".addon-slide");
	//if (donateSlideEl.getAttribute("data-showed") === "false") {
		//donateSlideEl.setAttribute("data-showed", true);
		
		//addonSlideEl.style.left = "-100%";
		//donateSlideEl.style.left = "-100%";
		
		//addonSlideEl.setAttribute("data-showed", false);
	//}
});


function tempElString (tempId, string) {
	var tempEl = document.createElement("template");
	tempEl.innerHTML = string;

	return document.importNode(tempEl.content, true).querySelector("."+tempId);
}
function tempEl (tempId) {
		if ("content" in document.createElement("template")) {

			var t = document.querySelector("#"+tempId);
			//console.log("t.content",t.content);
			var clone = document.importNode(t.content, true);
			//var clone = t.content.cloneNode(true);

			//console.log("sectionClone",clone.querySelector(".section-name"));

			return clone;
		}
	}

const addonsPansEl = mainEl.querySelector(".addons-pans");

addons.forEach((addon)=>{
	const addonPanEl = tempEl("addon-pan");
	addonPanEl.querySelector("h2").textContent = addon.name;
	addonPanEl.querySelector("addon-pan").className = addon.id;
	addonPanEl.querySelector(".addon-icon").style = `background-image: url(icons/${addon.id}.png)`;
	addonPanEl.querySelector(".addon-icon").href = addon.amoLink;
	addonPanEl.querySelector(".addon-icon").setAttribute("id", addon.id);
	addonPanEl.querySelector(".install").href = addon.installLink;
	addonPanEl.querySelector(".install").setAttribute("id", addon.id);

	addonPanEl.querySelector(".des").classList.add(addon.usersState);
	addonPanEl.querySelector(".des b").textContent = addon.users;
	addonPanEl.querySelector(".des .usersState").textContent = addon.usersState;
	addonPanEl.querySelector(".addon-des").textContent = addon.des;
	addonPanEl.querySelector(".addon-des").href = addon.amoLink;

	addonsPansEl.appendChild(addonPanEl);
});


addonsPansEl.querySelectorAll("addon-pan").forEach((addonPanEl, index)=>{
	addonPanEl.addEventListener("mouseenter", ()=>{
		//const donateSlideEl = slidesEl.querySelector(".donate-slide");
		//const addonSlideEl = slidesEl.querySelector(".addon-slide");
		//if (addonSlideEl.getAttribute("data-showed") === "false") {
			//addonSlideEl.setAttribute("data-showed", true);
			
			//addonSlideEl.style.left = "0";
			//donateSlideEl.style.left = "0";
			
			//donateSlideEl.setAttribute("data-showed", false);
		//}
		const addonId = addons[index];
		playAddonPresentation(addonId);
	});
});
