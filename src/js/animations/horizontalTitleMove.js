import gsap from "gsap/gsap-core";

const title = document.querySelector('.title-abstract-value');

const titleTl = gsap.timeline({
    scrollTrigger: {
        trigger: title,
        scroller: '#wrapper',
        scrub: true,
    }
});

titleTl
    .set(title, {
        x: '100vw',
    })
    .fromTo(title, {
        x: '100vw',
    }, {
        x: '-100vw',
    });