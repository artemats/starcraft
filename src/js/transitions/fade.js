import Highway from '@dogstudio/highway';
import Tween, { Power4 } from 'gsap';
import {locoScroll} from "../smooth-scroll/smoothScroll";

class Fade extends Highway.Transition {
    out({ from, done }) {
        Tween.fromTo(from, 0.5,
            {
                opacity: 1,
            },
            {
                opacity: 0,
                ease: Power4.easeNone,
                onComplete: done
            }
        );
    }
    in({ from, to, done }) {

        // window.scrollTo(0, 0);
        locoScroll.update();
        locoScroll.scrollTo(0, 0, 0, [0.25, 0.00, 0.35, 1.00], true);

        from.remove();
        Tween.fromTo(to, 0.5,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: Power4.easeNone,
                onComplete: done
            }
        );
    }
}

export default Fade;