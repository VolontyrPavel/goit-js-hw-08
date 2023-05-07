
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe')
const player = new Vimeo(video);
const STORAGE_KEY = 'videoplayer-current-time';
const timeInMemory = localStorage.getItem(STORAGE_KEY) || 0;


const onPlay = function(data) {
    const currentTime = data.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timeInMemory).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});