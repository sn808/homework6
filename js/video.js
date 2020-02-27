var video, volumeslider;

function getVid(){
	video = document.querySelector("#myVideo"); 

}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML= video.volume * 100 + "%";
	console.log("Play Video");
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate/=2
  	console.log("Speed is "+ video.playbackRate);
 } 

function increaseSpeed() {
	video.playbackRate*=2.5
  	console.log("Speed is "+ video.playbackRate);
 } 

function skipAhead() {
 	var vid = document.getElementById("myVideo");
 	vid.currentTime +=60;
 	if(video.ended == true){
 		video.play()
 	}
 	console.log("Current location is " + video.currentTime);
 } 
 function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  	}
 
	else {
		console.log("Changing to Muted");
		video.muted = true;
	}
 }


  function changeVolume() {
  	volumeslider = document.getElementById("volumeSlider");
  	volume.volume=volumeslider.value/100;
  	console.log("Volume is"+ volumeslider.value);
  	volume.innerHTML = volumeslider.value + "%";
}
 

function gray() { 
	document.querySelector("#myVideo").style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	document.querySelector("#myVideo").style.filter = "grayscale(0%)";
	console.log("In color")
}

