

const hoursHand=document.querySelector(".clock__hour-hand"),
minutesHand=document.querySelector(".clock__minute-hand"),
secondsHand=document.querySelector(".clock__second-hand"),


timeToDeg=(timeUnit,timeStep,conv,countUnit)=>((timeUnit+timeStep/conv)*360)/countUnit,
rotateEl=(el,transitionTime,timeValue,timeStep,conv,countUnit)=>{
	timeValue===0 ?
	el.style.cssText= `transform:rotate(${timeToDeg(timeValue,timeStep,conv,countUnit)}deg);` :
	el.style.cssText= `transform:rotate(${timeToDeg(timeValue,timeStep,conv,countUnit)}deg); transition: all 0.05s; transition-timing-function: cubic-bezier(.1,2.7,.58,1);`
},	

rotateHands=()=>{
	const now = new Date(),
	sec=now.getSeconds(),
	minutes=now.getMinutes(),
	hours=now.getHours();
	rotateEl(secondsHand,0.05,sec,0,1,60,60);
	rotateEl(minutesHand,0.05,minutes,sec,60,60);
	rotateEl(hoursHand,0.05,hours,minutes,60,12);

  
  
};

// setInterval(rotateHands,1000);
setTimeout(function run() {
  rotateHands();
  setTimeout(run, 1000);
}, 1000);