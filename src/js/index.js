import Highway from '@dogstudio/highway';
import Fade from  './transitions/fade';
import '../libs/smoothscroll';
import '../sass/styles.scss';

/*
Core highway init
 */
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});