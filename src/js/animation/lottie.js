import lottie from "lottie-web";
import { locoScroll } from '../smooth-scroll/smoothScroll';

export const initLottie = () => {
    // const linksBg = document.querySelectorAll('.follow-link-bg');
    // for(let i = 0; i < linksBg.length; i++) {
    //     initLinkLottie(linksBg[i]);
    // }

    locoScroll.on('call', (func, dir, obj) => {

        const linkBg = obj.target.querySelector('.follow-link-bg');

        if(func === 'start_link_lottie' && dir === 'enter') {

            initLinkLottie(linkBg);
            // console.log('enter - ', obj.target);

        } else {

            lottie.destroy();
            // console.log('exit - ', obj.target);

        }

    });

};

const initLinkLottie = (bg) => {
    lottie.loadAnimation({
        container: bg,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../lottie/lightning/data.json',
        rendererSettings: {
            progressiveLoad: true
        }
    });
};