import { el } from 'redom';
import TracksTable from '../comps/TracksTable';

export default class Tracks {
    private tracks: HTMLElement;
    private title: HTMLElement;
    private table: TracksTable;

    constructor(favourite: boolean) {
        this.title = el('h1.tracks__title', favourite === true ? 'Избранное' : 'Аудиофайлы и треки');
        this.table = new TracksTable();
        this.tracks = el('section.tracks', this.title, this.table.render());
    };

    render(): HTMLElement {
        return this.tracks;
    }
}