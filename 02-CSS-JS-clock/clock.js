let now = new Date();
console.log(now.getHours(),now.getMinutes(), now.getSeconds());
const minutesHand=document.querySelector(".clock__minute-hand");
const secondsHand=document.querySelector(".clock__second-hand");
console.log(minutesHand.style);
minutesHand.style.cssText= `transform:rotate(${+now.getMinutes()+90}deg);`;

// setInterval(function() {
// 	let now = new Date(),
// 	sec=+now.getSeconds();
//   secondsHand.style.cssText= `transform:rotate(${+sec*6+90}deg);`;
// }, 1000);
const rotateSec=()=>{
	let now = new Date(),
	sec=+now.getSeconds();
  secondsHand.style.cssText= `transform:rotate(${+sec*6+90}deg);`;
}

setTimeout(function run() {
  rotateSec();
  setTimeout(run, 100);
}, 100);