const panels = document.querySelectorAll(".panel");

function toggleOpen(){
	

  	 
    this.classList.toggle("open");
  
	

	
}
function toggleActive(e){

	if (e.propertyName.includes('flex')){

		this.classList.toggle("open-active");
	}
}
function removeClass(elArr, className){

	elArr.forEach(el=>{
		if(el.classList.contains(className)){
			el.classList.remove(className);
		}
	});
	console.log(className + "removed");
}
panels.forEach(panel=>panel.addEventListener('click', toggleOpen))
panels.forEach(panel=>panel.addEventListener('transitionend', toggleActive))