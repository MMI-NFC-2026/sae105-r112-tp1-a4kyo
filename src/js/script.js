const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
const collH2 = document.querySelectorALL("h2")




aMettreEnRouge.style.color = "red";
enRougeSuiteAClick.addEventListener("click", (evt)=>{
	enRougeSuiteAClick.style.color = "red"
});

collH2.forEach((elm)=>{
	elm.addEventListener("click", (evt)=>{
		elm.style.color = "red";
	});
});