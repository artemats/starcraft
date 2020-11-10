export const detectDoctorHeight = () => {

    const html = document.querySelector('html');
    const heroHeight = document.getElementById('hero-sticky').offsetHeight;
    const heroDoctorWrapper = document.querySelector('.hero-center');

    if(!html.classList.contains('has-scroll-smooth')) {
        heroDoctorWrapper.style.height = ( heroHeight + ( window.innerHeight / 3 ) ) + 'px';
    }

};

window.addEventListener('resize', () => detectDoctorHeight());