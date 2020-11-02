import Highway from '@dogstudio/highway';
import {horizontalMoving} from "../animations/horizontalTitleMove";
import {mouseFollowLink} from "../animations/mouseFollowLink";
import {toggleVideoFromFollowLink} from "../animations/toggleVideoFromFollowLink";
import {tabsSwitch} from "../common/tabsSwitch";
import {photoParallax} from "../animations/photoParallax";
import {moveCursorUnderWorks} from "../animations/worksCursor";

class HomeRenderer extends Highway.Renderer {

    onEnter() {
        horizontalMoving();
        mouseFollowLink();
        toggleVideoFromFollowLink();
        tabsSwitch();
        photoParallax();
        moveCursorUnderWorks();
        // console.log('home page, on enter');
    }

    onEnterCompleted() {
        // console.log('home page, on enter completed');
    }
}

export default HomeRenderer;