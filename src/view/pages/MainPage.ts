import { el } from 'redom';
import { createMusicNoteIconEl } from '../../services/createIconEl';
import Header from '../comps/Header';
import Tracks from '../views/Tracks';
import Side from '../comps/Side';

export default class MainPage {
    private mainPage: HTMLElement;
    private header: Header;
    private tracks: Tracks;
    private side: Side;

    constructor() {
        this.header = new Header();
        this.side = new Side();
        this.side.addItem(false, '/', createMusicNoteIconEl(), 'Избранное');
        this.side.addItem(true, '/', createMusicNoteIconEl(), 'Аудиокомпозиции');
        this.tracks = new Tracks(false);
        const mainEl = el('main', this.tracks.render());
        this.mainPage = el('.app', this.header.render(), this.side.render(), mainEl);
    }

    render(): HTMLElement {
        return this.mainPage;
    }
}