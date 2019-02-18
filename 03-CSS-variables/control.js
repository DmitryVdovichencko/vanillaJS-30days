const getInputValues=(inputElements)=>{
	const inputsValue={};
	inputElements.forEach(function(item,i,arr){
		inputsValue[i]={};

		inputsValue[i]["name"]=item.name;
		inputsValue[i]["value"]=item.value;
		if(item.dataset.sizing){
			inputsValue[i]["unit"]=item.dataset.sizing;
		}

		


	});
	console.log(inputsValue)
	return inputsValue;
}
const writingVars=(valueObject)=>{
	console.log(valueObject[0]["unit"]);
	for (let key in valueObject){
		writeVar(valueObject[key]["name"],valueObject[key]["value"], valueObject[key]["unit"]);		

	}

	// writeVar('spacing',valueObject[0].spacing, 'px');
	// writeVar('blur',valueObject[1].blur, 'px');
	// writeVar('base',valueObject[2].base);
}

const writeVar=(name,value,unit='')=>{
	let root = document.documentElement;
	root.style.setProperty(`--${name}`, `${value}${unit}`);
}

const control=()=>{
	const inputs=document.querySelectorAll("input");
	writingVars(getInputValues(inputs));
	inputs.forEach(function(item,i,arr){
		
		item.addEventListener("change", function(){
			writingVars(getInputValues(inputs));
		
		}, false);
		


	});

		
}
control();
