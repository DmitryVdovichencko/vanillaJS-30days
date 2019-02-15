//create a play function

const findAudioEl=(event)=>{
	let audioSelector;


	audioSelector = `audio[data-key="${event.keyCode}"]`;

	

	try{
    	
    	playAudio(audioSelector);
    }
    catch(e){
    	console.log(e);
    	help('.help',true);

    }
};
const findKeyEl=(event)=>{
	let keySelector= `.key[data-key="${event.keyCode}"]`;
	try{
  		animateKey(keySelector);
    }
    catch(e){
    	console.log(e);
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
	audioEl.currentTime=0;
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


document.addEventListener("keydown", playSound);