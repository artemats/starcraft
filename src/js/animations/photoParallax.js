import gsap, { Power4 } from 'gsap';

export const photoParallax = () => {

    const photos = document.querySelectorAll('.person-photo img');

    for(let i = 0; i < photos.length; i++) {

        const photoTl = gsap.timeline({
            scrollTrigger: {
                trigger: photos[i],
                scroller: '#wrapper',
                scrub: true,
            }
        });

        photoTl
            .set(photos[i], {
                scale: 1.5,
                opacity: 0,
            })
            .fromTo(photos[i], {
                scale: 1.5,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                ease: Power4.easeOut
            });

    }

};