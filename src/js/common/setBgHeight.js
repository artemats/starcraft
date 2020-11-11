export const setBgHeight = () => {

    const bg = document.querySelector('.background');
    const wrapper = document.getElementById('wrapper');

    bg.style.height = wrapper.offsetHeight + 'px';

};

window.addEventListener('resize', () => setBgHeight());