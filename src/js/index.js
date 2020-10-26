import Highway from '@dogstudio/highway';
import Fade from  './transitions/fade';
// import '../libs/smoothscroll';
import '../sass/styles.scss';
import HomeRenderer from "./renderers/home";
import AboutRenderer from "./renderers/about";
import ContactsRenderer from "./renderers/contacts";
import WorkRenderer from "./renderers/work";
import ProjectRenderer from "./renderers/project";
import LocomotiveScroll from 'locomotive-scroll';
// import '../.'
// import gsap, { Power4 } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

/*
Core highway init
 */
const H = new Highway.Core({
    renderers: {
        home: HomeRenderer,
        about: AboutRenderer,
        contacts: ContactsRenderer,
        work: WorkRenderer,
        project: ProjectRenderer
    },
    transitions: {
        default: Fade
    }
});

// let height;
const scrollContainer = document.querySelector('#wrapper');

const locoScroll = new LocomotiveScroll({
   el: scrollContainer,
    smooth: true,
    smoothMobile: false
});
//
// function setHeight() {
//     height = scrollContainer.clientHeight;
//     document.body.style.height = height + 'px';
// }
//
// ScrollTrigger.addEventListener('refreshInit', setHeight);
//
// gsap.to(scrollContainer, {
//     y: () => -(height - document.documentElement.clientHeight),
//     ease: Power4.easeOut,
//     scrollTrigger: {
//         trigger: document.body,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1,
//         invalidateOnRefresh: true
//     }
// });
// gsap.registerPlugin(ScrollTrigger);
