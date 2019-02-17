
//Find elements function. If we click on element we use key argument, if we click on keyboard - we use event object.
const findEl=(event,key)=>{
	let el={};
	if (key){
		el.keyEl=document.querySelector(`.key[data-key="${key}"]`);
		el.audioEl=document.querySelector(`audio[data-key="${key}"]`);
	}
	else {
		el.keyEl=document.querySelector(`.key[data-key="${event.keyCode}"]`);
		el.audioEl=document.querySelector(`audio[data-key="${event.keyCode}"]`,);
	}
	return el;

};
// animate function
const animateKey=(keyEl)=>{
       	keyEl.classList.add("key_playing");
    	keyEl.addEventListener('transitionend', function() {
    	keyEl.classList.remove("key_playing");
  		});
};
//play audio function with restart playing, when we click on buttons a lot
const playAudio=(audioEl)=>{
	audioEl.currentTime=0;
	audioEl.play();
};
// help function - will start, if we click on other keys on keyboard. So if display === false help message will disappear
const help=(helpSel,display)=>{
	let helpEl = document.querySelector(helpSel);
	if(display){
		helpEl.classList.add('help_display');
	}
	else{		
		helpEl.classList.contains('help_display') ? helpEl.classList.remove('help_display') : {};	
	}
};
//finally it's controlSound function to manage help, find, play and animate functions
const controlSound=(event,key)=>{
	help('.help',false);
	try{
		playAudio(findEl(event,key).audioEl);
		animateKey(findEl(event,key).keyEl);
    }
    catch(e){
    	help('.help',true);
    }



};


document.querySelectorAll('.key').forEach(function(item,i,arr){
	item.addEventListener("click", function(){
		controlSound(null,this.dataset.key)
	}, false);
});

document.addEventListener("keydown", controlSound);