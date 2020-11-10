import gsap from 'gsap';

const doctor = document.querySelector('.hero-center-doctor');

const doctorTl = gsap.timeline({
    scrollTrigger: {
        trigger: doctor,
        scroller: '#wrapper',
        scrub: true,
    }
});

doctorTl
    .set(doctor, {
        opacity: 0.4
    })
    .fromTo(doctor, {
        y: 0,
        opacity: 0.4
    }, {
        y: '-65%',
        opacity: 1
    }, 0.2);