import { TweenLite } from 'gsap';

let request = null;
let mouse = {
    x: 0,
    y: 0
};
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;
const thumb = document.querySelector('.motivation-content-thumb');

document.body.addEventListener('mousemove', function (event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    if(window.innerWidth > 992) {
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
    }
});

const update = () => {

    let dx = mouse.x - cx;
    let dy = mouse.y - cy;

    let tiltx = (dy / cy);
    let tilty = -(dx / cx);
    let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    let degree = (radius * 20);
    TweenLite.set(thumb, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'});
};

window.addEventListener('resize', function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
});