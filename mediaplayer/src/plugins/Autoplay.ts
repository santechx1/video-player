import MediaPlayer from '../MediaPlayer';

class Autoplay {
    constructor() { }
    run = function (player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    };
}

export default Autoplay;