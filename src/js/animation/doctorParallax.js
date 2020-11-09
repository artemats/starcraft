import gsap from 'gsap';

const doctor = document.querySelector('.hero-center-doctor');

const doctorTl = gsap.timeline({
    scrollTrigger: {
        trigger: doctor,
        scroller: '#wrapper',
        scrub: true,
    }
});

console.log(doctorTl);

doctorTl
    .fromTo(doctor, {
        y: 0,
    }, {
        y: '-65%',
    }, 0.2);