import { el, svg } from 'redom';
import Track from './Track';

export default class TracksTable {
    private tracksTable: HTMLElement;
    private tableListEl: HTMLElement;

    constructor() {
        const tableHeadEl = el('.tracks-table__head',
            el('span.tracks-table__head-text', '№'),
            el('span.tracks-table__head-text', 'Название'),
            el('span.tracks-table__head-text', 'АЛЬБОМ'),
            svg('svg.tracks-table__icon', {
                'aria-hidden': true,
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
            }, [
                svg('path', {
                    d: 'M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M11 1.5V3.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M5 1.5V3.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                }),
                svg('path', {
                    d: 'M2.5 5.5H13.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                })
            ]),
            el('span.tracks-table__head-text', ''),
            svg('svg.tracks-table__icon', {
                'aria-hidden': true,
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
            }, [
                svg('path', {
                    d: 'M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z',
                    stroke: 'currentColor',
                    'stroke-miterlimit': '10'
                }),
                svg('path', {
                    d: 'M8 4.5V8H11.5',
                    stroke: 'currentColor',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                })
            ]),
            el('span.tracks-table__head-text', '')
        );

        this.tableListEl = el('ul.tracks-table__list');
        this.tracksTable = el('.tracks-table', tableHeadEl, this.tableListEl);
    };

    addTrack(track: Track) {
        const tableListItemEl = el('li.tracks-table__item', track.render());
        this.tableListEl.appendChild(tableListItemEl);
    }

    render(): HTMLElement {
        return this.tracksTable;
    }
}