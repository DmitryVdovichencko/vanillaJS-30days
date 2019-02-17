

const hoursHand=document.querySelector(".clock__hour-hand"),
minutesHand=document.querySelector(".clock__minute-hand"),
secondsHand=document.querySelector(".clock__second-hand"),


timeToDeg=(timeUnit,timeStep,conv)=>((timeUnit+timeStep/conv)*360)/60,
rotateEl=(el,transitionTime,timeValue,timeStep,conv)=>{
	timeValue===0 ?
	el.style.cssText= `transform:rotate(${timeToDeg(timeValue,timeStep,conv)}deg);` :
	el.style.cssText= `transform:rotate(${timeToDeg(timeValue,timeStep,conv)}deg); transition: all 0.05s; transition-timing-function: cubic-bezier(.1,2.7,.58,1);`
},	

rotateHands=()=>{
	const now = new Date(),
	sec=now.getSeconds(),
	minutes=now.getMinutes()
	hours=now.getHours();
	rotateEl(secondsHand,0.05,sec,0,1);
	rotateEl(minutesHand,0.05,minutes,sec,60);
	rotateEl(hoursHand,0.05,hours,minutes,60);
	// sec===0 ?
	// secondsHand.style.cssText= `transform:rotate(${sec*6}deg);` :
	// secondsHand.style.cssText= `transform:rotate(${sec*6}deg); transition: all 0.05s; transition-timing-function: cubic-bezier(.1,2.7,.58,1);`
  
  
};

// setInterval(rotateHands,1000);
setTimeout(function run() {
  rotateHands();
  setTimeout(run, 1000);
}, 1000);