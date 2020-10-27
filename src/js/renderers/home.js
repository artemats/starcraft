import Highway from '@dogstudio/highway';
import {horizontalMoving} from "../animations/horizontalTitleMove";

class HomeRenderer extends Highway.Renderer {

    onEnter() {
        horizontalMoving();
        // console.log('home page, on enter');
    }

    onEnterCompleted() {
        // console.log('home page, on enter completed');
    }
}

export default HomeRenderer;