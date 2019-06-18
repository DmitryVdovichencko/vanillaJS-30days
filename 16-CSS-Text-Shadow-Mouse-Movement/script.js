const hero = document.querySelector('.hero');
const text = document.querySelector('.hero h1');
// here we define how far does the shadow goes ( How far does the dark goes?:-) )
const walk = 100;



function shadow(e){
	/* Get width and height without using destructuring
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	*/ 
	const {offsetWidth: width, offsetHeight:height} = hero;
	let {offsetX: x, offsetY: y} = e;
	/* 
	Now, here is a problem: if we hover on h1 element instead of hero el,
	we get offsets for the e.target, not for hero element. We need to normalize x and y values,
	relative to hero element. And for this purposes we declared x and y with let operator

	*/
	if (this !== e.target){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	
	const xWalk = Math.round( x * (walk/this.offsetWidth) - (walk/2) );
	const yWalk = Math.round( y * (walk/this.offsetHeight) - (walk/2) );
	
	text.style.textShadow = `
	${xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
	${xWalk * -1}px ${yWalk}px 0 rgba(0,0,255,0.7),
	${yWalk}px ${xWalk * -1}px 0 rgba(255,0,255,0.7),
	${yWalk * -1}px ${xWalk* -1 }px 0 rgba(255,255,0,0.7)
	`
}

hero.addEventListener('mousemove', shadow);