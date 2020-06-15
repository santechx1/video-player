import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js"

const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
// const playButton = document.querySelector('#playButton');
const muteButton = document.getElementById('muteButton');
// const playButton = document.querySelector('#muteButton');
// This is not recommended because browsers don't like automatic element actions 
// without a previous user interaction.        
// video.play(); 

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();