import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import {followMoving} from "./animation/follow-moving";
import {initLottie} from "./animation/lottie";
import './animation/perspectiveRotateOnMouse';
import './animation/doctorParallax';
import './animation/countdown';
import {scrollListener} from "./common/scroll-listener";
// import {lazyLoadImages} from "./common/lazyLoadImages";

/*
Initial follow moving for links
 */
followMoving();

/*
Initial lottie animation
 */
document.addEventListener('DOMContentLoaded', function () {
    initLottie();
    // lazyLoadImages();
}, false);

/*
Init scroll listener
 */
scrollListener();

console.log('ready');