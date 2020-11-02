import Highway from '@dogstudio/highway';
import {horizontalMoving} from "../animations/horizontalTitleMove";
import {mouseFollowLink} from "../animations/mouseFollowLink";
import {toggleVideoFromFollowLink} from "../animations/toggleVideoFromFollowLink";
import {tabsSwitch} from "../common/tabsSwitch";

class HomeRenderer extends Highway.Renderer {

    onEnter() {
        horizontalMoving();
        mouseFollowLink();
        toggleVideoFromFollowLink();
        tabsSwitch();
        // console.log('home page, on enter');
    }

    onEnterCompleted() {
        // console.log('home page, on enter completed');
    }
}

export default HomeRenderer;