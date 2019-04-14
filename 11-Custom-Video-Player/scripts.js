// Get video & controls elements 
const video = document.querySelector('.player__video');
const play = document.querySelector('.play');
const progressBar = document.querySelector('.progress__filled');
const bar = document.querySelector('.progress');

// declare functions for custom controls
function togglePlay(videoEl) {
	animatePlay(play,'right','pause');
	const method = video.paused ? 'play' : 'pause';
 	videoEl[method]();
};
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
	console.log(`${document.body.clientWidth} ${( event.clientX-(document.body.clientWidth-bar.offsetWidth)/2 )*100/bar.offsetWidth} - %status width ${bar.offsetWidth} - bar width`);
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