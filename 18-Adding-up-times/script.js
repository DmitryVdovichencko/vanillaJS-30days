const items = Array.from(document.querySelectorAll('li'));

items.forEach(function(item){
	const timeElement = document.createElement('span');
	timeElement.classList.add("time");
	timeElement.innerHTML = item.dataset.time;
	item.appendChild(timeElement);

});

const total = items.reduce(function(result, item) {
  const time = item.dataset.time.split(/:/), min = +time[0]; sec = +time[1] + min*60; 
  return result + sec;
}, 0);

const convertTime = (unit,result=[]) => {
	if (Math.floor(unit/60)>0){
		if(result.length===0){
			result[0]=unit%60;
		}
		result.push(Math.floor(unit/60));
		result[result.length-2]=unit%60;
		unit = Math.floor(unit/60);
		return convertTime(unit,result)

	}
	else{
		if(result.length===0){
			result[0]=unit;
		}
		return result;
	}
	

}
const result = document.querySelector("#result");
result.innerHTML = `Total duration of all videos is <span class="time">${convertTime(total).reverse().join(":")}</span>`

