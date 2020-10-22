import Highway from '@dogstudio/highway';
import Fade from  './transitions/fade';
import '../libs/smoothscroll';
import '../sass/styles.scss';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

console.log('ready');