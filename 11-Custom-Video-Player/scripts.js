// Get video & controls elements 
const video = document.querySelector('.player__video');
const play = document.querySelector('.play');
const progressBar = document.querySelector('.progress__filled');
const bar = document.querySelector('.progress');
const volumeControl = document.querySelector('.player__slider[name = "volume"]');
const playbackRateControl = document.querySelector('.player__slider[name = "playbackRate"]');
const player__button = [...document.querySelectorAll('.arrow .player__button')];
// declare functions for custom controls
function togglePlay(videoEl) {
	animatePlay(play,'right','pause');
	const method = video.paused ? 'play' : 'pause';
 	videoEl[method]();
};
function rangeControls(videoEl, controlEl, propName){
	videoEl[propName]=controlEl.value;
};
function changeTime(videoEl, timeValue){
	timeValue=Number(timeValue);
	videoEl.currentTime = videoEl.currentTime + timeValue;
}
function animatePlay(playButton, ...className){
	className.forEach( function(element){
		playButton.classList.toggle(element);
	});
};
function currentTime(videoEl){
	return video.currentTime;
}
function displayTime(videoEl,statusBar){
	statusBar.style.width = `${currentTime(videoEl)/videoEl.duration*100}%`;
	
}
function changeCurrentTime(event,videoEl,statusBar,bar){
	
	const selTime= (event.clientX-(document.body.clientWidth-bar.offsetWidth)/2 )/bar.offsetWidth;
	videoEl.currentTime=`${Math.round(selTime*videoEl.duration)}`;
}
function control(videoEl){
	setTimeout(function updateProgress() {
  		displayTime(video,progressBar);
  		setTimeout(updateProgress, 500);
	}, 500);
	
}

// add event listeners for control
play.addEventListener('click', function(){togglePlay(video);});
video.addEventListener('play', function(){control(video);});
bar.addEventListener('click', function(){changeCurrentTime(event,video,progressBar,bar);});
volumeControl.addEventListener('change', function(){rangeControls(video, volumeControl, 'volume')});
playbackRateControl.addEventListener('change', function(){rangeControls(video, playbackRateControl, 'playbackRate')});
player__button.forEach( function(button){
		button.addEventListener('click', function(event){changeTime(video,event.target.dataset.skip);});
	});