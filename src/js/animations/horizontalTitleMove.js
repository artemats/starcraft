import gsap from "gsap/gsap-core";

export const horizontalMoving = () => {

    const titles = document.querySelectorAll('.title-abstract-value');

    for(let i = 0; i < titles.length; i++) {
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: titles[i],
                scroller: '#wrapper',
                scrub: true,
            }
        });
        titleTl
            .set(titles[i], {
                x: '100vw',
            })
            .fromTo(titles[i], {
                x: '100vw',
            }, {
                x: '-100vw',
            });
    }
};