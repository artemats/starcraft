import Highway from '@dogstudio/highway';
import Fade from  './transitions/fade';
import '../libs/smoothscroll';
import '../sass/styles.scss';
import HomeRenderer from "./renderers/home";
import AboutRenderer from "./renderers/about";
import ContactsRenderer from "./renderers/contacts";
import WorkRenderer from "./renderers/work";
import ProjectRenderer from "./renderers/project";

/*
Core highway init
 */
const H = new Highway.Core({
    renderers: {
        home: HomeRenderer,
        about: AboutRenderer,
        contacts: ContactsRenderer,
        work: WorkRenderer,
        project: ProjectRenderer
    },
    transitions: {
        default: Fade
    }
});