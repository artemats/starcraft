import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import { followMoving } from "./animation/follow-moving";
import {initLottie} from "./animation/lottie";

/*
Initial follow moving for links
 */
followMoving();

/*
Initial lottie animation
 */
initLottie();


console.log('ready');