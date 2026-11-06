const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
const collH2 = document.querySelectorALL("h2")




aMettreEnRouge.style.colour = "red";
enRougeSuiteAClick.addEventListener("click", (evt)=>{
	enRougeSuiteAClick.style.colour = "red"
});

collH2.forEach((elm)=>{
	elm.addEventListener("click", (evt)=>{
		evt.target.style.color = "red";
	});
});