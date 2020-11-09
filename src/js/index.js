import '../sass/styles.scss';
import './smooth-scroll/smoothScroll';
import { followMoving } from "./animation/follow-moving";
import lottie  from 'lottie-web';

/*
Initial follow moving for links
 */
followMoving();

/*
Initial lottie animation
 */
lottie.loadAnimation({
   container: document.querySelector('.follow-link-bg'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../lottie/lightning/data.json'
});

console.log('ready');