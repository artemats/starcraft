import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import { followMoving } from "./animation/follow-moving";
import { initLottie } from "./animation/lottie";
import './animation/perspectiveRotateOnMouse';
import './animation/doctorParallax';
import './animation/countdown';
import {scrollListener} from "./common/scoll-listener";

/*
Initial follow moving for links
 */
followMoving();

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