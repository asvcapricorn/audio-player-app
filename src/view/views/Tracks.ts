import { el } from 'redom';
import TracksTable from '../comps/TracksTable';
import Track from '../comps/Track';
import requests from '../../model/requestsClass';

export default class Tracks {
    private tracks: HTMLElement;
    private title: HTMLElement;
    private table: TracksTable;

    constructor(favourite: boolean) {
        this.title = el('h1.tracks__title', favourite === true ? 'Избранное' : 'Аудиофайлы и треки');
        this.table = new TracksTable();

        requests.getTracks(window.localStorage.getItem('token'))
            .then(data => {
                console.log(data);
                for (const track of data) {
                    this.table.addTrack(new Track(track.id, track.title, track.artist, track.duration));
                }
            })
            .catch(error => console.error(error));

        this.tracks = el('section.tracks', this.title, this.table.render());
    };

    render(): HTMLElement {
        return this.tracks;
    }
}