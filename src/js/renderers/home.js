import Highway from '@dogstudio/highway';
import {horizontalMoving} from "../animations/horizontalTitleMove";
import {mouseFollowLink} from "../animations/mouseFollowLink";

class HomeRenderer extends Highway.Renderer {

    onEnter() {
        horizontalMoving();
        mouseFollowLink();
        // console.log('home page, on enter');
    }

    onEnterCompleted() {
        // console.log('home page, on enter completed');
    }
}

export default HomeRenderer;