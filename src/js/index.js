import '../sass/styles.scss';
import './common/detectIE';
import './smooth-scroll/smoothScroll';
import './animation/loader';
import {followMoving} from "./animation/follow-moving";
import {initLottie} from "./animation/lottie";
import './animation/perspectiveRotateOnMouse';
import './animation/doctorParallax';
import './animation/countdown';
import {scrollListener} from "./common/scroll-listener";
import {setBgHeight} from "./common/setBgHeight";

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

setBgHeight();