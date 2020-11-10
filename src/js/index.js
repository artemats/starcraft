import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import {followMoving} from "./animation/follow-moving";
import {initLottie} from "./animation/lottie";
import './animation/perspectiveRotateOnMouse';
import './animation/doctorParallax';
import './animation/countdown';
import {scrollListener} from "./common/scroll-listener";
import {detectDoctorHeight} from "./common/detectDoctorHeight";

/*
Initial follow moving for links
 */
followMoving();

/*
Detect hero height for doctor parallax
 */
detectDoctorHeight();

/*
Initial lottie animation
 */
document.addEventListener('DOMContentLoaded', function () {
    initLottie();
}, false);

/*
Init scroll listener
 */
scrollListener();

console.log('ready');