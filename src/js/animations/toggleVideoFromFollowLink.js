import { TweenLite, Power4 } from 'gsap';
import {locoScroll} from "../smooth-scroll/smoothScroll";

export const toggleVideoFromFollowLink = () => {

    const videoLinks = document.querySelectorAll('.circle-box-video');

    for(let i = 0; i < videoLinks.length; i++) {

        const poster = videoLinks[i].querySelector('.video-poster');

        videoLinks[i].addEventListener('click', function (link) {

            let startX = link.offsetX;
            let startY = link.offsetY;
            let currentX = link.clientX;
            let currentY = link.clientY;

            console.log(locoScroll.scroll.instance.scroll.y);

            TweenLite.fromTo(poster,
                {
                    left: currentX,
                    top: currentY,
                },
                {
                    position: 'fixed',
                    left: 0,
                    top: locoScroll.scroll.instance.scroll.y,
                    height: '100vh',
                    width: '100vw',
                    borderRadius: 0,
                    opacity: 1,
                    scale: 1,
                    ease: Power4.easeOut,
                    onComplete: locoScroll.stop()
                });

        });

    }

};