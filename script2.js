let countries = ["Kazakhstan","Russia","England","France"];

let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

function changeFn(){
	let selected = event.currentTarget.value;
	document.querySelector("#countries").textContent = selected;
}
document.querySelector("select").addEventListener("change",changeFn);
function loadData(){
	let selectItem = document.querySelector("select");
	for(let country of countries){
		let optionItem = document.creatElement("option");
		optionItem.textContent=country;
		selectItem.appendChild(optionItem);
	}
	selectItem.disabled = false;
}
document.querySelector("button").addEventListener("click",loadData)
