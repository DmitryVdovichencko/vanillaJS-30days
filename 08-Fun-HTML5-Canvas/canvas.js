const canvas = document.querySelector("canvas");
//to fill the intire window size 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*debounce function - when we resize window
canvas resized only 1 time per 100ms
*/
const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) { clearTimeout(timer) };
    timer = setTimeout(func, 100, event);
  }
};

window.addEventListener('resize', debounce(() => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}));
//Get a context from the canvas
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


let drawing = false, lastX=0, lastY=0, hue=0, direction = true;

function draw(e){
	if(!drawing) return;
	
	ctx.strokeStyle = `hsl(${hue},100%,50%)`;
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX,lastY);
	//go to
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	[lastX, lastY]=[e.offsetX, e.offsetY];
	hue++;
	if(hue>=360){
		hue=0;
	}
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
		//flip direction
		direction=!direction;
	}
	if(direction){
		ctx.lineWidth++;
	}
	else{
		ctx.lineWidth--;
	}
}



document.addEventListener('mousemove', draw);

document.addEventListener('mousedown', (e) => {
	drawing = true;
	[lastX, lastY]=[e.offsetX, e.offsetY];

});
document.addEventListener('mouseup', () => drawing = false);
document.addEventListener('mouseout', () => drawing = false);