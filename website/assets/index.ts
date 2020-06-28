import MediaPlayer from '@santechx/platzimediaplayer';
import AutoPlay from '@santechx/platzimediaplayer/lib/plugins/Autoplay';
import AutoPause from '@santechx/platzimediaplayer/lib/plugins/Autopause';
import Ads from '@santechx/platzimediaplayer/lib/plugins/Ads';


const video = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('playButton');
// const playButton = document.querySelector('#playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');
// const playButton = document.querySelector('#muteButton');
// This is not recommended because browsers don't like automatic element actions 
// without a previous user interaction.        
// video.play(); 

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}