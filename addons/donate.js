

const donatePanelEl = document.querySelector(".paypal-donate");
const donateStartButtonEl = document.querySelector(".donate-start-button");

const donateThisSumEl = donatePanelEl.querySelector(".donate-this-sum");
const inputSub_InputEl = donatePanelEl.querySelector(".input-sub input");
const currencySwitchEl = donatePanelEl.querySelector(".currency-switch");

const paypalSumEls = donatePanelEl.querySelectorAll(".paypal-sum");

var qrcodePP = new QRCode(donatePanelEl.querySelector(".qrcode_image"), {
    text: "test",
    width: 170,
    height: 170,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

const refreshDonateButton = ()=> {
	const value = donateThisSumEl.getAttribute("value");
	const curr = currencySwitchEl.getAttribute("data-curr");
	const monthly = inputSub_InputEl.checked;
	const currChar = currencySwitchEl.getAttribute("data-curr-char");
	let sub = "";
	let mth = "";
	if (monthly) {
		sub = `-subscriptions&a3=${value}&p3=1&t3=M`;
		mth = "/mth";
	}
	paypalSumEls.forEach((paypalSumEl)=>{
		paypalSumEl.querySelector(".curr-char").textContent = currChar;
	});
	const url = `https://www.paypal.com/cgi-bin/webscr?business=dev.lukaszpolowczyk@gmail.com&cmd=_xclick${sub}&currency_code=${curr}&amount=${value}&item_name=Addons%20-%20Lukasz%20Polowczyk`;
	
	donateThisSumEl.setAttribute("href", url);

	//const value = paypalSumSelEl.getAttribute("value");
	donateThisSumEl.textContent = `Donate ${currChar}${value}${mth}`;
	
	qrcodePP.makeCode(url);
	const img = donatePanelEl.querySelector(".qrcode_image").src;
	donatePanelEl.querySelector(".qrcode_image").style.backgroundImage = img;
};


donateStartButtonEl.addEventListener("mousedown", ()=> {
	slidesEl.setAttribute("donate-mode", true);
});


donateEl.addEventListener("mousedown", ()=> {
	slidesEl.setAttribute("donate-mode", true);
});

const inputSum_inputEl = donatePanelEl.querySelector(".input-sum input");
inputSum_inputEl.addEventListener("input", ()=>{
	const inputSumEl = donatePanelEl.querySelector(".input-sum");
	inputSumEl.setAttribute("value", inputSum_inputEl.value);
	const value = inputSumEl.getAttribute("value");
	donateThisSumEl.setAttribute("value", value);
	refreshDonateButton();
});

const paypalSumSel = (paypalSumSelEl) => {
	donatePanelEl.querySelector(`.donate-sum[data-sel="true"]`).setAttribute("data-sel", false);
	paypalSumSelEl.setAttribute("data-sel", true);
	const value = paypalSumSelEl.getAttribute("value");
	donateThisSumEl.setAttribute("value", value);
	refreshDonateButton();
};

paypalSumSel(paypalSumEls[0]);

paypalSumEls.forEach((paypalSumEl)=>{
	paypalSumEl.addEventListener("mousedown", (e)=>{
		paypalSumSel(paypalSumEl);
	});
});

inputSub_InputEl.addEventListener("change", refreshDonateButton);

currencySwitchEl.addEventListener("mousedown", ()=>{
	const curr = currencySwitchEl.getAttribute("data-curr");
	if (curr === "USD") {
		currencySwitchEl.setAttribute("data-curr", "EUR");
		currencySwitchEl.setAttribute("data-curr-char", "€");
	} else
	if (curr === "EUR") {
		currencySwitchEl.setAttribute("data-curr", "USD");
		currencySwitchEl.setAttribute("data-curr-char", "$");
	}
	refreshDonateButton();
});

const BTCTomBTC = (val)=> {
	return Math.ceil(val*100000)/100;
};

const USDTomBTC = (course, price)=> {
	return BTCTomBTC(1/course*price);
};



const bitcoinDonateEl = document.querySelector(".bitcoin-donate");
const bitcoinSumEls = bitcoinDonateEl.querySelectorAll(".bitcoin-sum");

const bitcoinDonateThisSumEl = bitcoinDonateEl.querySelector(".donate-this-sum");

var qrcodeBTC = new QRCode(bitcoinDonateEl.querySelector(".qrcode_image"), {
    text: "test",
    width: 150,
    height: 150,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

const refreshBitcoinDonateButton = ()=> {
	const value = bitcoinDonateThisSumEl.getAttribute("value");
	const url = `bitcoin:1ApifHGVqxAHq8sn5NyAjmhWocb85kJTp4?amount=${value}?label=AddonsLukaszPolowczyk`;
	
	bitcoinDonateThisSumEl.setAttribute("href", url);

	//const value = paypalSumSelEl.getAttribute("value");
	bitcoinDonateThisSumEl.textContent = `Donate Ƀ${value}`;
	
	qrcodeBTC.makeCode(url);
	const img = bitcoinDonateEl.querySelector(".qrcode_image").src;
	bitcoinDonateEl.querySelector(".qrcode_image").style.backgroundImage = img;
};

const btcInputSum_inputEl = bitcoinDonateEl.querySelector(".input-sum input");
btcInputSum_inputEl.addEventListener("input", ()=>{
	const inputSumEl = bitcoinDonateEl.querySelector(".input-sum");
	const value = Math.ceil((btcInputSum_inputEl.value/1000)*100000)/100000;
	inputSumEl.setAttribute("value", value);
	bitcoinDonateThisSumEl.setAttribute("value", value);
	refreshBitcoinDonateButton();
});

const bitcoinSumSel = (bitcoinSumSelEl) => {
	bitcoinDonateEl.querySelector(`.donate-sum[data-sel="true"]`).setAttribute("data-sel", false);
	bitcoinSumSelEl.setAttribute("data-sel", true);
	const value = bitcoinSumSelEl.getAttribute("value");
	bitcoinDonateThisSumEl.setAttribute("value", value);
	refreshBitcoinDonateButton();
};

bitcoinSumSel(bitcoinSumEls[0]);

bitcoinSumEls.forEach((bitcoinSumEl)=>{
	bitcoinSumEl.addEventListener("mousedown", (e)=>{
		bitcoinSumSel(bitcoinSumEl);
		//const link = `bitcoin:1ApifHGVqxAHq8sn5NyAjmhWocb85kJTp4?amount=${2}?label=AddonsLukaszPolowczyk`;
		//bitcoinDonateThisSumEl.setAttribute("href", link);
	});
});

// const bitcoinSumSelect = ()=> {
	
// }