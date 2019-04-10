// create Array from Checkboxes elements collection
const checkBoxes = Array.prototype.slice.call( document.querySelectorAll('input[type="checkbox"]'), 0 );
// find indexes of checked elments
const findChecked=(clickEl,elementsArr)=>{
	let res;
	elementsArr.forEach(function(item, i) {
		if (clickEl === item){
		 	res = i;
		 }
	});
	return res;
}

//check indexes to flip if end<begin and also exclude first and last elments
const indexCheck = (begin,end) => {
	const indexObj={};
	
	if(begin!==end){
		indexObj.begin= Math.min(begin, end)+1;
 		indexObj.end= Math.max(begin, end)-1;
	}
	return indexObj;
}
// adding checked attr function to els from begin to end
const addChecked=(begin,end,elementsArr)=>{
	const checkedArr = elementsArr.filter(function(item,i) {
 		return (i>=begin&&i<=end);
	});
	checkedArr.forEach(function(item) {
		item.checked = (item.checked) ? false : true;
	});
}
let count = 0, begin = 0, end = 0;

//common function when event detected

const shiftDetect=(event)=>{
	
	if (event.shiftKey) {
		count++;
		begin = (count===1) ? findChecked(event.target, checkBoxes) : begin;
		end = (count===2) ? findChecked(event.target, checkBoxes) : end;
	}
	
	if(count>1){
 		console.log(indexCheck(begin,end));
 		setTimeout(function(){
 			addChecked(indexCheck(begin,end).begin, indexCheck(begin,end).end, checkBoxes );
 		}, 200);
 		
		count=0;
	}

}
// shft key with click event detection
document.addEventListener('mousedown', shiftDetect);
