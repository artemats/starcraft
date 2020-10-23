import Highway from '@dogstudio/highway';
import Fade from  './transitions/fade';
import '../libs/smoothscroll';
import '../sass/styles.scss';
// import { highwayNav } from "./navigation/navigation";

/*
Core highway init
 */
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

/*
Highway navigation
 */
// highwayNav(H);