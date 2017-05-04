// @ts-check
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
	setTimeout(()=>{
		donateStartButtonEl.setAttribute("data-pulse-heart", "true");
		heartXEl.setAttribute("data-hide-heart", "false");
	}, 1700);
}
window.addEventListener("visibilitychange", startDonate);
window.addEventListener("focus", startDonate);
window.addEventListener("mouseenter", startDonate);
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



const addons = [
	// usersState: [over|exactly|under]
	{
		name: "Google Material Design Paper Theme - Best Theme",
		des: "Flat material theme. Minimal paddings, minimal borders, minimal colors.",
		users: "1200",
		usersState: "over",
		amoLink: "https://addons.mozilla.org/firefox/addon/best-theme-like-google-materia/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/best-theme-like-google-materia/platform:2/addon-661554-latest.xpi?src=dp-btn-primary",
		id: "besttheme"
	},
	{
		name: "Mini Audio Icon of Tab - Noise Control",
		des: " Converts large icon with information about audio playback by tab on small icon. Pinned to the icon of tab. It takes up less space on the tab bar. There is more space for name tabs. ",
		users: "400",
		usersState: "over",
		amoLink: "https://addons.mozilla.org/firefox/addon/mini-audio-icon-of-tab-noise-c/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/mini-audio-icon-of-tab-noise-c/platform:2/addon-661828-latest.xpi?src=dp-btn-primary",
		id: "AudioTabIcon"
	},
	{
		name: "Right Mouse + Mouse Wheel = Zoom Page",
		des: "Right Mouse Button and Mouse Scroll - Scale Page. RightClick + WheelClick = 100% scale. And Image scaling. ",
		users: "300",
		usersState: "over",
		amoLink: "https://addons.mozilla.org/firefox/addon/right-mouse-mouse-wheel-zoom-p/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/right-mouse-mouse-wheel-zoom-p/platform:2/addon-665486-latest.xpi?src=dp-btn-primary",
		id: "MouseScrollScalePage"
	},
	{
		name: "Hidden UI Elements",
		des: "Options removing not removable browser UI elements.",
		users: "100",
		usersState: "over",
		amoLink: "https://addons.mozilla.org/firefox/addon/hidden-ui-elements/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/hidden-ui-elements/platform:2/addon-660078-latest.xpi?src=dp-btn-primary",
		id: "HiddenUIElements"
	},
	{
		name: "Search Panel in Context Menu",
		des: "Select text in page and show context menu. In context menu - You will see the icons of search engines. URLbar context menu - Searching clipboard text.",
		users: "100",
		usersState: "under",
		amoLink: "https://addons.mozilla.org/firefox/addon/best-search-ultimate/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/best-search-ultimate/platform:2/addon-656368-latest.xpi?src=dp-btn-primary",
		id: "bestsearch"
	},
	{
		name: "Single Star Button (without Bookmarks Menu Button)",
		des: "Right Click to show Bookmarks Menu. Single Star Button without separate Bookmarks Menu Button. Remove Bookmarks Menu Button. Leaves same Single Star Button.",
		users: "100",
		usersState: "under",
		amoLink: "https://addons.mozilla.org/firefox/addon/bookmarks-menu-in-the-context-/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/bookmarks-menu-in-the-context-/platform:2/addon-662358-latest.xpi?src=dp-btn-primary",
		id: "bookmarksmenuOneIcon"
	},
	{
		name: "Tabs Features in one button",
		des: "Recent close tab button, all tabs list, recent close tabs list in one button. Plus extra features options.",
		users: "100",
		usersState: "under",
		amoLink: "https://addons.mozilla.org/firefox/addon/tabs-features/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/tabs-features/platform:2/addon-664362-latest.xpi?src=dp-btn-primary",
		id: "TabsFeatures"
	},
	{
		name: "Feed RSS mini icon on Bookmars Button",
		des: "Show Feed icon on Bookmarks Button. Subscribe lists in Bookmarks menu.",
		users: "100",
		usersState: "under",
		amoLink: "https://addons.mozilla.org/firefox/addon/feed-rss-mini-icon-on-bookmars/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/feed-rss-mini-icon-on-bookmars/platform:2/addon-662386-latest.xpi?src=dp-btn-primary",
		id: "FeedMiniIcon"
	},
	{
		name: "Reload when MiddleClick on Urlbar Best Reload Plus",
		des: "Refresh the active tab when you click on entire Urlbar on Middle Mouse Button. Plus shortcuts to Override Cache and duplicate tab and open tab in Google cache.",
		users: "100",
		usersState: "under",
		amoLink: "https://addons.mozilla.org/firefox/addon/bestreload/",
		installLink: "https://addons.mozilla.org/firefox/downloads/latest/bestreload/platform:2/addon-355201-latest.xpi?src=dp-btn-primary",
		id: "bestreload"
	}
];


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
	addonPanEl.querySelector(".install").href = addon.installLink;

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
