import { locoScroll } from '../smooth-scroll/smoothScroll';

export const scrollListener = () => {

    locoScroll.on('call', (func, dir) => {
        /*
        Start counter
         */
        if(func === 'startCounter' && dir === 'enter') {

        } else {

        }

    });

};