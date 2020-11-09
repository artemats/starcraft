import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import { followMoving } from "./animation/follow-moving";
import { initLottie } from "./animation/lottie";
import './animation/perspectiveRotateOnMouse';

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

console.log('ready');