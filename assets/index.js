import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector('video');
const button = document.querySelector('button');
// This is not recommended because browsers don't like automatic element actions 
// without a previous user interaction.        
// video.play(); 

const player = new MediaPlayer({ el: video });
button.onclick = () => player.togglePlay();