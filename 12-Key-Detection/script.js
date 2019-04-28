
const arr=[];
const checkArr = (arr, arrStr) => {
	return arr.join('') === arrStr;
}
const checkArrLength = (arr, arrLength) => {

	if (arr.length === arrLength) {
			
		arr.splice(0, 4);
		return arr;

	}
	else{
		return arr;
	}
}
const highlightKey = (event,keyEl) => {
	if(keyEl.dataset.key===event.key){
		keyEl.classList.add("highlight");
	}
	else{

	}
} 
const animatePage = (showT,startAnimate) => {
	if(startAnimate){
		document.querySelector(".congrats").classList.add("show");
		document.querySelector(".content").classList.add("green");
	setTimeout(
		function() { 
			document.querySelector(".congrats").classList.remove("show");
			document.querySelector(".content").classList.remove("green"); 
		}, showT);
	}


}
const showKey = (event) => {
 	checkArrLength(arr,4).push(event.key);
 	animatePage(10000, checkArr(arr,"dima") );
 	
}




document.addEventListener("keyup", showKey);