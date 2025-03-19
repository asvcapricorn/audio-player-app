import { el } from 'redom';

export default class Tracks {
    private tracks: HTMLElement;
    private title: HTMLElement;
    constructor(favourite: boolean) {
        this.title = el('h1.tracks__title', favourite === true ? 'Избранное' : 'Аудиофайлы и треки');
        this.tracks = el('section.tracks', this.title);
    };

    render(): HTMLElement {
        return this.tracks;
    }
}