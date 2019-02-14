//create a play function

const findAudioEl=(event)=>{
	let audioSelector;
	console.log(event.type);
	if (event.type==="click"){
		audioSelector = 'audio[data-key=' + '"' + event.target.getAttribute('data-key') + '"]';
		console.log(audioSelector);
	}
	else if (event.type==="keydown"){
		audioSelector = 'audio[data-key=' + '"' + event.keyCode + '"]';
	}
	else{
		help('.help',true);
	};
	
	try{
    	
    	playAudio(audioSelector);
    }
    catch(e){
    	help('.help',true);

    }
};
const findKeyEl=(event)=>{
	let keySelector= '.key[data-key=' + '"' + event.keyCode + '"]';
	try{
  		animateKey(keySelector);
    }
    catch(e){
    	help('.help',true);
  
    }
};
const animateKey=(keySelector)=>{
     	let keyEl=document.querySelector(keySelector);
    	keyEl.classList.add("key_playing");
    	keyEl.addEventListener('transitionend', function() {
    	keyEl.classList.remove("key_playing");
  		});
};
const playAudio=(audioElementSel)=>{
	let audioEl=document.querySelector(audioElementSel);
	audioEl.play();
};
const help=(helpSel,display)=>{
	let helpEl = document.querySelector(helpSel);
	if(display){
		helpEl.classList.add('help_display');
	}
	else{		
		helpEl.classList.contains('help_display') ? helpEl.classList.remove('help_display') : {};	
	}
};

const playSound=(event)=>{

    
    help('.help',false);
	findAudioEl(event);
	findKeyEl(event);


};
// document.onkeydown = playSound;

document.querySelector(".key").addEventListener("click", playSound);
document.addEventListener("keydown", playSound);