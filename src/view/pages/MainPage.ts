import { el } from 'redom';
// import Section from '../comps/Section';
import Header from '../comps/Header';

export default class MainPage {
    private mainPage: HTMLElement;
    private header: Header;
    // private section: Section;

    constructor() {
        this.header = new Header();
        // this.section = new Section('tracks');
        this.mainPage = el('.app', this.header.render());
    }

    render(): HTMLElement {
        return this.mainPage;
    }
}