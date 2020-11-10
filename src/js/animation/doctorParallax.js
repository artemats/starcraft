import gsap from 'gsap';

const doctor = document.querySelector('.hero-center-doctor');
const html = document.querySelector('html');

const doctorTl = gsap.timeline({
    scrollTrigger: {
        trigger: doctor,
        scroller: '#wrapper',
        scrub: true,
    }
});

if(html.classList.contains('has-scroll-smooth') || window.innerWidth > 767) {
    doctorTl
        .set(doctor, {
            opacity: 0.4
        })
        .fromTo(doctor, {
            y: 0,
            opacity: 0.4
        }, {
            y: '-65%',
            opacity: 1,
        }, 0.2);
}